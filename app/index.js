import { View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <View>
      <Stack.Screen options={{ title: "Todo List" }} />
      <Link href="/completed">Completed</Link>
    </View>
  );
}
