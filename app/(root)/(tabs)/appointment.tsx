import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Appointment() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Appointments</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.calendarSection}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          
          {/* Sample Appointment Cards */}
          {[1, 2].map((item, index) => (
            <View key={index} style={styles.appointmentCard}>
              <View style={styles.dateSection}>
                <Text style={styles.dateDay}>15</Text>
                <Text style={styles.dateMonth}>JUN</Text>
              </View>
              <View style={styles.appointmentInfo}>
                <Text style={styles.doctorName}>Dr. Sarah Johnson</Text>
                <Text style={styles.appointmentType}>General Checkup</Text>
                <Text style={styles.appointmentTime}>
                  <Ionicons name="time-outline" size={14} color="#6B7280" /> 10:00 AM
                </Text>
              </View>
              <TouchableOpacity style={styles.moreButton}>
                <Ionicons name="ellipsis-vertical" size={20} color="#98002E" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={24} color="#FFF" />
      </TouchableOpacity>
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
  content: {
    flex: 1,
  },
  calendarSection: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1F2937',
  },
  appointmentCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dateSection: {
    alignItems: 'center',
    paddingRight: 15,
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
  },
  dateDay: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#98002E',
  },
  dateMonth: {
    fontSize: 14,
    color: '#6B7280',
  },
  appointmentInfo: {
    flex: 1,
    paddingLeft: 15,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  appointmentType: {
    fontSize: 14,
    color: '#6B7280',
    marginVertical: 2,
  },
  appointmentTime: {
    fontSize: 14,
    color: '#6B7280',
  },
  moreButton: {
    padding: 5,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#98002E',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
