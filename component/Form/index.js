import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styles from "../Form/style";

const Form = (props) => {
  const [task, setTask] = useState("");
  const handleAddTask = () => {
    if (task.length === 0) {
      alert("Error");
      return false;
    }
    props.onAddTask(task);
    setTask("");
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={styles.addTask}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <TextInput
        value={task}
        style={styles.input}
        placeholder="Your Task"
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
