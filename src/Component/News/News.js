import React from "react";
import "./News.css";
import Container from "@mui/material/Container";
import NewsCard from "./NewsCard";

const News = ({ newsData, newsResults }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="download">
          <span>
            For the best experience use inshorts app on your smartphone
          </span>

          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            height="80%"
            alt="store"
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            height="80%"
            alt="store"
          />
        </div>
        {newsData.map((element) => (
          <NewsCard newsItem={element} key={element.title} />
        ))}
      </div>
    </Container>
  );
};

export default News;
