import useTheme from "@theme/hooks/useTheme";
import { View, Text, StyleSheet } from "react-native";

export default function Index() {
  const { colorPalette } = useTheme();
  return (
    <View style={{ backgroundColor: colorPalette.background }}>
      <Text style={{ color: colorPalette.text }}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
