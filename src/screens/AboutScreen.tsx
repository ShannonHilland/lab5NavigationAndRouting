import React from "react";
import {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import ConfettiCannon from 'react-native-confetti-cannon';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({navigation} : any) : React.JSX.Element {
  const [showConfetti, setShowConfetti] = useState(false); 
  
  return (
    <MainLayout>
      <View style={styles.cardContainer}>
        <View style={styles.txtContainer}>
          <Text style={styles.txtsm}>Welcome to</Text>
          <Text style={styles.txtlg}>TickIt</Text>
        </View>
        <Text style={styles.dev}>This app was developed by</Text>
        <TouchableOpacity onPress={() => setShowConfetti(true)}>
          {showConfetti && (
            <ConfettiCannon
              count={200}
              origin={{ x: -10, y: 0}} 
              onAnimationEnd={() => setShowConfetti(false)} 
            />
          )}
          <Text style={styles.dev}>Shannon Hilland</Text>
        </TouchableOpacity>
        <View style={styles.sep}></View>
        <Text style={styles.dev}>Last Updated On:</Text>
        <Text style={styles.dev}>November 16, 2024 🍂</Text>
      </View>
      <TouchableOpacity onPress={() =>navigation.goBack()} style={styles.nav}>
        <Text style={styles.txt}>Go to Home</Text>
      </TouchableOpacity>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
    txtsm: {
      textAlign: "center",
      fontSize: 20,
      color: "grey",
    },
    txtlg: {
      textAlign: "center",
      fontSize: 50,
      color: "orange",
      fontFamily:"cursive",
      fontWeight: "bold"
    },
    txtContainer: {
      padding: 20,
      margin: 20,
      height: 200,
      width: '50%',
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 2,
      borderColor: 'orange',
      borderRadius: 45,
      backgroundColor: '#f7f9fc'
    },
    cardContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 120
    },
    dev: {
      textAlign: "center",
      fontSize: 20,
      color: "grey",
      margin: 5
    },
    sep: {
      margin: 20,
      borderBottomWidth: 2,
      borderColor:"orange"
    },
    nav: {
      position: 'absolute',
      bottom: 70,
      alignSelf: 'center',
      borderColor: 'orange',
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
    },
    txt: {
      color: 'orange',
      fontSize: 20
    }
});