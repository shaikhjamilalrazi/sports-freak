import React from "react";
import image from "../../images/Rectangle 21.png";
import "./Header.css";

const Header = (props) => {
  const { isHome, imgLogo, bgStyle, imgBanner } = props;

  return (
    <div className="content">
      <div className="img-div">
        <img
          style={{ width: "100%" }}
          className="img-fluid"
          src={imgBanner ? imgBanner : image}
          alt=""
        />
      </div>
      <div className="stCentered" style={bgStyle}>
        {isHome ? (
          <div>
            <h2>Sports Freaks</h2>
          </div>
        ) : (
          <div>
            <img
              style={{ width: "35%" }}
              className="img-fluid"
              src={imgLogo}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
