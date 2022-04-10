import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/homescreen/home";
import Quiz from "./src/screens/quiz/quiz";
import Result from "./src/screens/result/result";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}

export default MyStack;