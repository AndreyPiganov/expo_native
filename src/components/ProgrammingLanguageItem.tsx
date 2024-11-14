import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ProgrammingLanguageProps } from "../types/ProgrammingLanguageProps";

const ProgrammingLanguageItem: React.FC<ProgrammingLanguageProps> = ({
  name,
  experience,
  logo,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.experience}>{experience}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  experience: {
    fontSize: 16,
    color: "#666",
  },
});

export default ProgrammingLanguageItem;
