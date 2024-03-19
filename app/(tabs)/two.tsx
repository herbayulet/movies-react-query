import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { useTopRated } from "@/func/useTopRated";
import { SafeAreaView } from "react-native-safe-area-context";
import MoviewWatchList from "@/components/MovieWatchList";
import { useWatchList } from "@/func/useWatchList";

const ListTop = () => {
  const { watchlist, isLoading } = useWatchList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: "white" }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            // numColumns={2}
            data={watchlist}
            renderItem={({ item }) => <MoviewWatchList item={item} />}
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
