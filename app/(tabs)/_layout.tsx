import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import useGlobalTheme from "@shared/hooks/useGlobalTheme";

export default function TabLayout() {
  const colorPalette = useGlobalTheme();
  return (
    <Tabs screenOptions={{ tabBarShowLabel: true }}>
      <Tabs.Screen
        name="nutrition"
        options={{
          title: "Nutrition",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food-apple" size={24} color={colorPalette.secondary} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="weight-lifter" size={24} color={colorPalette.secondary} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={24} color={color} />,
          tabBarActiveTintColor: colorPalette.accent,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
