import React from 'react'
import { Link } from 'react-router-dom';
const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, publishedAt, source} = props;
    return (
      <>
        <div className="card" style={{ width: "fit-content" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span  className="translate-end badge rounded-pill bg-danger">
              {source.name}
              <span className="visually-hidden">news-source</span>
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                <b>{author}</b> {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <Link
              rel="noreferrer"
              to={newsUrl}
              target="_blank"
              className="btn btn-sm btn-outline-primary"
            >
              Read More...
            </Link>
          </div>
        </div>
      </>
    );
  }

  export default NewsItem
