import { TaskRow } from "./TaskRow"
export  const TaskTable =({tasks,showCompleted = false,toggleTask})=>{
  
  const taskTableRows = (doneValue) =>
    tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

return (
<table className="table table-dark table-striped table-bordered border-secondary" >
        <thead>
        <tr className="table-primary">
        <th>Tasks</th>
        </tr>
        </thead>
        <tbody>
        {taskTableRows(showCompleted)}
      
        </tbody>
      </table>
)
}