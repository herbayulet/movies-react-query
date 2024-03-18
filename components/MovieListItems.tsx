import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface MovieListItemsProps {
  item: any;
  truncateText: any;
}

const MovieListItems = ({ item, truncateText }: MovieListItemsProps) => {
  return (
    <Link href={`/${item.id}`} asChild>
      <Pressable style={styles.flatLists}>
        <Image
          source={{
            uri: "https://image.tmdb.org/t/p/w500/" + item?.backdrop_path,
          }}
          style={{ width: "100%", aspectRatio: 13 / 8, borderRadius: 15 }}
          // resizeMode="cover"
        />
        <Text style={styles.judul}>{truncateText(item.title, 15)}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  flatLists: {
    flex: 1,
    marginHorizontal: 3,
    marginVertical: 4,
  },
  judul: {
    textAlign: "center",
  },
});

export default MovieListItems;
