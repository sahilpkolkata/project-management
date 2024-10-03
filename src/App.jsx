
import AddProject from "./components/AddProject";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import { useState, useRef } from "react";
import ProjectPage from "./components/ProjectPage";

function App() {

  
  
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  /// Project Methods

  function handleStartAddProject(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId: null
      }
    }
    )
  }

  function handleAddProject(projectData){
    setProjectState(prevState=>{
      const projectId = Math.random()+1
      const newProject = {
        ...projectData,
        id: projectId
      }
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects : [...prevState.projects,newProject ]
      }
    })
  }

  

  function handleCancelAddProject(){
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleProjectSelect(projectId){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:projectId
      }
    })
    
  }


  function handleProjectDelete(){
    setProjectState(prevState=>{
      const  newPojects = prevState.projects.filter(project=>project.id !== prevState.selectedProjectId)

      return{
        ...prevState,
        projects:newPojects,
        selectedProjectId: undefined
      }
    })
  }

  //Project Task Methods

  function handleAddTasks(text){
    
    setProjectState(prevState=>{
      const taskId = Math.random()

      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedProjectId
      }
      
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })

  }

  function handleDeleteTasks(taskId){
    setProjectState(prevState=>{
      const updatedTasks = prevState.tasks.filter(task=> task.id !== taskId)
      return{
        ...prevState,
        tasks : updatedTasks
      }
    })
  }

  //console.log(projectState)

  const foundProject = projectState.projects.find(project=> project.id===projectState.selectedProjectId)

  let content =  (<ProjectPage 
                  tasks={projectState.tasks} 
                  addTask={handleAddTasks} 
                  deleteTask={handleDeleteTasks}
                  onProjectDelete={handleProjectDelete} 
                  project={foundProject}/>)

  if(projectState.selectedProjectId===null){
    content = <AddProject cancelProject={handleCancelAddProject} addingProject={handleAddProject} />
  }
  else if(projectState.selectedProjectId===undefined){
    content = <Homepage onAddingProject={handleStartAddProject} />
  }
  

  return (
    <main className="h-screen my-8 flex gap-8">
     <Sidebar onProjectSelect={handleProjectSelect} 
              allProjects={projectState.projects} 
              onAddingProject={handleStartAddProject}
              projectId={projectState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
