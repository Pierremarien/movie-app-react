import React from "react";
import { roundedVotes } from "../../utils/roundedVotes";

/**
 * 
 * @param {string} buttonType types of buttons "rating", "title"
 * @param {string} media
 * @returns 
 */
export const Buttons = ({ buttonType, media }) => {
  const renderBtn = () => {
    if (buttonType === "rating") {
      return (
        <div className="home-media-button-trending-rating">
          <h4>IMDb</h4>
          <div>
            <figure>
              <img src="../../assets/favorite-gold.svg" alt="star" />
            </figure>
            <p>{roundedVotes}</p>
          </div>
        </div>
      );
    }
    if (buttonType === "title") {
      return (
        <div className="">

        </div>
      );
    }
  };

  return <>{renderBtn()}</>;
};
