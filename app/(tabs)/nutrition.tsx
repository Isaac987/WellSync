import useTheme from "@theme/hooks/useTheme";
import { View, Text, StyleSheet } from "react-native";

export default function Nutrition() {
  const { colorPalette } = useTheme();
  return (
    <View style={{ backgroundColor: colorPalette.background }}>
      <Text style={{ color: colorPalette.text }}>Nutrtion</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
