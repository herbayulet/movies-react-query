import axios from "axios";
import { Alert } from "react-native";

export const instantePost = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzY4MTM3YzRiMWMxYWZlMzI2NWE0OWI2NjIwMTgwNSIsInN1YiI6IjYzMGYyMDQ1MTUxMWFhMDA3YmEyODFhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HDliB2X5amc_et6GTRJtYYkFr_duYx1WCS74ZKbl98c",
  },
});

export const addWatchlist = async (numberFilm: number) => {
  try {
    const res = await instantePost.post("account/14495752/watchlist", {
      media_type: "movie",
      media_id: numberFilm,
      watchlist: true,
    });
    if (res.status !== 201) {
      Alert.alert("salah looo");
    } else {
      return res.statusText;
    }
  } catch (error: any) {
    Alert.alert("yahhh kandas", error);
  }
};

export const listWatchList = async () => {
  try {
    const response = await instantePost.get(
      "account/14495752/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc'"
    );
    if (response.status === 200) {
      return response.data.results;
    }
  } catch (error) {
    console.log(error);
  }
};
