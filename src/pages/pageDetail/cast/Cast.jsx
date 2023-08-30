import React from "react";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import img from "../../../components/lazyLoadImage/img";
import avatar from "../../../assets/avatar.png";
import "./style.scss";
import Img from "../../../components/lazyLoadImage/img";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  console.log(data,"castdata")
  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton">
          <div className="row skeleton"></div>
          <div className="row2 "></div>
        </div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              let impUrl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;
              return (
                <div key={item.loading} className="listItem">
                  <div className="profileImg">
                    <Img src={impUrl} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">
                {item?.character}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
