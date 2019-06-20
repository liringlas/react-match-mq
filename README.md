# Simple media query matching component

### Uses [React Hooks](https://reactjs.org/docs/hooks-reference.html)

### IE10+ because of [window.matchMedia(...)](https://developer.mozilla.org/en/docs/Web/API/Window/matchMedia)

Simple `true`/`false` rendering.

```js
<Media query={"(min-width: 1024px)"}>
    {matches =>
        matches ? (
            "It matches!"
        ) : (
            "Doesnt match"
        )
    }
</Media>
```