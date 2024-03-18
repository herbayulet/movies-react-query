import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useTopRated } from "@/func/useTopRated";
import MovieListItems from "./MovieListItems";
import { SafeAreaView } from "react-native-safe-area-context";

const ListTop = () => {
  const { dataFilm } = useTopRated();

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  console.log(dataFilm);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: "white" }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{ gap: 5 }}
            columnWrapperStyle={{ gap: 5 }}
            data={dataFilm}
            renderItem={({ item }) => (
              <MovieListItems item={item} truncateText={truncateText} />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  flatLists: {
    marginHorizontal: 3,
    marginVertical: 4,
  },
  judul: {
    textAlign: "center",
    color: "white",
  },
});

export default ListTop;
