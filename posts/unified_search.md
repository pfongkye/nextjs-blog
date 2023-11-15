---
title: 'Unified Search'
date: '2023-10-29'
---

# Unified Search

I have been thinking lately how to search through the different documents at work. The paint points I identified that pushed me to find a solution are:
- Searching through different data sources takes long.
- I don't know where to start searching sometimes since documents are scattered in different sources.

After searching on the Web, I stumbled upon an article describing Kendra which is a unified experience search boosted by ML. It would improve developers' productivity by reducing time search through different data sources and give them more autonomy.

## Amazon Kendra

[Amazon Kendra](https://aws.amazon.com/pm/kendra/) is a managed AWS service which enables intelligent search through different unstructured data sources.
An index is created which will connect to different data sources such as Google Drive, blogs, Confluence through different connectors.
You can [assign users](https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-applications.html) to view the Kendra experience.

## Google Drive

- Following [AWS tutorial](https://docs.aws.amazon.com/kendra/latest/dg/data-source-v2-google-drive.html), I tried to connect my Google Drive account at work using the Google Drive connector V2 but I was not able to due to some restrictions. 
- I decided to create my own Google workspace with a specific domain which would allow me to give admin roles to a personal account. I created my workspace using Google [Cloud Identity](https://cloud.google.com/identity).
- I created a [service account](https://cloud.google.com/iam/docs/keys-create-delete) in Google Cloud and created a private JSON key to be used in the Google Drive connector.
- I activated [Admin SDK API](https://console.cloud.google.com/marketplace/product/google/admin.googleapis.com) and [Google Drive API](https://console.cloud.google.com/marketplace/product/google/drive.googleapis.com) on my Google Cloud account.
- I had to [delegate autority](https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority) to the service account from my Google workspace [Admin console](https://admin.google.com/ac/home) and enable the different required OAuth scopes (`https://www.googleapis.com/auth/drive.readonly`, etc.)
- I followed the instructions on Amazon Kendra to connect to the data source.

I faced some difficulties to have the correct permissions to connect the index to Google Drive. The things I learned are:
- Follow well the given instructions, step by step in the [tutorial](https://docs.aws.amazon.com/kendra/latest/dg/data-source-v2-google-drive.html)
- Create a new IAM role each time a new secret is created to propagate the correct permissions from the secret manager.
- Read carefully the error logs that surface from data synchronizations. Check Cloudwatch logs. Example of log due to IAM role restricted access:
```cmd	
Unable to fetch customers secret. Error from secrets manager service: User: arn:aws:sts::<number>:assumed-role/<name>/AWSKendraDataConnectorServiceLambda is not authorized to perform: secretsmanager:GetSecretValue on resource: arn:aws:secretsmanager:eu-west-1:<number>:secret:<name> because no identity-based policy allows the secretsmanager:GetSecretValue action
```
- I thought that I had to create a new experience in Amazon Kendra to be able to search from a new created data source. In fact the Google drive data source had ACL (access control list) and [identity crawler](https://docs.aws.amazon.com/kendra/latest/dg/create-index-access-control.html) activated that filtered user which could access the contents. I had to reindex the data source to apply the modifications. I also changed the IAM role of the data source but I'm not sure it is related to the access content.
- For filtering on documents, I need to use document enrichment and make the field facetable. A reindex is needed.

## Confluence

- Subscribe to free [Confluence](https://www.atlassian.com/fr/software/confluence) account for testing purposes
- Add [Google Business Starter](https://support.google.com/a/answer/13062337) to have professional Gmail (this step is in fact not necessary)
- Follow connector [guideline](https://docs.aws.amazon.com/kendra/latest/dg/data-source-v2-confluence.html)
- Create Confluence [API token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/#Create-an-API-token). When entering the secret in the connector configuration, use email as username.
- Identity crawler is activated and will only show results for the given Atlassian user (not necessary the user having access to the Kendra experience search, which could lead search results not showing.)

## Alternatives

It was quite easy to set up a managed Kendra service even if I struggled with some permissions to be able to index and search results from Google Drive. Kendra has very good documentations and has a builder (no-code tool) to have a simple interface to test rapidly. 
It could be a good enterprise solution and would avoid the hassle of maintaining a home-made solution.
For my part, I would try [Apache Solr](https://solr.apache.org/) for my personal use case, maybe by deploying it on [Kubernetes](https://aws.amazon.com/blogs/opensource/deploying-and-scaling-apache-solr-on-kubernetes/).