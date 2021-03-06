import React from "react";
import "./SocialMediaSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaSection = (props) => {
  const { twitter, facebook, youtube } = props;
  return (
    <div className="d-flex justify-content-center">
      <div className="social twitter">
        <a href={`https://${twitter}`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <div className="social facebook">
        <a href={`https://${facebook}`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
      </div>
      <div className="social youtube">
        <a href={`https://${youtube}`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaSection;
