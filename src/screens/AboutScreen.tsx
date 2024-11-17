import React from "react";
import {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import ConfettiCannon from 'react-native-confetti-cannon';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({navigation} : any) : React.JSX.Element {
  const [showConfetti, setShowConfetti] = useState(false); 
  
  return (
    <MainLayout>
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
      <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
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
    }
});