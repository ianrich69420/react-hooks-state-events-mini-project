import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

 export default function App() {
	let tasks = TASKS;
  const [list, setList] = React.useState(tasks);
  const [deletedList, setDeleted] = React.useState(tasks);

  const categories = CATEGORIES;

  function deleted(task) {
    setList(prevVal => prevVal.filter((el) => (el !== task)));
    setDeleted(prevVal => prevVal.filter((el) => (el !== task)));
  }

  function selected(category) {
    categories.map(cat => {
      cat !== category ?
        document.querySelector(`.${cat}`).classList.remove("selected") :
        document.querySelector(`.${category}`).classList.add("selected");
      setList(() => deletedList.filter(task => category === "All" ? true : task.category === category));
    })
  }

  function onTaskFormSubmit(newObj) {
    setList(prevVal => {
      setDeleted(prevVal => [...prevVal, newObj])
      return [...prevVal, newObj]
    })
    return newObj;
  }

	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter categories={categories} click={selected} />
			<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
			<TaskList tasks={list} click={deleted} />
		</div>
	);
}
