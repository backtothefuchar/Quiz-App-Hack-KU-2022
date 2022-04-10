import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Result = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Result</Text>
            <View style={styles.imageContainer}>
                <Image source={require("../../../assets/images/shakepink.png")} style={styles.image} />
                {/*Image attribute: https://storyset.com/people*/}
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    text: {
        marginTop: 40,
        color: "white",
        fontSize: 25,
    },
    imageContainer: {
        marginTop: 70,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 320,
        height: 320,
    },
});

export default Result;