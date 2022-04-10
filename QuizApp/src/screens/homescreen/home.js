import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import PageHeader from "../../components/header";
import CustomButton from "../../components/button";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <PageHeader />
            <View style={styles.imageContainer}>
                <Image source={require("../../../assets/images/homeguypink.png")} style={styles.image} />
                {/*Image attribute: https://storyset.com/technology">Technology illustrations by Storyset*/}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.custombutton} onPress={() => navigation.navigate("Quiz")}>
                    <Text style={styles.textButton}>Play Quiz</Text>
                </TouchableOpacity>
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
    textButton: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 6,
    },
    custombutton: {
        backgroundColor: "#DB5EAD",
        borderRadius: 10,
        height: 50,
        margin: 10,
        padding: 5,
    },
});

export default Home;