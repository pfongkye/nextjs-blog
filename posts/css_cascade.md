---
title: 'The C in CSS'
date: '2020-12-28'
---

# Cascade

[Cascade](https://wattenberger.com/blog/css-cascade) is important in CSS. It helps identifying which ruleset is applied to an element when there are multiple conflicting CSS declarations available.

The way cascade works is as follows:

## First Group

- Transition
- `!important`
- Animation
- The normal way

Then, we look at the following: 

## Second Group

Rules can be defined in 3 locations:

- Website
- User
- Browser

## Third Group 

- Style inlining
- CSS selectors using `id`, `class` and `type`. To know the specificity of a ruleset, the following number notation can be used `(id, class, type)` where `id` is most important. For example, the ruleset having the selector `#my-id.my-class` (1,1,0) will be applied instead of `#my-id` (1,0,0). And `#my-id` (1,0,0) will be applied instead of `.my-class div` (0,1,1)

When there are still conflicting rulesets, the following help in chosing the one to apply:

## Fourth Group

- The order in which the rulesets are declared