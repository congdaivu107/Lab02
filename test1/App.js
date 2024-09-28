import React, { useState } from "react";
import { Text, View, Button } from "react-native";
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button
        title="Count"
        onPress={() => {
          setCount((preCount) => preCount + 1);
        }}
      />
      <Text>Count: {count}</Text>
    </View>
  );
}
