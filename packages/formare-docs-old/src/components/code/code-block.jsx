import React from 'react';
import classNames from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import './code.scss';

const CodeBlock = props => {
  const { codeString, language, className } = props;

  return (
    <Highlight {...defaultProps} code={codeString} language={language}>
      {props => {
        // prettier-ignore
        const { 
          className: _className, 
          style,
          tokens, 
          getLineProps,
          getTokenProps
        } = props;

        const classes = classNames(className, `CodeBlock`, _className);

        return (
          <pre className={classes} data-language={language} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};

export default CodeBlock;
