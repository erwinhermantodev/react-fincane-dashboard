import React from "react";
import styles from "./TaskList.module.css";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC = () => {
  return (
    <div className={styles.taskList}>
      <h2>Tasks To Do</h2>
      <ul>
        <li>Pay Electricity Bill</li>
        <li>Renew Gym Membership</li>
        <li>Book Dentist Appointment</li>
      </ul>
    </div>
  );
};

export default TaskList;
