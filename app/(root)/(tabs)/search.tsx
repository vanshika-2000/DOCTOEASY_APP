import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Dummy doctor data
const doctors = [
  { name: 'Dr. John Smith', specialty: 'Dentist', rating: '4.8', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Emily Johnson', specialty: 'Dentist', rating: '4.7', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Alex Brown', specialty: 'Cardiologist', rating: '4.9', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Sarah Wilson', specialty: 'Cardiologist', rating: '4.6', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Michael Davis', specialty: 'General Physician', rating: '4.5', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Olivia Martinez', specialty: 'General Physician', rating: '4.4', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Chris Lee', specialty: 'Pediatrician', rating: '4.8', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Sophia Kim', specialty: 'Pediatrician', rating: '4.7', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Daniel Patel', specialty: 'Orthopedic', rating: '4.6', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Laura Chen', specialty: 'Orthopedic', rating: '4.5', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Kevin Lopez', specialty: 'Gynecologist', rating: '4.8', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Amanda White', specialty: 'Gynecologist', rating: '4.7', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Brian Thompson', specialty: 'Dermat', rating: '4.6', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Rachel Garcia', specialty: 'Dermat', rating: '4.5', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Eric Robinson', specialty: 'ENT Specialist', rating: '4.7', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Megan Clark', specialty: 'ENT Specialist', rating: '4.6', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Jason Hernandez', specialty: 'Eye Specialist', rating: '4.8', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Victoria Young', specialty: 'Eye Specialist', rating: '4.7', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Patrick Allen', specialty: 'Oncologist', rating: '4.9', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Natalie Scott', specialty: 'Oncologist', rating: '4.8', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Ethan Perez', specialty: 'Veterinarian', rating: '4.7', image: 'https://via.placeholder.com/100' },
  { name: 'Dr. Madison Hall', specialty: 'Veterinarian', rating: '4.6', image: 'https://via.placeholder.com/100' },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookAppointment = (doctorName: string) => {
    alert(`Booking appointment with ${doctorName}`);
    // Implement your booking logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.searchTitle}>Search Doctors</Text> {/* Heading centered */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search doctors, specialties..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        {filteredDoctors.length === 0 ? (
          <Text style={styles.noResults}>No doctors found.</Text>
        ) : (
          filteredDoctors.map((doctor, index) => (
            <View key={index} style={styles.doctorCard}>
              <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
              <View>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
                <Text style={styles.doctorRating}>⭐ {doctor.rating}</Text>
                <TouchableOpacity 
                  style={styles.bookButton} 
                  onPress={() => handleBookAppointment(doctor.name)}
                >
                  <Text style={styles.bookButtonText}>Book Appointment</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { backgroundColor: '#98002E', padding: 20, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
  searchTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#FFF', 
    textAlign: 'center', // Centering the title
    marginBottom: 10 
  },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E7EB', borderRadius: 10, paddingHorizontal: 10, marginTop: 10 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, height: 40 },
  content: { padding: 15 },
  noResults: { textAlign: 'center', fontSize: 16, color: '#6B7280', marginTop: 20 },
  doctorCard: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10, alignItems: 'center' },
  doctorImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  doctorName: { fontSize: 16, fontWeight: 'bold', color: '#1F2937' },
  doctorSpecialty: { fontSize: 14, color: '#6B7280' },
  doctorRating: { fontSize: 14, color: '#F59E0B' },
  bookButton: {
    backgroundColor: '#98002E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
 