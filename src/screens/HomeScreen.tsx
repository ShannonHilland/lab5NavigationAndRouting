import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({navigation} : any) : React.JSX.Element {
  return (
    <MainLayout>
      <Text>Home Screen</Text>
      <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
    container: {

    },
});