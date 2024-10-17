import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Screen } from '../../components';
import SecondHeaderComponent from '../../components/SecondHeaderComponent';

// Mock Data for Payments
const payments = [
  { id: '001', customerName: 'John Doe', date: '2024-09-01', amount: '₹120.00' },
  { id: '002', customerName: 'Jane Smith', date: '2024-09-05', amount: '₹89.99' },
  { id: '003', customerName: 'Sam Williams', date: '2024-09-10', amount: '₹45.50' },
  { id: '004', customerName: 'Alice Johnson', date: '2024-09-12', amount: '₹199.99' },
  { id: '005', customerName: 'Michael Brown', date: '2024-09-15', amount: '₹150.75' },
  { id: '006', customerName: 'Emily Davis', date: '2024-09-17', amount: '₹78.45' },
  { id: '007', customerName: 'Christopher Wilson', date: '2024-09-20', amount: '₹64.00' },
  { id: '008', customerName: 'Sarah Martinez', date: '2024-09-22', amount: '₹120.10' },
  { id: '009', customerName: 'Daniel Garcia', date: '2024-09-25', amount: '₹102.35' },
  { id: '010', customerName: 'Sophia Robinson', date: '2024-09-28', amount: '₹175.20' },
  { id: '011', customerName: 'David Clark', date: '2024-09-30', amount: '₹220.99' },
  { id: '012', customerName: 'Olivia Lewis', date: '2024-10-01', amount: '₹134.50' },
  { id: '013', customerName: 'James Lee', date: '2024-10-03', amount: '₹85.00' },
  { id: '014', customerName: 'Isabella Walker', date: '2024-10-04', amount: '₹99.99' },
  { id: '015', customerName: 'Henry Hall', date: '2024-10-05', amount: '₹110.49' },
  { id: '016', customerName: 'Mia Allen', date: '2024-10-06', amount: '₹250.00' },
  { id: '017', customerName: 'Alexander Young', date: '2024-10-07', amount: '₹180.75' },
  { id: '018', customerName: 'Grace Hernandez', date: '2024-10-08', amount: '₹92.60' },
  { id: '019', customerName: 'William King', date: '2024-10-09', amount: '₹199.99' },
  { id: '020', customerName: 'Emma Wright', date: '2024-10-10', amount: '₹150.30' },
];

const PaymentScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // This simulates a network request to fetch payment data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const renderPayment = ({ item }) => (
    <View style={styles.paymentContainer}>
      <View style={styles.paymentDetails}>
        <Text style={styles.paymentText}>Payment ID: {item.id}</Text>
        <Text style={styles.paymentText}>Customer: {item.customerName}</Text>
        <Text style={styles.paymentText}>Date: {item.date}</Text>
        <Text style={styles.paymentText}>Amount: {item.amount}</Text>
      </View>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => navigation.navigate('PaymentDetails', { paymentId: item.id })}
      >
        <Icon name="information-circle-outline" size={24} color="#fff" />
        <Text style={styles.detailsButtonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Total Payments</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Screen>
         <SecondHeaderComponent navigation={navigation} />
        <View style={styles.container}>
      <FlatList
        data={payments}
        keyExtractor={(item) => item.id}
        renderItem={renderPayment}
        ListHeaderComponent={renderHeader}
      />
    </View>

    </Screen>
    
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  paymentContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentDetails: {
    flex: 1,
  },
  paymentText: {
    fontSize: 16,
    marginBottom: 4,
  },
  detailsButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#fff',
    marginLeft: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    paddingVertical: 20,
    backgroundColor: '#007bff',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
