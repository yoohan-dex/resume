import React, { PropTypes } from 'react';
import Index from './components/Index';
import indexCss from './sass/index.scss';
import ga from './wheels/ga';

const Root = (props) => {
  const gaId = ga(props.ga_id);
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
        <script dangerouslySetInnerHTML={{ __html: gaId }} />
        <script>{'console.log(\'jiji\')'}</script>
      </body>
    </html>
  );
};
Root.propTypes = {
  title: PropTypes.string,
  ga_id: PropTypes.string,
};

export default Root;
