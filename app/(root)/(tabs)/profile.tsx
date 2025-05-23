import React , { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView , Alert, Switch  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// export default function Profile() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Profile</Text>
//         <TouchableOpacity>
//           <Ionicons name="settings" size={24} color="#FFF" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView style={styles.content}>
//         <View style={styles.profileSection}>
//           <Image
//             source={{ uri: 'https://via.placeholder.com/100' }}
//             style={styles.profileImage}
//           />
//           <Text style={styles.userName}>John Doe</Text>
//           <Text style={styles.userEmail}>john.doe@example.com</Text>
//         </View>

//         {[
export default function Profile() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const navigation = useNavigation();

  const toggleNotifications = () => {
    setIsNotificationsEnabled(previousState => {
      const newState = !previousState;
      Alert.alert(
        'Notifications',
        newState 
          ? 'You will receive all notifications.'
          : 'You will no longer receive app notifications.'
      );
      return newState;
    });
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Logout',
          onPress: () => {
            // Add logout logic here
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }]
            });
          }
        }
      ]
    );
  };

  const openLanguageSelector = () => {
    Alert.alert(
      'Select Language',
      'Choose your preferred language',
      [
        {
          text: 'English',
          onPress: () => {/* Add language change logic */}
        },
        {
          text: 'Hindi',
          onPress: () => {/* Add language change logic */}
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="settings" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
        </View>

        {[
          { icon: 'person', title: 'Personal Information' },
          { icon: 'document-text', title: 'Medical Records' },
          { icon: 'time', title: 'Appointment History' },
          { icon: 'card', title: 'Payment Methods' },
          { 
            icon: 'notifications', 
            title: 'Notifications',
            rightElement: (
              <Switch
                value={isNotificationsEnabled}
                onValueChange={toggleNotifications}
                trackColor={{ false: '#E5E7EB', true: '#98002E' }}
              />
            )
          },
          { 
            icon: 'help-circle', 
            title: 'Help & Support',
            onPress: () => console.log('navigation.navigate(\'Help\')')
          },
          {
            icon: 'information-circle',
            title: 'FAQs',
            onPress: () => console.log('navigation.navigate(\'FAQ\')')
          },
          {
            icon: 'language',
            title: 'Language',
            onPress: openLanguageSelector
          }
        ].map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <View style={styles.menuIcon}>
              <Ionicons name={item.icon} size={20} color="#98002E" />
            </View>
            <Text style={styles.menuText}>{item.title}</Text>
            {item.rightElement || <Ionicons name="chevron-forward" size={16} color="#98002E" />}
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out" size={20} color="#98002E" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8FAFC',
//   },
//   header: {
//     backgroundColor: '#98002E',
//     padding: 20,
//     paddingBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFF',
//   },
//   content: {
//     flex: 1,
//   },
//   profileSection: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#FFF',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E7EB',
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   userName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#1F2937',
//   },
//   userEmail: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginTop: 5,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#FFF',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E7EB',
//   },
//   menuIcon: {
//     width: 40,
//     alignItems: 'center',
//   },
//   menuText: {
//     flex: 1,
//     fontSize: 16,
//     color: '#1F2937',
//     marginLeft: 10,
//   },
//   logoutButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 15,
//     marginTop: 20,
//     marginHorizontal: 15,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#98002E',
//   },
//   logoutText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#98002E',
//     fontWeight: 'bold',
//   },
// });  
//         { icon: 'document-text', title: 'Medical Records' },
//           { icon: 'time', title: 'Appointment History' },
//           { icon: 'card', title: 'Payment Methods' },
//           { icon: 'notifications', title: 'Notifications' },
//           { icon: 'help-circle', title: 'Help & Support' },
//         ].map((item, index) => (
//           <TouchableOpacity key={index} style={styles.menuItem}>
//             <View style={styles.menuIcon}>
//               <Ionicons name={item.icon} size={20} color="#98002E" />
//             </View>
//             <Text style={styles.menuText}>{item.title}</Text>
//             <Ionicons name="chevron-forward" size={16} color="#98002E" />
//           </TouchableOpacity>
//         ))}

//         <TouchableOpacity style={styles.logoutButton}>
//           <Ionicons name="log-out" size={20} color="#98002E" />
//           <Text style={styles.logoutText}>Log Out</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#98002E',
    padding: 20,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  userEmail: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  menuIcon: {
    width: 40,
    alignItems: 'center',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#98002E',
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#98002E',
    fontWeight: 'bold',
  },
});
