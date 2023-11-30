import React from "react";

/**
 * Multiple cases of components varying in parameters depending on the media type
 * @param {string} media type of media "tv", "movie"
 * @param {string}  pageType the type of the page the "home", "search" maybe more later
 * @returns
 */
const MediaCard = ({ media, pageType }) => {
  const renderCard = () => {
    //media cards for the home page
    if (pageType === "home") {
      return (
        <div className="home-media-card">
          <h2>{media.title}</h2>
          <p>{media.overview}</p>
        </div>
      );
      //media cards for the search page
    } else if (pageType === "search") {
      return (
        <div className="search-media-card">
          <h2>{media.title}</h2>
          <p>{media.overview}</p>
        </div>
      );
    }

    //maybe another return here for default cards
  };

  return <div>{renderCard()}</div>;
};

export default MediaCard;
