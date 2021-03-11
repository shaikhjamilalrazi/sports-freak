import React from "react";
import "./DetailLeftSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMars,
  faVenus,
  faVenusMars,
  faFutbol,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

const DetailLeftSection = (props) => {
  const { league, formedYear, country, sport, gender, maleOrFemale } = props;

  const maleOrFemaleFont = maleOrFemale ? (
    <FontAwesomeIcon icon={faMars} />
  ) : (
    <FontAwesomeIcon icon={faVenus} />
  );

  return (
    <div className="col-lg-7 summery">
      <h1>{league}</h1>
      <p>
        <span className="pe-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        Founded: {formedYear}
      </p>
      <p>
        <span className="pe-3">
          <FontAwesomeIcon icon={faFlag} />
        </span>
        Country: {country}
      </p>
      <p>
        <span className="pe-3">
          <FontAwesomeIcon icon={faFutbol} />
        </span>
        Sports Type: {sport}
      </p>
      <p>
        <span className="pe-3">
          {gender === "Mixed" ? (
            <FontAwesomeIcon icon={faVenusMars} />
          ) : (
            maleOrFemaleFont
          )}
        </span>
        Gender: {gender}
      </p>
    </div>
  );
};

export default DetailLeftSection;
