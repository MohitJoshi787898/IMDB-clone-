import React,{useState} from "react";
import ContantWrapper from "../../../components/contentWrapper/ContentWrapper";
import "../style.scss";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFeatch from "../../../hook/useFeatch";
import Carousel from "../../../components/carousel/Carousel"

function Popular() {
  const  onTabChange=(tab)=>{
    setEndPoint(tab==="Movies"?'movie':"tv");
  }
  const [endpoint,setEndPoint]=useState("movie")
  const {data,loading}=useFeatch(`/${endpoint}/popular`)
  console.log(data)
  return (
    <div className="carouselSection">
      <ContantWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={['Movies','Tv Shows']} onTabChange={onTabChange} />
      </ContantWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
}

export default Popular;
