import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomButton from "../../components/button";
import { useNavigation } from "@react-navigation/native";


const Quiz = () => {
    const navigation = useNavigation();
    
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);

    const getQuiz = async () => {
        const url = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
        const response = await fetch(url);
        const data = await response.json();
        setQuestions(data.results);
    };

    useEffect(() => {
        getQuiz()
    }, []);

    const handleNext = () => {
        setQues(ques + 1);
    };

    return (
        <View style={styles.container}>

        {questions && (   
            <View>

            <View style={styles.questionContainer}>
                <Text style={styles.text}>{decodeURIComponent(questions[ques].question)}</Text>
            </View>

            <View style={styles.answerContainer}>

                <CustomButton style={styles.text} text={decodeURIComponent(questions[ques].question)} />

                <CustomButton text="Answer 2" />

                <CustomButton text="Answer 3" />

                <CustomButton text="Answer 4" />

            </View>

            <View style={styles.bottomContainer}>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Skip</Text>
                </TouchableOpacity>

                {ques!==9 && <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.textButton}>Next</Text>
                </TouchableOpacity>}

                {ques===9 && <TouchableOpacity style={styles.button} onPress={()=>null}>
                    <Text style={styles.textButton}>Results</Text>
                </TouchableOpacity>}

                {/*
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Result")}>
                    <Text style={styles.textButton}>End</Text>
                </TouchableOpacity>
                */}

            </View>
            </View>
        )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111d52',
    },
    text: {
        marginTop: 60,
        marginBottom: 30,
        marginHorizontal: 20,
        color: "white",
        fontSize: 20,
    },
    questionContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 200,
    },
    answerContainer: {
        marginHorizontal: 20,
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
        marginTop: '70%',
        marginHorizontal: 30,
    },
    textButton: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
});

export default Quiz;