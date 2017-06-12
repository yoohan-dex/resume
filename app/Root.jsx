import React, { PropTypes } from 'react';
import Index from './components/Index';
import indexCss from './sass/index.scss';
import ga from './wheels/ga';

const Root = props => {
  const gaScript = props.ga_id
    ? <script dangerouslySetInnerHTML={{ __html: ga(props.ga_id) }} />
    : null;
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{props.title}</title>
        <style dangerouslySetInnerHTML={{ __html: indexCss }} />
      </head>
      <body>
        <Index {...props} />
        {gaScript}
      </body>
    </html>
  );
};
Root.propTypes = {
  title: PropTypes.string,
  ga_id: PropTypes.string,
};

export default Root;
