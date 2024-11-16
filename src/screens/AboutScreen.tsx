import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({navigation} : any) : React.JSX.Element {
  return (
    <MainLayout>
      <Text>About Screen</Text>
      <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
    container: {

    },
});