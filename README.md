# Simple media query matching component

### Uses [React Hooks](https://reactjs.org/docs/hooks-reference.html)


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