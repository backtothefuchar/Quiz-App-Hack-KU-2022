import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import PageHeader from "../../components/header";
import CustomButton from "../../components/button";

const Home = () => {
    return (
        <View style={styles.container}>
            <PageHeader />
            <View style={styles.imageContainer}>
                <Image source={require("../../../assets/images/homeguypink.png")} style={styles.image} />
                {/*Image attribute: https://storyset.com/technology">Technology illustrations by Storyset*/}
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton text="Start Quiz" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111d52',
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
    buttonContainer: {
        marginHorizontal: 20,
        marginTop:180,
    },
    text: {
    },
});

export default Home;