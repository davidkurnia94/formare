import React from 'react';
import classNames from 'classnames';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';

const ListGroup = () => {
  return (
    <article id="list-group" className="DocsArticle">
      <div className="DocsArticle-heading">
        <h2 className="DocsArticle-title">List Group</h2>
        <h5 className="DocsArticle-subtitle">
          Nulla eiusmod veniam excepteur do anim Lorem et dolore incididunt amet
          consequat cillum.
        </h5>
      </div>
      <section className="DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Overview</h4>
        </div>
        <p>
          You can use a list group component to sort out a related content about
          a subject in a form of a list.
        </p>
        <Preview layout="horizontal">
          <PreviewDisplay>
            <ul className="ListGroup ListGroup--borderless">
              <li className="ListGroup-item">
                Adipisicing in fugiat amet anim proident.
              </li>
              <li className="ListGroup-item">
                Dolor duis aute laborum Lorem qui exercitation esse.
              </li>
              <li className="ListGroup-item">
                Eu excepteur do incididunt occaecat consequat mollit
                reprehenderit.
              </li>
              <li className="ListGroup-item">
                Aliquip est nisi non sit nostrud pariatur est.
              </li>
            </ul>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<ul className="ListGroup">
              <li className="ListGroup-item">
                Adipisicing in fugiat amet anim proident.
              </li>
              <li className="ListGroup-item">
                Dolor duis aute laborum Lorem qui exercitation esse.
              </li>
              <li className="ListGroup-item">
                Eu excepteur do incididunt occaecat consequat mollit reprehenderit.
              </li>
              <li className="ListGroup-item">
                Aliquip est nisi non sit nostrud pariatur est.
              </li>
            </ul>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
    </article>
  );
};

export default ListGroup;
