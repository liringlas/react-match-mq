"use strict";
exports.__esModule = true;
var React = require("react");
exports.Media = function (props) {
    var _a = React.useState(false), matches = _a[0], setMatches = _a[1];
    React.useEffect(function () {
        var detectIfMediaMatches = function () {
            var mql = window.matchMedia(props.query);
            mql.matches ? setMatches(true) : setMatches(false);
        };
        detectIfMediaMatches();
        window.addEventListener('resize', detectIfMediaMatches);
        return function () {
            window.removeEventListener('resize', detectIfMediaMatches);
        };
    }, []);
    return props.children(matches);
};
