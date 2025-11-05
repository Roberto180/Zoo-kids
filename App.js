import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Pages/Home";
import Territorio1 from "./src/Pages/Territorio 1";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{
          title:"Menu",
          headerStyle:{backgroundColor: "#b90000ff"  },
          headerTintColor: "#fff",

        }}

        />
        <Stack.Screen name="Territorio1" component={Territorio1} 
        options={{
          title:"Território 1",
          headerStyle:{backgroundColor: "#b90000ff"  },
          headerTintColor: "#fff",
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
