import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Pages/Home";
import Territorio from "./src/Pages/Territorio";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{
          title:"Menu",
          headerStyle:{backgroundColor: "#AD0098"  },
          headerTintColor: "#fff",

        }}

        />
        <Stack.Screen name="Territorio" component={Territorio} 
        options={{
          title:"Território 1",
          headerStyle:{backgroundColor: "#AD0098"  },
          headerTintColor: "#fff",
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
