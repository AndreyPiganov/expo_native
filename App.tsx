// App.tsx

import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ProgrammingLanguageItem from "./src/components/ProgrammingLanguageItem";
import { programmingLanguages } from "./data";
import { ProgrammingLanguage } from "./src/types/ProgrammingLanguage";

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000); // Имитация обновления данных
  };

  const renderItem = ({ item }: { item: ProgrammingLanguage }) => (
    <ProgrammingLanguageItem
      name={item.name}
      experience={item.experience}
      logo={item.logo}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={programmingLanguages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});
