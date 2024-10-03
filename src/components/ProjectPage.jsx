
import Button from "./Button"
import Tasks from "./Tasks"

const ProjectPage= function({project, onProjectDelete, addTask, deleteTask, tasks}){


    //console.log(project.tasks)
    const formattedDueDate = new Date(project.dueDate).toLocaleDateString('en-GB',{
        year: 'numeric',
        month: 'short',
        day:'numeric'
    })



    // function handleAddTask(){
    //     setTasks([...tasks,newTask.current.value])
    //     newTask.current.value=''
    // }
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <Button caption="Delete" onClick={onProjectDelete}>
                        Delete
                    </Button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDueDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks projectId={project.id} onDelete={deleteTask} onAdd={addTask} tasks={tasks} ></Tasks>
        </div>
    )
}

export default ProjectPage