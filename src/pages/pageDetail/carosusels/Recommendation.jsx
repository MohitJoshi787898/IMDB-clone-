
import React from 'react';
import Carousel from "../../../components/carousel/Carousel";
import useFeatch from "../../../hook/useFeatch"

const Recommendation = ({mediaType,id}) => {
    const {data,error,loading} =useFeatch(`/${mediaType}/${id}/recommendations`);
    console.log(data?.results,"Recommendations")
   
  return (
  <Carousel title={"Recommendations"}
  data={data?.results}
  loading={loading}
  endpoint={mediaType}/>
  )
}

export default Recommendation
