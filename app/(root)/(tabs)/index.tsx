import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.head}>
        <View style={styles.header}>
          {/* <Text style={styles.timeText}>07:00</Text> */}
          <View style={styles.profileContainer}>
            <Image
              source={require("@/assets/images/logo.png")}
              style={styles.profileImage}
            />
            {/* <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>Dani Martinez</Text>
              </View> */}
            <TouchableOpacity style={styles.authButton}>
              <Text style={styles.authButtonText}>Login / Signup</Text>
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#aaa"
              style={styles.searchIcon}
            />
            <TextInput style={styles.searchInput} placeholder="Search doctor" />
          </View>
        </View>
        {/* <View style={styles.statusIcons}>
          <Ionicons name="wifi" size={18} color="#FFF" />
          <Ionicons
            name="cellular"
            size={18}
            color="#FFF"
            style={{ marginLeft: 8 }}
          />
          <Ionicons
            name="battery-full"
            size={18}
            color="#FFF"
            style={{ marginLeft: 8 }}
          />
        </View> */}
      </View>

      {/* Categories */}
      <View style={styles.categoriesHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.showAll}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryGrid}>
        {[
          { name: "Consultation", icon: "chatbubbles" },
          { name: "Dentist", icon: "medical" },
          { name: "Cardiologist", icon: "heart" },
          { name: "Hospital", icon: "business" },
          { name: "Emergency", icon: "alert-circle" },
          { name: "Laboratory", icon: "flask" },
        ].map((item, index) => (
          <View key={index} style={styles.categoryItem}>
            <Ionicons name={item.icon} size={24} color="#98002E" />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        ))}
      </View>

      {/* Top Doctors */}
      <Text style={[styles.sectionTitle, styles.topDoc]}>Top doctors</Text>
      <ScrollView>
        {[
          {
            name: "Dr. Olivia Wilson",
            specialty: "Consultant - Physiotherapy",
            rating: "4.9 (37 Reviews)",
            image: "https://via.placeholder.com/50",
          },
          {
            name: "Dr. Jonathan Patterson",
            specialty: "Consultant - Internal Medicine",
            rating: "4.9 (37 Reviews)",
            image: "https://via.placeholder.com/50",
          },
        ].map((doctor, index) => (
          <View key={index} style={styles.doctorCard}>
            <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
            <View>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
              <Text style={styles.doctorRating}>⭐ {doctor.rating}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC", position: "relative" },
  // head:{
  //   flexDirection:"row"
  // },
  header: {
    backgroundColor: "#98002E",
    padding: 20,
    flexDirection: "row",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  profileContainer: {
    flexDirection: "row",
    marginBottom: 50,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  welcomeText: { fontSize: 16, color: "#FFF" },
  userName: { fontSize: 18, fontWeight: "bold", color: "#FFF" },
  authButton: {
    backgroundColor: "transparent",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  authButtonText: { color: "#FFF", fontSize: 14, fontWeight: "bold" },

  searchContainer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, height: 40 },
  categoriesHeader: {
    // marginLeft : 10 ,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#1F2937" },
  showAll: { fontSize: 14, color: "#98002E" },
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
    marginBottom: 10,
  },
  categoryText: { marginTop: 5, fontSize: 14, color: "#374151" },
  topDoc: {
    marginLeft: 10,
  },
  doctorCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  doctorImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  doctorName: { fontSize: 16, fontWeight: "bold", color: "#1F2937" },
  doctorSpecialty: { fontSize: 14, color: "#6B7280" },
  doctorRating: { fontSize: 14, color: "#F59E0B" },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },
});
