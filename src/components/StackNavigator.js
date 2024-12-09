import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackNavigator =()=>{

    const stackNav = createNativeStackNavigator();
    return(<NavigationContainer>
            <stackNav.Navigator>
                <stackNav.Screen>
                    
                </stackNav.Screen>
            </stackNav.Navigator>
    </NavigationContainer>);
   

}

export default StackNavigator;