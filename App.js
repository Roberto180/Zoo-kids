import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Pages/Home";
import Territorio1 from "./src/Pages/Territorio 1";
import Territorio2 from "./src/Pages/Territorio 2";  
import Territorio3 from "./src/Pages/Territorio 3";
import Territorio4 from "./src/Pages/Territorio 4";
import Territorio5 from "./src/Pages/Territorio 5";
import Territorio6 from "./src/Pages/Territorio 6";
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

         <Stack.Screen name="Territorio2" component={Territorio2} 
        options={{
          title:"Território 2",
          headerStyle:{backgroundColor: "#b90000ff"  },
          headerTintColor: "#fff",
        }}
        />
         <Stack.Screen name="Territorio3" component={Territorio3} 
        options={{
          title:"Território 3",
          headerStyle:{backgroundColor: "#b90000ff"  },
          headerTintColor: "#fff",
        }}
        />
         <Stack.Screen name="Territorio4" component={Territorio4} 
        options={{
          title:"Território 4",
          headerStyle:{backgroundColor: "#b90000ff"  },
          headerTintColor: "#fff",
        }}
        />
         <Stack.Screen name="Territorio5" component={Territorio5} 
        options={{
          title:"Território 5",
          headerStyle:{backgroundColor: "#b90000ff"  },
          headerTintColor: "#fff",
        }}
        />
         <Stack.Screen name="Territorio6" component={Territorio6} 
        options={{
          title:"Território 6",
          headerStyle:{backgroundColor: "#b90000ff"  },
          headerTintColor: "#fff",
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
