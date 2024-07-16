import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="(tabs)/profile" options={{ headerShown: false }}/> */}
      <Stack.Screen name="personal-information" options={{ headerShown: false }}/>
    </Stack>
  );
}
