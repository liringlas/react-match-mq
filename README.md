# Simple media query matching component

### Uses [React Hooks](https://reactjs.org/docs/hooks-reference.html)

### IE10+ because of [window.matchMedia(...)](https://developer.mozilla.org/en/docs/Web/API/Window/matchMedia)

### Usage:
>npm i --save react-match-mq

OR

>yarn add react-match-mq


Simple `true`/`false` rendering.

```js
import { Media } from 'react-match-mq';
...
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