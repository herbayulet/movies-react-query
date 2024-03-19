import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { GenreDetails, ResponseDetail } from "./common";
import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

interface DetailMoviesProps {
  detail: ResponseDetail;
  tekan: boolean;
  setTekan: (tekan: boolean) => void;
  mutate: (numberFilm: number) => Promise<any>;
}

const DetailMovies = ({
  detail,
  tekan,
  setTekan,
  mutate,
}: DetailMoviesProps) => {
  console.log(detail, "ini");

  return (
    <View
      style={{
        flex: 1,
        height: "auto",
        marginTop: -80,
        marginHorizontal: 10,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://image.tmdb.org/t/p/w500/" + detail?.poster_path,
          }}
          style={{
            width: "100%",
            height: "75%",
            // aspectRatio: 10 / 10,
            borderRadius: 15,
          }}
          // resizeMode="cover"
        />
      </View>
      <View
        style={{
          marginTop: -70,
        }}
      >
        <View className="flex-row justify-between">
          <Text className="font-black text-xl" style={{ color: "#000" }}>
            Rate: {detail.vote_average}
          </Text>
          <Pressable onPress={() => mutate(detail.id)}>
            {tekan ? (
              <AntDesign name="like1" size={24} color="black" />
            ) : (
              <AntDesign name="like2" size={24} color="black" />
            )}
          </Pressable>
        </View>
        <Text className="font-semibold text-base" style={{ color: "#000" }}>
          Rate: {detail.overview}
        </Text>
      </View>
    </View>
  );
};

export default DetailMovies;
