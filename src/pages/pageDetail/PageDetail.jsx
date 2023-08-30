import React, { useEffect } from "react";
import "./style.scss";
import useFeatch from "../../hook/useFeatch";
import { useParams } from "react-router-dom";
import DetailBanner from "./detailesBanner/DetailBanner";
DetailBanner;
import Cast from "./cast/Cast";
import VideoSection from "./videoSection/VideoSection";
import Similar from "./carosusels/Similar";
import Recommendation from "./carosusels/Recommendation";

const PageDetail = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFeatch(`/${mediaType}/${id}/videos`);
  const { data:credits, loading:creditsLoading } = useFeatch(`/${mediaType}/${id}/credits`);
  

//  console.log(credits,"credits loading");

  return (
    <div>
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} />
      <VideoSection data={data}/>
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />

    
    </div>
  );
};

export default PageDetail;
