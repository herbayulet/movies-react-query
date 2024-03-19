import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { RefreshControl } from "react-native-gesture-handler";

interface MovieListItemsProps {
  item: any;
}

const MoviewWatchList = ({ item }: MovieListItemsProps) => {
  console.log(item, "ii item");

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Lakukan pembaruan data di sini
    setTimeout(() => setRefreshing(false), 2000); // Contoh: Hentikan loading setelah 2 detik
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View>
        <Link href={`/${item.id}`} asChild>
          <Pressable style={styles.flatLists}>
            <Image
              source={{
                uri: "https://image.tmdb.org/t/p/w500/" + item?.backdrop_path,
              }}
              style={{ width: "100%", aspectRatio: 13 / 8, borderRadius: 15 }}
              // resizeMode="cover"
            />
          </Pressable>
        </Link>
      </View>
    </ScrollView>
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

export default MoviewWatchList;
