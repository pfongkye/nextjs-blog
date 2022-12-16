---
title: 'AWS Game Day (second edition)'
date: '2022-12-14'
---

# Game Day 5th Edition

We had the 5th Game Day organised by ManoMano, and if I recall well the second one in collaboration with [AWS](https://aws.amazon.com/fr/). 
The main theme this time was about sustainability: how to reduce resource expenses and carbon footprint by [right sizing](https://aws.amazon.com/aws-cost-management/aws-cost-optimization/right-sizing), moving to ARM architecture, analyzing and compressing data, etc.


## AWS Quests

We were split in different groups and had to complete different quests for a fictitious company which goal was to work in a more sustainable way. 

The **first quest** was to reduce the number of instances of a [service](https://aws.amazon.com/sqs/) that were consuming messages. The instances were not even queuing messages since they had more compute power than needed. For SQS to be efficient, we should have some message queuing. Also, we observed through [CloudWatch](https://aws.amazon.com/cloudwatch/) that the CPU usage of an instance was around 15%. Given the different collected metrics, we tried to right size the instances. We had also some [auto scaling](https://aws.amazon.com/autoscaling/) mechanism if the instances could not process properly the message traffic.

The **second quest** was about the configuration of an [EKS](https://aws.amazon.com/eks/) cluster and the deployment of a service ([x86 architecture](https://en.wikipedia.org/wiki/X86)). We used [kubectl commands](https://docs.cparisot.people.aws.dev/static/kubernetes/cheatsheet.html#kubernetes-commandes) to apply some configurations (port exposition, a load balancer service, etc.):

```cmd
kubectl apply -f deploy.yml
```
where the `deploy.yml` was something like:

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gameday-deployment
  labels:
    app: nginx
    architecture: x_86
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
        service: gameday
    spec:
      containers:
        - name: app
          image: <repository>/gameday-images:x86_latest
          ports:
            - containerPort: 3000

## we first tried with the service below
apiVersion: v1
kind: Service
metadata:
  name: gameday-service
spec:
  selector:
    service: gameday
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000

# then we decided to use a loadbalancer service 
# (hint from quest)
apiVersion: v1
kind: Service
metadata:
  name: gameday-loadbalancer-service
spec:
  selector:
    service: gameday
  ports:
    - port: 80
      targetPort: 3000
  type: LoadBalancer
```

 We had some port exposure issues on the load balancer service which resulted in [unhealthy checks](https://kubebyexample.com/concept/health-checks).
 We had to force the port exposure using the following command:

 ```cmd
 kubectl expose deployment/gameday-deployment \ 
 --port=80 --target-port=3000 --type LoadBalancer
 ```

 After getting our service up and running, we moved to [Graviton processors](https://aws.amazon.com/ec2/graviton/) ([ARM architecture](https://en.wikipedia.org/wiki/ARM_architecture_family)) in order to reduce carbon footprint and optimize cost.

 The **two last quests** were about analyzing data and optimize its storage. The data was originally stored in [S3 buckets](https://aws.amazon.com/s3/) and we had to move them to database to be able to easily run queries using [Athena](https://aws.amazon.com/athena/). We didn't succeed to have points on these two quests but we got a glimpse of the functionalities of AWS [Glue](https://docs.aws.amazon.com/glue/) and Athena. Indeed, we used a [Glue crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html) to replicate the S3 buckets data to a database which offer more flexibility for data manipulation using Athena.

 To conclude, I liked the format of the game day where I learnt a lot about the different possibilities to optimize our resources using the different existing services and techniques. We had a great colleague who acted as a mentor and guided us through the different decisions we took. It was fun and thanks to him, we managed to finish second on the overall leaderboard.
 
 Unfortunately, I could not attend two other gameday sessions in the afternoon dedicated to two internal tools but from what I heard, it was also a great experience.
