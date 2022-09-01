import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
// import SideBar from "./SideBar";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams;

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography varient="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result
        <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
