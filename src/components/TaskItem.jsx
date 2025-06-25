import { FaCircleCheck, FaTrashCan } from "react-icons/fa6";

function TaskItem({ task, onMarkTaskAsComplete, onDelete }) {
	return (
		<li
			className={`flex items-center justify-between border p-2 rounded-md ${
				task.completed && "line-through"
			}`}
		>
			<p>{task.taskName}</p>
			<div className="flex items-center gap-3 text-xl">
				<button
					className="text-green-400 cursor-pointer"
					onClick={() => onMarkTaskAsComplete(task.taskId)}
				>
					<FaCircleCheck />
				</button>
				<button
					className="text-red-500 cursor-pointer"
					onClick={() => onDelete(task.taskId)}
				>
					<FaTrashCan />
				</button>
			</div>
		</li>
	);
}

export default TaskItem;
