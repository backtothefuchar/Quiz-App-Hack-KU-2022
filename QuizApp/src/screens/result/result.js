import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../../components/button";
import { useNavigation } from "@react-navigation/native";

const Result = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Result</Text>
            <View style={styles.imageContainer}>
                <Image source={require("../../../assets/images/shakepink.png")} style={styles.image} />
                {/*Image attribute: https://storyset.com/people*/}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.custombutton} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.textButton}>Play Again</Text>
                </TouchableOpacity>
            </View>

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#111d52',
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
    buttonContainer: {
        marginTop: 30,
    },
    textButton: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 6,
        marginHorizontal: 20,
    },
    custombutton: {
        backgroundColor: "#DB5EAD",
        borderRadius: 10,
        height: 50,
        margin: 10,
        padding: 5,
        marginTop: 40,
    },
});

export default Result;