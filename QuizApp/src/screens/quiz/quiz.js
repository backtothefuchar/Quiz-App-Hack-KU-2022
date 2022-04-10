import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomButton from "../../components/button";
import { useNavigation } from "@react-navigation/native";

const Quiz = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>

            <View style={styles.questionContainer}>
                <Text style={styles.text}>Quiz lol imagine this is a question</Text>
            </View>

            <View style={styles.answerContainer}>

                <CustomButton style={styles.text} text="Answer 1" />

                <CustomButton text="Answer 2" />

                <CustomButton text="Answer 3" />

                <CustomButton text="Answer 4" />

            </View>

            <View style={styles.bottomContainer}>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Next</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Result")}>
                    <Text style={styles.textButton}>End</Text>
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
    text: {
        marginTop: 30,
        color: "white",
        fontSize: 30,
    },
    questionContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    answerContainer: {
    },
    button: {
        backgroundColor: "#1f2f78",
        padding: 10,
        borderRadius: 10,
        margin: 10,
        width: 100,
    },
    bottomContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: '90%',
        marginHorizontal: 30,
    },
    textButton: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
});

export default Quiz;