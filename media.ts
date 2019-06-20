import * as React from 'react';

export const Media = (props: { query: string; children: (matches: boolean) => React.ReactElement }) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const detectIfMediaMatches = () => {
      const mql = window.matchMedia(props.query);
      mql.matches ? setMatches(true) : setMatches(false);
    };

    detectIfMediaMatches();
    window.addEventListener('resize', detectIfMediaMatches);

    return () => {
      window.removeEventListener('resize', detectIfMediaMatches);
    };
  }, []);

  return props.children(matches);
};
