import React from "react"
import { useState } from "react"

const CreatorTask = ({createNewTask}) =>{
      
    const [newTask,setNewTask] = useState("")
       
    const  handleSubmit = (e) =>{
        if (newTask.trim() === "") {
            alert("Please enter a task name");
            return;
          }
        e.preventDefault();
        createNewTask(newTask);    
        setNewTask("");
    }



    return (
        <form onSubmit={handleSubmit} className="my-2 row">
            <div className="col-9">
            <input
            type = "text"
            placeholder="Enter a task"
            value = {newTask}
            onChange ={(e)=>setNewTask(e.target.value)}
            className="form-control"
            autoFocus
            />
            </div>
            <div className="col-3  p-0 d-flex align-items-center">
            <button className="btn btn-primary btn-sm" type="submit">Save task!</button>
            </div>
           
        </form>
    )
}

export default CreatorTask