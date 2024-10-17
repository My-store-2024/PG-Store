import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Screen } from '../../components';
import SecondHeaderComponent from '../../components/SecondHeaderComponent';

// Mock Data for Customers (You would typically fetch this from an API)
const customers = [
    { id: '001', name: 'John Doe', email: 'john@example.com', orders: 5, totalSpent: '₹600.00' },
    { id: '002', name: 'Jane Smith', email: 'jane@example.com', orders: 3, totalSpent: '₹320.00' },
    { id: '003', name: 'Sam Williams', email: 'sam@example.com', orders: 7, totalSpent: '₹910.50' },
    { id: '004', name: 'Alice Johnson', email: 'alice@example.com', orders: 2, totalSpent: '₹210.25' },
    { id: '005', name: 'Michael Brown', email: 'michael@example.com', orders: 4, totalSpent: '₹450.75' },
    { id: '006', name: 'Emily Davis', email: 'emily@example.com', orders: 6, totalSpent: '₹800.00' },
    { id: '007', name: 'Christopher Wilson', email: 'christopher@example.com', orders: 1, totalSpent: '₹150.50' },
    { id: '008', name: 'Sarah Martinez', email: 'sarah@example.com', orders: 9, totalSpent: '₹1200.25' },
    { id: '009', name: 'Daniel Garcia', email: 'daniel@example.com', orders: 5, totalSpent: '₹675.80' },
    { id: '010', name: 'Sophia Robinson', email: 'sophia@example.com', orders: 2, totalSpent: '₹210.00' },
    { id: '011', name: 'David Clark', email: 'david@example.com', orders: 8, totalSpent: '₹1020.00' },
    { id: '012', name: 'Olivia Lewis', email: 'olivia@example.com', orders: 4, totalSpent: '₹380.00' },
    { id: '013', name: 'James Lee', email: 'james@example.com', orders: 6, totalSpent: '₹540.75' },
    { id: '014', name: 'Isabella Walker', email: 'isabella@example.com', orders: 3, totalSpent: '₹390.00' },
    { id: '015', name: 'Henry Hall', email: 'henry@example.com', orders: 1, totalSpent: '₹100.00' },
    { id: '016', name: 'Mia Allen', email: 'mia@example.com', orders: 7, totalSpent: '₹660.50' },
    { id: '017', name: 'Alexander Young', email: 'alexander@example.com', orders: 2, totalSpent: '₹270.25' },
    { id: '018', name: 'Grace Hernandez', email: 'grace@example.com', orders: 5, totalSpent: '₹450.00' },
    { id: '019', name: 'William King', email: 'william@example.com', orders: 8, totalSpent: '₹900.00' },
    { id: '020', name: 'Emma Wright', email: 'emma@example.com', orders: 6, totalSpent: '₹770.00' },
  ];
  

const CustomerScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // This simulates a network request to fetch customer data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const renderCustomer = ({ item }) => (
    <View style={styles.customerContainer}>
      <View style={styles.customerDetails}>
        <Text style={styles.customerText}>Name: {item.name}</Text>
        <Text style={styles.customerText}>Email: {item.email}</Text>
        <Text style={styles.customerText}>Orders: {item.orders}</Text>
        <Text style={styles.customerText}>Total Spent: {item.totalSpent}</Text>
      </View>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => navigation.navigate('CustomerDetails', { customerId: item.id })}
      >
        <Icon name="information-circle-outline" size={24} color="#fff" />
        <Text style={styles.detailsButtonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Total Customers({customers.length})</Text>
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
         <SecondHeaderComponent title="Products" navigation={navigation} />
        <View style={styles.container}>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={renderCustomer}
        ListHeaderComponent={renderHeader}
      />
    </View>

    </Screen>
    
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  customerContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customerDetails: {
    flex: 1,
  },
  customerText: {
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
