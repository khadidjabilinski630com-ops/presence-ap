import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>presence-ap</Text>
      <Text style={styles.subtitle}>Écran de départ</Text>
      <Text style={styles.body}>
        Si tu vois ce texte, tout est en place.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#0B0E14",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#B9C0CC",
    marginBottom: 16,
  },
  body: {
    fontSize: 14,
    color: "#D7DDE6",
    textAlign: "center",
  },
});
