import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Image, View } from "react-native";
// import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const getUrl = () => {
  // 1F609
  const fileUrl = `https://res.cloudinary.com/silverbirder/image/upload/v1630841339/silver-birder.github.io/purchases/braava_jet_m6.jpg`;
  return fileUrl;
}
// An example demonstrating the usage of native modules. 
// (Yes, it can be optimzed, but that's not the point of the example :P)
export function AsyncStorageExample(): JSX.Element {
  const [url, setUrl] = useState(getUrl());
  const updateIcon = async () => {
    setUrl(getUrl());
  };
  return (
    <View style={styles.root}>
      <Image style={styles.logo} source={{ uri: url }} />
      <Button
        onPress={() =>
          updateIcon()
        }
        title="Update icon"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 28,
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    maxWidth: 420,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
  },
  value: {
    marginBottom: 12,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center"
  },
});
