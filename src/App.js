import { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CreatorTask from '../src/components/CreatorTask.jsx'
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import { Container } from './components/Container';
import { TaskBanner } from './components/TaskBanner';

function App() {

  const [userName, setUserName] = useState("Jesús Espinel");
  const [tasks,setTasks] = useState([
  ])
    const[showCompleted,setShowCompleted] = useState(false)

  function  createNewTask(taskName){
     if(!tasks.find(task => task.name === taskName )){
      setTasks([...tasks, {name:taskName, done:false}])
     }
    } 

    const toggleTask = (task) =>{
      setTasks(
      tasks.map(t=>(t.name === task.name)? {...t, done: !t.done}: t)
      ) 
    }

    const cleanTasks =() =>{
     setTasks(tasks.filter(task=>!task.done))
    }
    useEffect(()=>{
      let data = localStorage.getItem("tasks")
      if(data){
      setTasks(JSON.parse(data))
      }
    },[])

    useEffect(()=>{
     localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])

  return (
    <main className="bg-dark vh-100 text white">
      <TaskBanner  userName={userName} tasks={tasks}/>
     <Container>
      <CreatorTask createNewTask ={createNewTask}/>
      <TaskTable tasks={tasks}
       toggleTask={toggleTask}      
      />
      <VisibilityControl
      isChecked={showCompleted}
      setShowCompleted={(checked)=>setShowCompleted(checked)}
      cleanTasks={cleanTasks}
      description="Completed Tasks"

      />

      {
        showCompleted === true && (
          <TaskTable tasks={tasks}
       toggleTask={toggleTask}
       showCompleted={showCompleted}     
      />
       )}
        </Container>      
    </main>
  );
}
     


export default App;
