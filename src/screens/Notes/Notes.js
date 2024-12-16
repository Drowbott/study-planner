import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Notes = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notes</Text>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("MathNotes")}
      >
        <Text style={styles.cardText}>Math Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Science Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>English Notes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71C9CE",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  card: {
    width: "80%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#FFEB3B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Notes;
