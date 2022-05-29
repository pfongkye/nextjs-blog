---
title: 'JS Security Testing in GitHub Actions'
date: '2022-05-29'
---

# StackHawk

I attended a [workshop](https://portal.gitnation.org/contents/js-security-testing-in-github-actions-631) on security testing during [Node Congress 2022](https://portal.gitnation.org/events/node-congress-2022).

Here are some key takeaways:
- Software Composition Analysis (SCA): [Dependabot](https://github.com/dependabot), [Snyk](https://snyk.io/)
- Static Application Security Testing: [CodeQL](https://github.com/github/codeql), Snyk
- Dynamic Application Security Testing: [StackHawk](https://www.stackhawk.com/), [OWASP ZAP](https://www.zaproxy.org/)

## Dynamic Application Security Testing

StackHawk is a DAST tool built upon OWASP ZAP. For example, it can scan a running application and then displays on a dashboard the different scans that classify the potential security risks by severity. 

I integrated StackHawk with my [Next.js blog](https://github.com/pfongkye/nextjs-blog) using [GitHub actions](https://docs.stackhawk.com/continuous-integration/github-actions.html).
There are two config files that are added before StackHawk can start scanning: the [GitHub workflow](https://github.com/pfongkye/nextjs-blog/blob/main/.github/workflows/hawkscan.yml) file and the [configuration file](https://github.com/pfongkye/nextjs-blog/blob/main/stackhawk.yml) that contains the endpoint to scan. 

What I find particularly interesting with this tool is that for each potential security risk, there is a clear explanation of the problem. And from this explanation, you decide how to act on the issue.