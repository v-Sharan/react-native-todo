import { View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Details() {
  const router = useRouter();
  return (
    <View>
      <Text
        className="text-xl justify-center"
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          router.back();
        }}
      >
        Todo List
      </Text>
    </View>
  );
}
