import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function Index() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const categories = [
    { name: "Dentist", icon: "tooth" },
    { name: "Cardiologist", icon: "heartbeat" },
    { name: "General Physician", icon: "stethoscope" },
    { name: "Pediatrician", icon: "child" },
    { name: "Orthopedic", icon: "bone" },
    { name: "Gynecologist", icon: "venus" },
    { name: "Dermat", icon: "user-md" },
    { name: "ENT Specialist", icon: "headphones" },
    { name: "Eye Specialist", icon: "eye" },
    { name: "Oncologist", icon: "ribbon" },
    { name: "Veterinarian", icon: "paw" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={require("@/assets/images/logo.jpg")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.authButton}>
            <Text style={styles.authButtonText}>Login / Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctor"
            onFocus={() => navigation.navigate('Search')}
          />
        </View>
      </View>

      {/* Categories Grid */}
      <ScrollView contentContainerStyle={styles.categoryGrid}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryItem}
            onPress={() => navigation.navigate('Search', { category: item.name })}
          >
            <FontAwesome5 name={item.icon as any} size={32} color="#98002E" />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#98002E",
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  authButton: {
    backgroundColor: "transparent",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  authButtonText: { color: "#FFF", fontSize: 14, fontWeight: "bold" },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchInput: { flex: 1, height: 40 },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  categoryItem: {
    width: "30%",
    backgroundColor: "#E5E7EB",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    color: "#374151",
    textAlign: "center",
  },
});
