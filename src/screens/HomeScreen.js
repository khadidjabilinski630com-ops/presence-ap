// TEST-CHAT-SAGE-001
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AccueilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>présence-ap</Text>
      <Text style={styles.subtitle}>Écran de départ</Text>
      <Text style={styles.text}>
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
    color: "#A0A0A0",
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    color: "#CCCCCC",
    textAlign: "center",
  },
});
