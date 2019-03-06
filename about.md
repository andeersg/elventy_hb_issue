---
title: Yo
---
# Markdown is great

{{#if yes}}
  It's a yes from me.
{{/if}}

## Raw around pre:

{{{{raw}}}}
```
  {{#if no}}
    <p>It's a no from me.</p>
  {{/if}}
```
{{{{/raw}}}}

## Raw inside pre:

```
{{{{raw}}}}
  {{#if no}}
    <p>It's a no from me.</p>
  {{/if}}
{{{{/raw}}}}
```