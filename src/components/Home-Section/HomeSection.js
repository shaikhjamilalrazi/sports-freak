import React, { useEffect, useState } from "react";
import Cards from "../Card-Section/Cards";
import Header from "../Header/Header";
import "./HomeSection.css";

const HomeSection = () => {
  const [leagues, setLeagues] = useState({});

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagues(data.countrys.slice(0, 25)));
  }, []);

  const bgStyle = {
    background: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <section className="col-lg-12 mx-auto">
      <Header isHome={true} bgStyle={bgStyle} />
      <div className="league-content">
        {leagues.length &&
          leagues.map((league) => (
            <Cards key={league.idLeague} leagues={league} />
          ))}
      </div>
    </section>
  );
};

export default HomeSection;
