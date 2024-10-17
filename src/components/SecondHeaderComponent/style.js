import React, { Component } from 'react';
import { View, Text, StyleSheet, PixelRatio, Dimensions } from 'react-native';
import { calcH, calcW, STYLES } from '../../utils/constants/common';

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
    },
    backArrow: {
        // Add styles for the back arrow
    },
    headerLogo: {
        width: 120,
        height: 40,
    },
    userLogo: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    searchButton: {
        marginHorizontal: 10,
    },
    bellButton: {
        marginHorizontal: 10,
    },
    iconSize: {
        width: 25,
        height: 25,
    },

    headerContainer: {
        width: calcW(1),
        height: calcH(0.10),
        flexDirection: "row",
        position: 'relative'
    },
    headerLogo: {
        width: calcW(0.30),
        height: calcW(0.25),
        resizeMode: 'contain',
        position: 'absolute',
        left: calcW(0.30),

    },
    backArrow: {
        position: 'absolute',
        left: calcW(0.06),
        top: calcW(0.08),
    },
    iconSize: {
        width: calcW(0.04),
        height: calcH(0.04),
        resizeMode: 'contain'
    },
    userLogo: {
        position: 'absolute',
        width: calcW(0.13),
        height: calcW(0.13),
        right: calcW(0.06),
        marginTop: calcW(0.01),
        borderRadius: calcW(0.09)
    },
    searchIcon: {

    }

})

export default styles;