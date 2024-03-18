import { View, Text, Image } from "react-native";
import React from "react";
import { GenreDetails, ResponseDetail } from "./common";

interface DetailMoviesProps {
  detail: ResponseDetail;
}

const DetailMovies = ({ detail }: DetailMoviesProps) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
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
            uri: "https://image.tmdb.org/t/p/w500/" + detail?.backdrop_path,
          }}
          style={{
            width: "60%",
            aspectRatio: 10 / 10,
            borderRadius: 15,
          }}
          // resizeMode="cover"
        />
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text className="font-black text-2xl" style={{ color: "white" }}>
          Judul: {detail?.original_title}
        </Text>
        <View>
          {detail.genres &&
            detail?.genres.map((data: GenreDetails) => {
              return (
                <View
                  key={data.id}
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    className="font-black text-xl"
                    style={{ color: "white" }}
                  >
                    {data.name}
                  </Text>
                </View>
              );
            })}
        </View>
        <Text className="font-black text-xl" style={{ color: "white" }}>
          Rate: {detail.vote_average}
        </Text>
      </View>
    </View>
  );
};

export default DetailMovies;
