import { StyleSheet, View, Text, Pressable } from "react-native";

import Colors from "../constants/colors";

function PrimaryButton(props) {
  function pressHandler() {
    onPress();
  }

  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) =>
        pressed
          ? [styles.buttonContainer, styles.pressed]
          : styles.buttonContainer
      }
    >
      <View>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height: 30,
    backgroundColor: Colors.primaryOrange,
    margin: 8,
    borderRadius: 10,
  },
  pressed: {
    backgroundColor: "white",
  },
});

export default PrimaryButton;
