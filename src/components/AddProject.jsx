import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";



export default function AddProject({addingProject, cancelProject}){
    const modal = useRef()
    const dateError = useRef()
    const title = useRef("");
    const description = useRef("");
    const dueDate = useRef("");

    function handleSave(){
        const enteredTitle =  title.current.value;
        const enteredDescription =  description.current.value;
        const  enteredDueDate =  dueDate.current.value;

        const formatEnteredDate = new Date(enteredDueDate)
        const todaysDate = new Date()

        const invalidDueDate =  formatEnteredDate < todaysDate

        //console.log(invalidDueDate)
        
        // if((enteredTitle.length<4 || enteredDescription.length<10) &&  !validDueDate){
        //     alert("Please enter valid details");
        // }

        if(enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ){
            ///Error
            modal.current.open()
            return
        }
        else if(invalidDueDate){
            dateError.current.open()
            return
        }
    
            addingProject({
                title: enteredTitle,
                description: enteredDescription,
                dueDate : enteredDueDate
            })
     }
    
    
    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
           <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2> 
           <p className='text-red-600 mb-4'>Oops... looks like you forgot to enter a value.</p>
           <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for evey input field.</p>
        </Modal>
        <Modal ref={dateError} buttonCaption="Okay">
           <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Date</h2> 
           <p className='text-blue-600 mb-4'>Please make sure that the due date is after the current date.</p>
        </Modal>
         <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                   <button onClick={cancelProject} className="text-stone-800 hover:text-stone-950">Cancel</button> 
                </li>
                <li>
                   <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-600 text-stone-50 hover:bg-stone-950">Save</button> 
                </li>
                
            </menu>
            <div className="">
               <Input ref={title} label='Name' type='text' />
               <Input ref={description}  label='Description' textarea />
               <Input ref={dueDate} label='Due Date' type='date' />
            </div>
        </div>
        </>
       

    )
}