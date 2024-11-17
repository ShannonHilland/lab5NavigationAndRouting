import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Footer() : React.JSX.Element {
    return (
        <View>
            <Text style={styles.text}>© 2024 Shannon Hilland</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 12,
        color: "grey"
    }
});