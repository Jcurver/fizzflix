import { useQuery } from "react-query";
import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import NowPlayingLine from "./NowPlayingLine";
import PopularLine from "./PopularLine";
import TopRatedLine from "./TopRatedLine";

const Wrapper = styled.div`
  background: black;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying","popular","top_rated"],getMovies
  );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <NowPlayingLine />
          <PopularLine />
          {/* <TopRatedLine /> */}



        </>
      )}
    </Wrapper>
  );
}
export default Home;
