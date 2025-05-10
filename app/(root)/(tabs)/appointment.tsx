import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';

export default function Appointment() {
  const [selectedTab, setSelectedTab] = useState('Scheduled');
  const [appointments, setAppointments] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [doctorName, setDoctorName] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const navigation = useNavigation();

  const tabs = ['Scheduled', 'Completed', 'Cancelled'];

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const storedAppointments = await AsyncStorage.getItem('appointments');
      if (storedAppointments) {
        setAppointments(JSON.parse(storedAppointments));
      }
    } catch (error) {
      console.error('Failed to load appointments:', error);
    }
  };

  const saveAppointments = async (newAppointments) => {
    try {
      await AsyncStorage.setItem('appointments', JSON.stringify(newAppointments));
    } catch (error) {
      console.error('Failed to save appointments:', error);
    }
  };

  const handleAddAppointment = () => {
    if (doctorName && appointmentType && appointmentDate && appointmentTime) {
      const newAppointment = {
        id: Date.now().toString(),
        doctorName,
        appointmentType,
        date: appointmentDate,
        time: appointmentTime,
        status: 'Scheduled',
      };
      const updatedAppointments = [...appointments, newAppointment];
      setAppointments(updatedAppointments);
      saveAppointments(updatedAppointments);

      setDoctorName('');
      setAppointmentType('');
      setAppointmentDate('');
      setAppointmentTime('');
      setModalVisible(false);
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updatedAppointments = appointments.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setAppointments(updatedAppointments);
    saveAppointments(updatedAppointments);
  };

  const filteredAppointments = appointments.filter(
    (item) => item.status === selectedTab
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Appointments</Text>
      </View>

      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.selectedTabText,
              ]}
            >
              {tab}
            </Text>
            {selectedTab === tab && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.calendarSection}>
          {filteredAppointments.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 20, color: '#6B7280' }}>
              No {selectedTab.toLowerCase()} appointments.
            </Text>
          ) : (
            filteredAppointments.map((item) => (
              <View key={item.id} style={styles.appointmentCard}>
                <View style={styles.dateSection}>
                  <Text style={styles.dateDay}>{item.date.split('-')[2]}</Text>
                  <Text style={styles.dateMonth}>
                    {new Date(item.date).toLocaleString('default', {
                      month: 'short',
                    }).toUpperCase()}
                  </Text>
                </View>
                <View style={styles.appointmentInfo}>
                  <Text style={styles.doctorName}>{item.doctorName}</Text>
                  <Text style={styles.appointmentType}>{item.appointmentType}</Text>
                  <Text style={styles.appointmentTime}>
                    <Ionicons name="time-outline" size={14} color="#6B7280" />{' '}
                    {item.time}
                  </Text>

                  {item.status === 'Scheduled' && (
                    <View style={styles.actionButtons}>
                      <TouchableOpacity
                        style={[styles.actionButton, { backgroundColor: '#059669' }]} // green
                        onPress={() => handleUpdateStatus(item.id, 'Completed')}
                      >
                        <Text style={styles.actionButtonText}>Complete</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.actionButton, { backgroundColor: '#DC2626' }]} // red
                        onPress={() => handleUpdateStatus(item.id, 'Cancelled')}
                      >
                        <Text style={styles.actionButtonText}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={24} color="#FFF" />
      </TouchableOpacity>

      {/* Modal for adding new appointment */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>New Appointment</Text>
            <TextInput
              placeholder="Doctor's Name"
              value={doctorName}
              onChangeText={setDoctorName}
              style={styles.input}
            />
            <TextInput
              placeholder="Appointment Type"
              value={appointmentType}
              onChangeText={setAppointmentType}
              style={styles.input}
            />
            <TextInput
              placeholder="Date (YYYY-MM-DD)"
              value={appointmentDate}
              onChangeText={setAppointmentDate}
              style={styles.input}
            />
            <TextInput
              placeholder="Time (e.g., 10:00 AM)"
              value={appointmentTime}
              onChangeText={setAppointmentTime}
              style={styles.input}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#98002E' }]}
                onPress={handleAddAppointment}
              >
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#6B7280' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// Styles stay the same as before (you can reuse your existing StyleSheet)

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
   actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  actionButton: {
    flex: 1,
    padding: 8,
    borderRadius: 6,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
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
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  calendarSection: {
    padding: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  tabText: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
  selectedTabText: {
    color: '#98002E',
    fontWeight: 'bold',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: -15,
    width: '100%',
    height: 2,
    backgroundColor: '#98002E',
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
