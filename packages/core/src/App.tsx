import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AsyncStorageExample } from "./AsyncStorageExample";
import { subPlatform } from "./config";
import { useQuery } from 'urql';

const TodosQuery = `
{
  hello
}
`;

export function MyApp(): JSX.Element {
  const [result, reexecuteQuery] = useQuery({
    query: TodosQuery,
  });

  const { data, fetching, error } = result;
  if (fetching) return <Text>Loading...</Text>;
  if (error) return <Text>Oh no... {error.message}</Text>;
  const platformValue = subPlatform
    ? `${Platform.OS} (${subPlatform})`
    : Platform.OS;
  return (
    <SafeAreaView style={styles.root}>
      <AsyncStorageExample />
      {/* On React Native for Web builds coming from CRA, TypeScript 
          complains about the image type, so we cast it as a workaround  */}
      <Text style={styles.text}>Hello from React Native!</Text>
      <View style={styles.platformRow}>
        <Text style={styles.text}>Platform: </Text>
        <View style={styles.platformBackground}>
          <Text style={styles.platformValue}>{platformValue}</Text>
        </View>
      </View>
      <Text>{data.hello}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
  platformRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  platformValue: {
    fontSize: 28,
    fontWeight: "500",
  },
  platformBackground: {
    backgroundColor: "#ececec",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: "center",
  }
});
