---
title: 'Accessibility'
date: '2021-03-11'
---

# Accessibility

Web [accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) helps people with difficulties (for example, visually impaired) navigate your website. They may rely on screen reader (voiceover) and keyboard to understand your website's contents.

## Button

Some key takeaways to make your buttons accessible:
- use native button as much as possible
- if the content of the button is not a text (an icon for example), use a hidden text to give meaning to the button
- if it's not a native button (a `div` for example)
    - use the role `button` and the attribute `tabIndex="0"` for navigation using keyboard
    - add a `keydown` event handler so that it behaves as a native button when keyboard is used to click on it

## Form

For a form to be accessible, the labels should be coupled to the inputs.

```html
<label>Name: <input type="text"></label>
<div><label for="age">Age</label></div><input id="age" type="number">
```

For grouping radio buttons, use a fieldset.

```html
<fieldset>
<legend>Favorite pet</legend>
<label><input type="radio">Cat</label>
<label><input type="radio">Dog</label>
<label><input type="radio">Hamster</label>
</fieldset>
```

# Semantic web pages

Use a single h1 for each page. It's an important information (see wikipedia page for an example).
Use roles for landmarks and aria-labelledby to distinguish between the roles (for example, multiple navigation roles but different labels)

# Focus management

Keep in mind how the focus should be handled when the focused element is removed from the document, so as the user is not confused if the focus is lost.
For example, when a list item is removed by clicking on a focused button inside it, the next or first item in the list should have the focus.

Use `skip-links` to focus on different sections in the page for an easier navigation using keyboard and screen reader. If the focus outline is to be removed, use the attribute selector `[tabindex="-1"]` to apply an `outline : 0;` in CSS. 

```html
<ul>
 <a href="#main">Main</a>
</ul>
<main id="main" tabindex="-1">
 This is the main section.
</main>
```

# Resources

There is a great learning [video series](https://egghead.io/courses/start-building-accessible-web-applications-today) from [Marcy Sutton](https://marcysutton.com/) on [egghead](https://egghead.io/). 
