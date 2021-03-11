import React, { useEffect, useState } from "react";
import "./Cards.css";
import img from "../../Logo/image-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const Cards = (props) => {
  const { leagues } = props;
  const { idLeague, strLeagueAlternate, strSport } = leagues;

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImageList(data.leagues[0]));
  }, [idLeague]);

  const { strLogo } = imageList;

  const history = useHistory();
  const showDetail = (id) => {
    const url = `/detail/${id}`;
    history.push(url);
  };

  return (
    <div className="league-item  text-center">
      <div className="league-img mt-5">
        <img src={strLogo || img} alt="" />
      </div>
      <div className="league-name mt-4">
        <h4 className="mx-auto">
          {strLeagueAlternate ? strLeagueAlternate : "No Data Found"}
        </h4>
        <h5>Sports Type: {strSport ? strSport : "No Data Found"}</h5>
      </div>
      <div className="gap-2 mt-4">
        <button
          onClick={() => showDetail(idLeague)}
          className="btn btn-primary btn-lg"
          type="button"
        >
          Explore <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
