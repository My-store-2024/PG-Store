import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet,ActivityIndicator } from 'react-native';
import { Screen } from '../../components';
import SecondHeaderComponent from '../../components/SecondHeaderComponent';

function ProductScreen({ navigation }) {
    const [loading, setLoading] = useState(false);
  // Sample product data
  const [products, setProducts] = useState([
    { id: '1', name: 'Product Name', price: '₹10', stock: 20 },
    { id: '2', name: 'Product 2', price: '₹15', stock: 10 },
    { id: '3', name: 'Product 3', price: '₹20', stock: 5 },
    { id: '4', name: 'Product 4', price: '₹25', stock: 0 },
    { id: '5', name: 'Product 5', price: '₹30', stock: 12 },
    { id: '6', name: 'Product 6', price: '₹35', stock: 8 },
    { id: '7', name: 'Product 7', price: '₹40', stock: 15 },
    { id: '8', name: 'Product 8', price: '₹45', stock: 9 },
    { id: '9', name: 'Product 9', price: '₹50', stock: 18 },
    { id: '10', name: 'Product 10', price: '₹55', stock: 4 },
    { id: '11', name: 'Product 11', price: '₹60', stock: 3 },
    { id: '12', name: 'Product 12', price: '₹65', stock: 25 },
    { id: '13', name: 'Product 13', price: '₹70', stock: 6 },
    { id: '14', name: 'Product 14', price: '₹75', stock: 7 },
    { id: '15', name: 'Product 15', price: '₹80', stock: 0 },
    { id: '16', name: 'Product 16', price: '₹85', stock: 5 },
    { id: '17', name: 'Product 17', price: '₹90', stock: 1 },
    { id: '18', name: 'Product 18', price: '₹95', stock: 11 },
    { id: '19', name: 'Product 19', price: '₹100', stock: 14 },
    { id: '20', name: 'Product 20', price: '₹105', stock: 22 },
  ]);
  

  const handleDelete = (id) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this product?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: () => setProducts(products.filter((item) => item.id !== id)) },
    ]);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Total Product({products.length})</Text>
    </View>
  );

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDetails}>Price: {item.price}</Text>
        <Text style={styles.productDetails}>Stock: {item.stock}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProductScreen', { product: item })}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <Screen>
      <SecondHeaderComponent title="Products" navigation={navigation} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContainer}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
      },
    headerContainer: {
        paddingVertical: 20,
        backgroundColor: '#4aa223',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 8,
      },
  listContainer: {
    padding: 10,
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  productInfo: {
    flex: 2,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDetails: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: '#F44336',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ProductScreen;
