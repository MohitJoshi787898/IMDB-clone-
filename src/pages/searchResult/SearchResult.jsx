import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useFetchFromApi } from "../../utils/useFetchFromApi";
import ContantWrapper from "../../components/contentWrapper/ContentWrapper";
import "./style.scss";
import Spinner from "../../components/spinner/Spinner";
import MovieCart from "../../components/movieCart/MovieCart";
Spinner;
const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const fetchInitialData = () => {
    setLoading(true);
    useFetchFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((pre) => pre + 1);
        setLoading(false);
      }
    );
  };
  const fetchNextPageData = () => {
    useFetchFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res?.results],
          });
        } else {
          setData(res);
        }
        setPageNum((pre) => pre + 1);
      }
    );
  };
  useEffect(() => {
    fetchInitialData();
    setPageNum(1)
  }, [query]);
  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContantWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "Results" : "Result"
                } of ${query}`}
              </div>
              <InfiniteScroll
              className="content"
              dataLength={data?.results?.length || []}
              next={fetchNextPageData}
              hasMore={pageNum<=data?.total_pages}
              loader={<Spinner/>}
              >
                {data.results.map((item, index) => {
                  if (item?.media_type === "person") return;
                  return <MovieCart key={index} data={item} />
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry,Result not found!</span>
          )}
        </ContantWrapper>
      )}
    </div>
  );
};

export default SearchResult;
