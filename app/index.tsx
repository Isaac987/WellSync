import useGlobalTheme from "@shared/hooks/useGlobalTheme";
import { usePreferenceStore } from "@shared/store/usePreferencesStore";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Index() {
  const colorPalette = useGlobalTheme();
  const setColorTheme = usePreferenceStore((state) => state.setColorTheme);

  return (
    <View style={{ backgroundColor: colorPalette.background }}>
      <Text style={{ color: colorPalette.text }}>Hello World</Text>

      <Button
        onPress={() => {
          setColorTheme("dark");
        }}
        title="Set Theme Dark"
        color={colorPalette.primary}
        accessibilityLabel="Learn more about this purple button"
      />

      <Button
        onPress={() => {
          setColorTheme("light");
        }}
        title="Set Theme Light"
        color={colorPalette.primary}
        accessibilityLabel="Learn more about this purple button"
      />

      <Button
        onPress={() => {
          setColorTheme("system");
        }}
        title="Set Theme System"
        color={colorPalette.primary}
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
