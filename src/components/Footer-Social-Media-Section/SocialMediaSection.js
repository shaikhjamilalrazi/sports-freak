import React from "react";
import "./SocialMediaSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaSection = () => {
  return (
    // social
    <div className="d-flex justify-content-center">
      <div className="social twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </div>
      <div className="social facebook">
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </div>
      <div className="social youtube">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </div>
    </div>
  );
};

export default SocialMediaSection;
