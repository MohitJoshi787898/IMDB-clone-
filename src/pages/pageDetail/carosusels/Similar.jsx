import React from 'react';
import Carousel from "../../../components/carousel/Carousel";
import useFeatch from "../../../hook/useFeatch"

const Similar = ({mediaType,id}) => {
    const {data,error,loading} =useFeatch(`/${mediaType}/${id}/similar`);
    const title=mediaType==="tv"?'Similar TV Show':"Similar Movies"
  return (
  <Carousel title={title}
  data={data?.results}
  loading={loading}
  endpoint={mediaType}/>
  )
}

export default Similar
