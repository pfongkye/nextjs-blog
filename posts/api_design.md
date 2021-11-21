---
title: 'API Design'
date: '2021-11-21'
---

# API Design

There is an interesting [article](https://slack.engineering/how-we-design-our-apis-at-slack/) from Slack about how they design [APIs](https://en.wikipedia.org/wiki/API) (Application Programming Interfaces). Below is a brief summary of what I understood.

API design should be a well-thought upfront process, taking into considerations the different cases, edge cases, getting feedback from beta testers before launch, etc.

It takes time to design an API that is simple, clear in its intention (intuitive), and which serves one purpose ([Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)). An API will surely evolve over time, and we should strive to make it backward compatible. 

But sometimes decisions taken initially make it hard to have a sustainable API and to keep it to the expected standards.
In those cases, if the cost of keeping an API backward compatible outweighs the cost of redesigning a new and simple one, we should introduce a new version of the API that could undoubtedly introduce breaking changes for users. 

If there are breaking changes, it should be largely communicated, and the transition to the new API should be well documented. Time should be given for the users to move to this new API by deprecating the old one and giving due dates for its removal.

# List of public APIs

Speaking of APIs, there is a list of free APIs for use in software and web development that can be found on [GitHub](https://github.com/public-apis/public-apis).


