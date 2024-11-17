import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
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