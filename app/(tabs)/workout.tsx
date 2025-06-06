import useGlobalTheme from "@shared/hooks/useGlobalTheme";
import { View, Text, StyleSheet } from "react-native";

export default function Workout() {
  const colorPalette = useGlobalTheme();

  return (
    <View style={{ backgroundColor: colorPalette.background }}>
      <Text style={{ color: colorPalette.text }}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
