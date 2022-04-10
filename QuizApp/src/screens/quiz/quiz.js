import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomButton from "../../components/button";
import { useNavigation } from "@react-navigation/native";

const shuffleArray=(array)=>{
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = () => {
    const navigation = useNavigation();
    
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);

    const getQuiz = async () => {
        const url = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
        const response = await fetch(url);
        const data = await response.json();
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]));
    };

    const generateOptionsAndShuffle = (_question) => {
        const options = [..._question.incorrect_answers];
        options.push(_question.correct_answer);
        shuffleArray(options);

        return options;
    };

    useEffect(() => {
        getQuiz()
    }, []);

    const handleNext = () => {
        setQues(ques + 1);
        setOptions(generateOptionsAndShuffle(questions[ques+1]));
    };

    const handleResults = () => {
        navigation.navigate("Results", {score: score});
    };

    const handleSelect = (_option) => {
        if (_option === questions[ques].correct_answer) {
            setScore(score + 1);
        }
        
        if (ques !== 9) {
            handleNext();
        }
    };

    return (
        <View style={styles.container}>

        {questions && (   
            <View>

            <View style={styles.questionContainer}>
                <Text style={styles.text}>{decodeURIComponent(questions[ques].question)}</Text>
            </View>

            <View style={styles.answerContainer}>

                <TouchableOpacity style={styles.custombutton} onPress={() => handleSelect(options[0])}>
                    <Text style={styles.texty}>{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.custombutton} onPress={() => handleSelect(options[1])}>
                    <Text style={styles.texty}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.custombutton} onPress={() => handleSelect(options[2])}>
                    <Text style={styles.texty}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.custombutton} onPress={() => handleSelect(options[3])}>
                    <Text style={styles.texty}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.bottomContainer}>

                {/*}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Skip</Text>
                </TouchableOpacity>
                */}

                {ques!==9 && <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.textButton}>Skip</Text>
                </TouchableOpacity>}

                {ques===9 && <TouchableOpacity style={styles.button} onPress={handleResults}>
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
    custombutton: {
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

export default Quiz;