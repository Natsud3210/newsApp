import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, url, author, date, source } = this.props;
    return (
      <div className="my-3 mx-3">
        <div className="card">
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="badge bg-secondary">{source}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              {" "}
              <small className="text-success">
                by {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>{" "}
            </p>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
