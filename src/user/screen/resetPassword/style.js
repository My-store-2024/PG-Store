import React, { Component } from 'react';
import { View, Text, StyleSheet, PixelRatio, Dimensions } from 'react-native';
import { calcH, calcW, STYLES } from '../../utils/constants/common';

const styles = StyleSheet.create({
  
    topContainer: {
        alignItems: 'center',
        marginTop: calcH(0.1),  // 100 
    },
    logoContainer: {
        width: calcW(0.22),
        height: calcW(0.22),
        marginRight: calcW(0.04) // 40
    },
    logoImg: {
        width: calcW(0.22),
        height: calcW(0.22),
        resizeMode: 'contain'
    },
    topText: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '700',
        fontFamily: 'quicksand_bold',
        paddingTop: calcH(0.04)
    },
    subText: {
        color: '#ADADAD', 
        fontSize: 15, 
        marginTop:calcW(0.02),
    },
    formContainer: {
        alignItems: 'center',
        marginTop: calcH(0.04)
    },
   
    inputContainer: {
        width: calcW(0.8),
        height: calcH(0.07),
        marginBottom:calcH(0.02),
        borderRadius:calcH(0.01),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        
        elevation: 23,
        backgroundColor:'#ffffff',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
        
    },
    inputContainer2:{
        width: calcW(0.8),
        height: calcH(0.07),
        marginBottom:calcH(0.02),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'#e1e1e1',
        borderBottomWidth:1

    },

    inputSubContainer:{
        width:calcW(0.67),
        marginLeft:calcH(0.03)
    },
    iconContainer:{
        width:calcW(0.2),
    },
    inputStyle:{
        height:calcH(0.05)
    },
    IconStyle:{
        width:calcW(0.04),
        height:calcH(0.04),
        resizeMode:'contain'
    },
    forgotContainer:{
        alignItems:'center',
        marginTop:calcH(0.01)
    },
    forgotText:{
        fontSize:12,
        color:'#c4c2c2',
        fontWeight:'500'
    },
     btnContainer:{
        alignItems:'center',
        marginTop:calcH(0.04)
     },
     btnSubContainer:{
         width:calcW(0.52),
         height:calcH(0.06),
         borderRadius:calcH(0.03),
         backgroundColor:STYLES.PRIMARY_COLOR,
         justifyContent:'center',
         alignItems:'center'
     },
     btnText:{
        fontSize:14,
        color:STYLES.THIRD_COLOR,
        fontWeight:'500',
        fontFamily:'quicksand_medium'
     },
  
     bottomContainer:{
        justifyContent:'center',
        marginTop:calcH(0.08),
        flexDirection:'row'

     },
     bottomtext:{
        fontSize:14,
        color:'#e1e1e1',
        fontWeight:'500'
     },
     bottomtext2:{
        fontSize:14,
        color:'#000000',
        fontWeight:'500',
        paddingLeft:calcW(0.01)
     },



})

export default styles;