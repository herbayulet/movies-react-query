// const API_KEY = "5c68137c4b1c1afe3265a49b66201805";

import axios from "axios";
import { Alert } from "react-native";

export const instanceTopRated = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  timeout: 1000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzY4MTM3YzRiMWMxYWZlMzI2NWE0OWI2NjIwMTgwNSIsInN1YiI6IjYzMGYyMDQ1MTUxMWFhMDA3YmEyODFhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HDliB2X5amc_et6GTRJtYYkFr_duYx1WCS74ZKbl98c",
  },
});

export const topRated = async () => {
  try {
    const response = await instanceTopRated.get(
      "movie/top_rated?language=en-US&page=1"
    );

    return response.data.results;
  } catch (error: any) {
    Alert.alert(error, "hummm kenape tuhh");
  }
};

export const detailsMovie = async (id: string) => {
  try {
    const response = await instanceTopRated.get(`movie/${id}?language=en-US'`);

    return response.data;
  } catch (error: any) {
    Alert.alert(error, "hummm kenape tuhh");
  }
};
