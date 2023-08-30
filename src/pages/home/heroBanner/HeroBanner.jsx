import "./style.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFeatch from "../../../hook/useFeatch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchQueryhandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  const { data, loading } = useFeatch("/movie/popular");
  // console.log(data, "data");
  useEffect(() => {
    const bg = data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(url.backdrop + bg);
  }, [data]);
  // console.log(background, "background");

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer">
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">
              Million of movies,TV show's and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                className=""
                placeholder="Search for movies or TV shows..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryhandler}
              />
              <button onClick={()=>navigate(`/search/${query}`)}>Search</button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default HeroBanner;
