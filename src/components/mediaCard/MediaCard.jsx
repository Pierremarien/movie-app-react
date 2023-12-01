import React from "react";
import { releaseYear } from "../../utils/releaseYear";

/**
 * Multiple cases of components varying in parameters depending on the media type
 * @param {string} media type of media "tv", "movie"
 * @param {string}  pageType the type of the page the "home", "search", "movie"
 * @param {string} cardType the type of card you want "trending", "spotlight"
 * @returns
 */
const MediaCard = ({ media, pageType, cardType }) => {
  const renderCard = () => {
    //media cards for the home page
    if (pageType === "home") {
      if (cardType === "trending") {
        return (
          <div className="home-media-card-trending">
            <img src={media.poster_path} alt={media.title} />

            <div className="home-media-button-trending-title">
              {/* here comes the title button component*/}
            </div>
          </div>
        );
      }
      if (cardType === "spotlight") {
        <div className="home-media-card-spotlight">
          <img src={media.backdrop_path} alt={media.title} />
          <div className="home-media-button-spotlight">
            {/* here comes the spotlight button component */}
          </div>
        </div>;
      }
      //media cards for the search page
    } else if (pageType === "search") {
      return (
        <div className="search-media-card">
          <div className="search-media-card-image">
            <img src={media.backdrop_path} alt={media.title} />
          </div>
          <div>
            <h2>
              {media.title}({releaseYear})
            </h2>
          </div>
        </div>
      );
      // media cards for the movie page
    } else if (pageType === "movie") {
      return (
        <div className="movie-media-card">
          <div className="movie-media-card-image">
            <img src={media.backdrop_path} alt={media.title} />
          </div>
          <div>
            <h2>
              {media.title}({releaseYear})
            </h2>
          </div>
        </div>
      );
    }

    //maybe another return here for default cards
  };

  return <>{renderCard()}</>;
};

export default MediaCard;
