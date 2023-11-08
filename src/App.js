import * as Analytics from "expo-firebase-analytics";

import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  LogBox,
  View,
} from "react-native";

import LandingScreen from "./screens/LandingScreen";
import { NavigationContainer } from "@react-navigation/native";
import React, { useRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

export default function App() {

  const navigationRef = useRef();
  const routeNameRef = useRef();

  return (
    <View style={styles.container}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() =>
          (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
        }
        onStateChange={ async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;
          if (previousRouteName !== currentRouteName) {
            await Analytics.logEvent("screen_view", {
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }
          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;
        }}
      >
        <Stack.Navigator screenOptions={navStyling}>
          <Stack.Screen
            name="Home"
            component={LandingScreen}
            options={{ title: "Home" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const navStyling = {
  headerStyle: {
    backgroundColor: "#FF8C00",
    height: 80,
    elevation: 0,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});
