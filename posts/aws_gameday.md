---
title: 'AWS Game day'
date: '2021-05-28'
---

# AWS Game day @ ManoMano

We had a game day event organised by ManoMano in collaboration with [AWS](https://aws.amazon.com/fr/).

The idea was to process incoming requests as much as possible given a server binary, by using the different possibilities offered by AWS. The first version of the server would sometimes return an error status.

There were several teams of 3 competing and the results were live on a scoreboard.

A [runbook](https://dashboard.eventengine.run/docs?url=https:%2F%2Fs3.amazonaws.com%2Fee-assets-prod-us-east-1%2Fmodules%2Fgd2015-loadgen%2Fv2%2Freadme.md) was given with some indications to follow. The indications were intentionally ambiguous so that any team could explore different routes.

My team did the following:
- we used [EC2](https://aws.amazon.com/fr/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc) to start two instances first and manually autoscale the instances. However there is a cost using EC2 and each instance would cost $8 for each 15 minutes it's up. This resulted in some penalty points.
- we decided to create a docker image of the server binary that would be deployed using [ECS and fargate](https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html). It was not straightforward to get the cluster up and running, but when it was done we were moving up the scoreboard since the cost was null with ECS.
- we then decided to try out finding a version of the server that would not return error status from time to time. 
    - we reverse engineered the go binary using [redress](https://github.com/goretk/redress) to see if any useful information could be found.
    - we found out a path and tried to find if anything similar existed on Github.
    - we found out 3 versions of the binary.
    - we chose to try the v3 on the cluster but got some errors. We reverted to v1 and deep dived to see what was the problem. We found out it was a misconfiguration.
    - we retried with V3 and it worked but there were still error responses. 
- since the time to process an incoming request was minimum 4 seconds, we decided to cache the responses using [cloudfront](https://aws.amazon.com/fr/cloudfront/).
    - we tried a default configuration but found out that it was returning too many errors.
    - we were indeed caching every request regardless of the query parameters.
    - we took into consideration the query parameters and it worked great afterwards.
    - we supposed the returning errors were not cached even if we were not sure when looking into the logs.
- we wanted to go further by implementing retries but didn't succeed.
- we then saw in the announcement channel that the v2 of the binary server had the error status fixed.
- we decided to upload this image to the cluster to get the maximum points.

We finally made it to 3rd position even if we were striving to secure the second place. But it was a great experience.

## Further reading

- A possible [solution](https://github.com/rumd3x/aws-gameday-unicorn)

