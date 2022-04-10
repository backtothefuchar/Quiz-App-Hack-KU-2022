import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PageHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pique</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: "center",
    },
    text: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
    },
});

export default PageHeader;