import TaskItem from "./TaskItem";

function Tasks({ tasks, onMarkTaskAsComplete, onDelete }) {
	return (
		<ul className="space-y-2">
			{tasks.map((task, i) => (
				<TaskItem
					task={task}
					key={i}
					onMarkTaskAsComplete={onMarkTaskAsComplete}
					onDelete={onDelete}
				/>
			))}
		</ul>
	);
}

export default Tasks;
