import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search doctors, specialties..." 
        />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Popular Searches</Text>
        {['Cardiologist', 'Dentist', 'Pediatrician', 'Dermatologist'].map((item, index) => (
          <View key={index} style={styles.searchItem}>
            <Ionicons name="time-outline" size={20} color="#98002E" />
            <Text style={styles.searchText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#98002E',
    padding: 20,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    margin: 15,
    padding: 10,
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  content: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1F2937',
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  searchText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#374151',
  },
});
