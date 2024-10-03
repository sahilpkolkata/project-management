import { useState, useRef } from "react"
import Button from "./Button"
import Modal from "./Modal"


export default function NewTask({onAdd}){
    const taskError = useRef()
    const [enteredTask, setEnteredTask] = useState('')

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(){
        if(enteredTask.trim() === ''){
            taskError.current.open()
            return
        }
        onAdd(enteredTask)
        setEnteredTask('')
    }


    
    return(
        
        <div className="flex items-center gap-4">
            <Modal buttonCaption="Okay" ref={taskError}>
                <h2 className='text-xl font-bold text-stone-700 mx-8 my-4'>Invalid Input</h2> 
                <p className='text-violet-600 mb-4 mx-8'>Please enter a proper task!!</p>
            </Modal>
            <input className="w-64 px-1 py-2 rounded-md bg-stone-200 focus:outline-none focus:ring focus:ring-violet-500" 
                    value={enteredTask}
                    onChange={handleChange} 
                    type="text" />
            <Button caption="addTask" onClick={handleClick}>AddTask</Button>
        </div>
        
    )
}