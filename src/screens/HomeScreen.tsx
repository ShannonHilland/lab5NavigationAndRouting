import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from "react-native";
import {useState} from 'react';
import MainLayout from '../layouts/MainLayout';
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

export default function HomeScreen({navigation} : any) : React.JSX.Element {
  const addTask = (taskText: string) => {
    if (taskText === '') {
      return;
    }
    if(list.includes(taskText)) {
      return;
    }
    setList([...list, taskText]);
  };
  const [list, setList] = useState<Array<string>>(
    [
    ]);
  return (
    <MainLayout>
      <ToDoList tasks={list}/>
      <ToDoForm addTask={addTask} />
      <TouchableOpacity onPress={() =>navigation.navigate('About')} style={styles.nav}>
        <Text style={styles.txt}>Go to About</Text>
      </TouchableOpacity>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
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
      fontSize: 20,
      fontWeight: 'bold'
    }
});