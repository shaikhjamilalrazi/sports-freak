import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../Header/Header";
import "./Detail.css";
import imgM from "../../images/male.png";
import imgF from "../../images/female.png";
import imgBoth from "../../images/both.jpg";

import DetailLeftSection from "../Detail-Left-Section/DetailLeftSection";
import DetailRightSection from "../Detail-Right-Section/DetailRightSection";
import DescriptionSection from "../Description-Section/DescriptionSection";
import SocialMediaSection from "../Footer-Social-Media-Section/SocialMediaSection";

const Detail = () => {
  const { id } = useParams();

  const [info, setInfo] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInfo(data.leagues[0]));
  }, [id]);

  const bgStyle = {
    background: "rgba(255, 255, 255, 0.6)",
  };
  const bgStyleMale = {
    backgroundColor: "#3a42ff",
  };
  const bgStyleFemale = {
    backgroundColor: "#fd4b58",
  };
  const bgMixed = {
    backgroundImage: "linear-gradient(to right, blue, red)",
  };

  const maleOrFemale = info.strGender === "Male";

  const grpImage = maleOrFemale ? imgM : imgF;

  const bgCondition = maleOrFemale ? bgStyleMale : bgStyleFemale;

  return (
    <>
      <Header
        isHome={false}
        imgLogo={info.strLogo}
        bgStyle={bgStyle}
        imgBanner={info.strBanner}
      />
      <section className="container detail-content">
        <div
          style={info.strGender === "Mixed" ? bgMixed : bgCondition}
          className="row detail width d-flex justify-content-between "
        >
          <DetailLeftSection
            league={info.strLeague}
            formedYear={info.intFormedYear}
            country={info.strCountry}
            sport={info.strSport}
            gender={info.strGender}
            maleOrFemale={maleOrFemale}
          />
          <DetailRightSection
            grpImage={info.strGender === "Mixed" ? imgBoth : grpImage}
          />
        </div>
        <DescriptionSection
          descriptionEN={info.strDescriptionEN}
          descriptionFR={info.strDescriptionFR}
        />
        <SocialMediaSection
          twitter={info.strTwitter}
          facebook={info.strFacebook}
          youtube={info.strYoutube}
        />
      </section>
    </>
  );
};

export default Detail;
