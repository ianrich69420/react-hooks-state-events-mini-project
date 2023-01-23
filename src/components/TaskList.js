
import React from "react";
import Task from "./Task";


export default function TaskList({tasks, deleteTask , click}) {
  const tasksList = tasks.map((task, id) =>
  <Task
    key={id}
    task={task}
    text={task.text}
    category={task.category}
    click={click}
  />)
  return (
    <div className="tasks">{tasksList}
    </div>
  );
}