import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TaskListItem from "../components/TaskListItem";

type TaskListProps = {
  id: string;
  name: string;
  isDone: boolean;
};

function TaskListPage() {
  const [taskList, setTaskList] = useState<TaskListProps[]>([]);
  const [newTaskName, setNewTaskName] = useState<string>();

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTaskList((prevTaskList) => {
      return [
        ...prevTaskList,
        {
          id: `task-${new Date().getTime()}`,
          name: newTaskName,
          isDone: false,
        } as TaskListProps,
      ];
    });
  };

  const handleIsDone = (index: number) => {
    const newTaskList = [...taskList];
    newTaskList[index] = {
      ...newTaskList[index],
      isDone: !newTaskList[index].isDone,
    };
    setTaskList(newTaskList);
  };

  const handleDeleteTask = (index: number) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleAddTask(e)}
      >
        <TextField
          id="task-name"
          label="Task name"
          variant="standard"
          defaultValue={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <Button variant="outlined" type="submit">
          Add task
        </Button>
      </Box>
      <Table>
        <TableBody>
          {taskList.map((item, index) => {
            return (
              <TaskListItem
                key={item.id}
                name={item.name}
                isDone={item.isDone}
                onCheck={() => handleIsDone(index)}
                onDelete={() => handleDeleteTask(index)}
              />
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default TaskListPage;
