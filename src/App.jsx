import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";

function App() {
	const [taskName, setTaskName] = useState("");
	const [tasks, setTasks] = useState(
		() => JSON.parse(localStorage.getItem("tasks")) || []
	);

	// Store tasks in local storage
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const addTask = () => {
		if (!taskName.trim()) {
			alert("Please enter a task!");
			return;
		}

		const task = {
			taskId: crypto.randomUUID(),
			taskName: taskName.trim(),
			completed: false,
		};

		// Fix
		setTasks((prevTasks) => prevTasks.concat(task));
		setTaskName("");
	};

	const markTaskAsComplete = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.taskId === taskId ? { ...task, completed: true } : task
			)
		);
	};

	const deleteTask = (taskId) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.taskId !== taskId));
	};

	return (
		<main className="flex items-center justify-center min-h-dvh font-poppins mx-5 md:mx-0">
			<div className="border rounded-md w-[500px] p-5">
				<h1 className="mb-5 text-lg font-bold text-center">Todo List</h1>

				{/* Input */}
				<div className="flex items-center gap-2 mb-5">
					<input
						type="text"
						placeholder="Add task"
						className="w-full border p-2 rounded-sm"
						value={taskName}
						onChange={(e) => setTaskName(e.target.value)}
					/>
					<button
						className="bg-black text-white py-2 px-6 rounded-sm cursor-pointer"
						onClick={addTask}
					>
						Add
					</button>
				</div>

				{/* List */}
				{!tasks || tasks.length < 1 ? (
					<p className="text-center">You don&apos;t have any task, add now</p>
				) : (
					<Tasks
						tasks={tasks}
						onMarkTaskAsComplete={markTaskAsComplete}
						onDelete={deleteTask}
					/>
				)}
			</div>
		</main>
	);
}

export default App;
