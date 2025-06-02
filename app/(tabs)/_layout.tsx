import useTheme from "@theme/hooks/useTheme";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  const { colorPalette } = useTheme();

  return (
    <Tabs screenOptions={{ tabBarShowLabel: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color={colorPalette.secondary} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="nutrition"
        options={{
          title: "Nutrition",
          tabBarIcon: () => <MaterialCommunityIcons name="food-apple" size={24} color={colorPalette.secondary} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          tabBarIcon: () => <MaterialCommunityIcons name="weight-lifter" size={24} color={colorPalette.secondary} />,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
