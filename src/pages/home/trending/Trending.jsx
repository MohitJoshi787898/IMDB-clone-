import React, { useState } from "react";
import ContantWrapper from "../../../components/contentWrapper/ContentWrapper";
import "../style.scss";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFeatch from "../../../hook/useFeatch";
import Carousel from "../../../components/carousel/Carousel";
  
function Trending() {
  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
  const [endpoint, setEndPoint] = useState("day");
  const { data, loading } = useFeatch(`/trending/all/${endpoint}`);
  console.log(data);
  return (
    <div className="carouselSection">
      <ContantWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week", "month"]} onTabChange={onTabChange} />
      </ContantWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
}

export default Trending;
