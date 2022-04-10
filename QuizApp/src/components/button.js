import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CustomButton = ({text,}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.texty}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    button: {
        backgroundColor: "#DB5EAD",
        borderRadius: 10,
        height: 50,
        margin: 10,
        padding: 5,
    },
    texty: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 6,
        marginHorizontal: 20,
    },
});

export default CustomButton;