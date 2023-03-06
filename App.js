import { Text, View, ScrollView, Alert } from "react-native";
import Task from "./component/Task";
import styles from "./App.component.style";
import Form from "./component/Form";
import { useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleDeleteTask = (index) => {
    Alert.alert("Message", "Do You Delete", [
      {
        text: "OK",
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
        style: "cancel",
      },
      { text: "Cancel", onPress: () => {} },
    ]);
  };
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((items, index) => {
            return (
              <Task
                key={index}
                title={items}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
