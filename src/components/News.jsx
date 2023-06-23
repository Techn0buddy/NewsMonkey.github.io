import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  

  

  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
    

  
    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=f49e7309b8b746aab778c047f75215ee&page=${page+1}&pagesize=${props.pageSize}`;
        try {
          setLoading(true);
            const res = await fetch(url);
            props.setProgress(30);
            const data = await res.json();
          props.setProgress(70);
          setArticles(data.articles);
          setLoading(false);
          setTotalResults(data.totalResults);
    } catch (e) {
      console.log("something is not working");
        }
        props.setProgress(100);
  }

  useEffect(() => {
    <Spinner/>
    document.title = "NewMonkey - " + capitalise(props.category);
    updateNews();
    setPage(page + 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  const fetchMoreData = async () => {
    await setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=f49e7309b8b746aab778c047f75215ee&page=${page+1}&pagesize=${props.pageSize+1}`;
    try {
      
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setArticles(articles.concat(data.articles));
      setTotalResults(data.totalResults);
      setLoading(false);
    } catch (e) {
      console.log("something is not working");
    }
  };

    return (
      <>
        <h1
          className="mt-5 py-3 dark-outline text-center"
    
        >
          NewsMonkey - Top {capitalise(props.category)} Headlines
        </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ loading &&
              <Spinner />
          }
        >
          <div className="container my-3 mx-auto">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem
                      className="text-truncate"
                      title={element.title}
                      description={element.description}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://cdn.vox-cdn.com/thumbor/queMnrIcfFscUqy2kGBdZfKEybM=/0x0:2048x1365/1200x628/filters:focal(1024x683:1025x684)/cdn.vox-cdn.com/uploads/chorus_asset/file/24585480/236609_Rivian_R1S_review_DGolson_001.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source = {element.source}      
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News;