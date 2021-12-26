---
title: 'Setting up Lighthouse CI'
date: '2021-12-26'
---

# Lighthouse CI

This [guideline](https://web.dev/lighthouse-ci/) helps in setting up [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci), which is a set of tools for performance monitoring.

The guideline walks us through the different steps needed to run Lighthouse CI locally, then in a CI/CD pipeline on GitHub using [GitHub actions](https://github.com/features/actions). 

![image](https://user-images.githubusercontent.com/1062699/147420344-7c6aa94c-e0a7-4951-9935-21b9f128599e.png)

The reports are stored publicly as stated in a [configuration file](https://github.com/pfongkye/nextjs-blog/blob/main/lighthouserc.js). They can also be stored internally if a [Lighthouse Server](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/server.md) is set up.

![image](https://user-images.githubusercontent.com/1062699/147420475-5af61cb0-83e0-41ab-a1a5-5a958217402d.png)

![image](https://user-images.githubusercontent.com/1062699/147421101-71d12013-d10b-45ba-afd2-ecf482a1b589.png)

An example of project using a Lighthouse configuration and GitHub actions can be found [here](https://github.com/pfongkye/nextjs-blog).
