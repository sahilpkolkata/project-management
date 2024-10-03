import AddProject from "./AddProject"
import Button from "./Button"

export default function Sidebar({projectId, onAddingProject,allProjects, onProjectSelect}){
    
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
            <Button onClick={onAddingProject}>+ Add Project</Button>
            </div>
            
            <ul className="mt-8">
                {allProjects.map(project=>{
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                    
                    if(project.id === projectId){
                        cssClasses += " bg-stone-800 text-stone-200"
                    }else{
                        cssClasses += " text-stone-400"
                    }
                    return(
                        <li key={project.id}>
                            <button onClick={()=>onProjectSelect(project.id)} 
                                className={cssClasses}>
                            {project.title}
                            </button>   
                        </li>
                    )
                })}
            </ul>
           
        </aside>
    )
}