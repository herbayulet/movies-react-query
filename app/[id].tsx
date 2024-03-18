import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { useDetailMovie } from "@/func/useDetailsMovie";
import { GenreDetails } from "@/components/common";
import DetailMovies from "@/components/DetailMovies";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { detailsFilm, error, isLoading } = useDetailMovie(id);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Tidak ada data</Text>;
  }

  return <DetailMovies detail={detailsFilm} />;
};

const styles = StyleSheet.create({
  textDetails: {
    color: "white",
  },
});

export default MovieDetails;
