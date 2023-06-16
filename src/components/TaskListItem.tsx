import { memo } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

type TaskListItemProps = {
  name: string;
  isDone: boolean;
  onCheck: () => void;
  onDelete: () => void;
};

const TaskListItem = (props: TaskListItemProps) => {
  const { name, isDone, onCheck, onDelete } = props;

  return (
    <TableRow selected={isDone}>
      <TableCell>
        <Checkbox checked={isDone} onClick={onCheck} />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <Button variant="outlined" onClick={onDelete}>
          Delete task
        </Button>
      </TableCell>
    </TableRow>
  );
};

const TaskListItemMemo = memo(TaskListItem);

export default TaskListItemMemo;
