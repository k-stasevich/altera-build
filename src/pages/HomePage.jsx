import React, { useCallback, useEffect, useRef, useState } from 'react';
import Layout from '../components/layout';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export const HomePage = (props) => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeout, setTimeoutState] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');

  const wrapperRef = useRef(null);

  const handleOpenArticle = useCallback(
    (article) => {
      setIsArticleVisible(!isArticleVisible);
      setArticle(article);

      setTimeout(() => {
        setTimeoutState(!timeout);
      }, 325);

      setTimeout(() => {
        setArticleTimeout(!articleTimeout);
      }, 350);
    },
    [isArticleVisible, articleTimeout, timeout],
  );

  const handleCloseArticle = useCallback(() => {
    setArticleTimeout(!articleTimeout);

    setTimeout(() => {
      setTimeoutState(!timeout);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible);
      setArticle('');
    }, 350);
  }, [articleTimeout, timeout, isArticleVisible]);

  const handleClickOutside = useCallback(
    (event) => {
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        if (isArticleVisible) {
          handleCloseArticle();
        }
      }
    },
    [wrapperRef, isArticleVisible, handleCloseArticle],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('');
    }, 100);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Layout>
      <div className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
          <Main
            openArticle={handleOpenArticle}
            isArticleVisible={isArticleVisible}
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
            wrapperRef={wrapperRef}
          />
          <Footer timeout={timeout} />
        </div>
        <div id="bg" />
      </div>
    </Layout>
  );
};
