import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { Screen } from '../../components';
import SecondHeaderComponent from '../../components/SecondHeaderComponent';

function DashboardScreen({ navigation }) {
  const [activeColor, setActiveColor] = useState('My Account');

  const setActive = (title) => {
    setActiveColor(title);
  };

  return (
    <Screen>
      <View style={styles.topContainer}>
        <SecondHeaderComponent title='' navigation={navigation} />
        <View style={styles.lineStyle} />

        <View style={styles.headerText}>
          <Text style={styles.subheader}>Dashboard</Text>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.categoryRow1}>
            <TouchableOpacity
              style={activeColor === 'My Account' ? styles.catCard1 : styles.catCard2}
              onPress={() => {
                setActive('My Account');
                navigation.navigate('ProductScreen');
              }}
            >
              <Text style={activeColor === 'My Account' ? styles.activecatName : styles.catName}>
                Product
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={activeColor === 'Room Crowd' ? styles.catCard1 : styles.catCard2}
              onPress={() => {
                setActive('Room Crowd');
                navigation.navigate('OrderScreen');
              }}
            >
              <Text style={activeColor === 'Room Crowd' ? styles.activecatName : styles.catName}>
                Order
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryRow2}>
            <TouchableOpacity
              style={activeColor === 'Trip Crowd' ? styles.catCard1 : styles.catCard2}
              onPress={() => {
                setActive('Trip Crowd');
                navigation.navigate('CustomerScreen');
              }}
            >
              <Text style={activeColor === 'Trip Crowd' ? styles.activecatName : styles.catName}>
                Customer
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={activeColor === 'Social Crowd' ? styles.catCard1 : styles.catCard2}
              onPress={() => {
                setActive('Social Crowd');
                navigation.navigate('PaymentScreen');
              }}
            >
              <Text style={activeColor === 'Social Crowd' ? styles.activecatName : styles.catName}>
                Payment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  );
}

export default DashboardScreen;
