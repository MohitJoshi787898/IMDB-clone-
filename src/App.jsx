import { useFetchFromApi } from "./utils/useFetchFromApi";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfigurations,getGenres } from "./store/homeSlice";
import Home from "./pages/home/Home";
import HeroBanner from "./pages/home/heroBanner/HeroBanner";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageDetail from "./pages/pageDetail/PageDetail";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/pagenotFound/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    genresCall();
    featchApiConfig();
  }, []);

  const dispatch = useDispatch();
  useEffect(() => featchApiConfig(), []);

  const featchApiConfig = () => {
    useFetchFromApi("/configuration").then((res) => {
      // console.log(res);
      const url = {
        backdrop: res?.images?.secure_base_url + "original",
        poster: res?.images?.secure_base_url + "original",
        profile: res?.images?.secure_base_url + "original",
      };
      dispatch(getApiConfigurations(url));
    });
  };
  const genresCall = async () => {
    let promisses = [];
    let endpoints = ["tv", "movie"];
    let allGenres = {};
    endpoints.forEach((endpoint) => {
      promisses.push(useFetchFromApi(`/genre/${endpoint}/list`)) });
      const data =await Promise.all(promisses);
      data.map(({ genres}) => {
        return genres.map((item) => (allGenres[item.id] = item));
      });
     dispatch(getGenres(allGenres))
   
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<PageDetail />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
