import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Screen } from '../../components';
import SecondHeaderComponent from '../../components/SecondHeaderComponent';

// Mock Data (You would typically fetch this data from an API)
const orders = [
    { id: '001', customerName: 'John Doe', status: 'Pending', total: '₹120.00' },
    { id: '002', customerName: 'Jane Smith', status: 'Completed', total: '₹89.99' },
    { id: '003', customerName: 'Sam Williams', status: 'Cancelled', total: '₹45.50' },
    { id: '004', customerName: 'Alice Johnson', status: 'Shipped', total: '₹199.99' },
    { id: '005', customerName: 'Michael Brown', status: 'Pending', total: '₹150.75' },
    { id: '006', customerName: 'Emily Davis', status: 'Completed', total: '₹78.45' },
    { id: '007', customerName: 'Christopher Wilson', status: 'Pending', total: '₹64.00' },
    { id: '008', customerName: 'Sarah Martinez', status: 'Shipped', total: '₹120.10' },
    { id: '009', customerName: 'Daniel Garcia', status: 'Cancelled', total: '₹102.35' },
    { id: '010', customerName: 'Sophia Robinson', status: 'Pending', total: '₹175.20' },
    { id: '011', customerName: 'David Clark', status: 'Completed', total: '₹220.99' },
    { id: '012', customerName: 'Olivia Lewis', status: 'Shipped', total: '₹134.50' },
    { id: '013', customerName: 'James Lee', status: 'Cancelled', total: '₹85.00' },
    { id: '014', customerName: 'Isabella Walker', status: 'Pending', total: '₹99.99' },
    { id: '015', customerName: 'Henry Hall', status: 'Shipped', total: '₹110.49' },
    { id: '016', customerName: 'Mia Allen', status: 'Completed', total: '₹250.00' },
    { id: '017', customerName: 'Alexander Young', status: 'Pending', total: '₹180.75' },
    { id: '018', customerName: 'Grace Hernandez', status: 'Completed', total: '₹92.60' },
    { id: '019', customerName: 'William King', status: 'Shipped', total: '₹199.99' },
    { id: '020', customerName: 'Emma Wright', status: 'Cancelled', total: '₹150.30' },
  ];
  
const OrderScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // This would typically fetch orders from an API
  useEffect(() => {
    setLoading(true);
    // Simulate network request
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const renderOrder = ({ item }) => (
    <View style={styles.orderContainer}>
      <View style={styles.orderDetails}>
        <Text style={styles.orderText}>Order ID: {item.id}</Text>
        <Text style={styles.orderText}>Customer: {item.customerName}</Text>
        <Text style={styles.orderText}>Status: {item.status}</Text>
        <Text style={styles.orderText}>Total: {item.total}</Text>
      </View>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => navigation.navigate('OrderDetails', { orderId: item.id })}
      >
        <Icon name="information-circle-outline" size={24} color="#fff" />
        <Text style={styles.detailsButtonText}>Details</Text>
      </TouchableOpacity>
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
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
      />
    </Screen>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  orderContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDetails: {
    flex: 1,
  },
  orderText: {
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
});
