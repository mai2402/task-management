
import { useDispatch, useSelector } from "react-redux"
import { editTask, selectTaskById } from "../features/taskslice"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { yupResolver } from "@hookform/resolvers/yup";
import taskYupValidation from "../helpers/taskYupValidation"


function useEditTask({id}) {
    const dispatch = useDispatch()
   
    const task = useSelector(selectTaskById(Number(id)))

    const {register,handleSubmit,formState:{errors},reset }= useForm({
        defaultValues: {
        image:task?.image || "",
        title: task?.title || "",
        description: task?.description || "",
        priority: task?.priority || "",
        state: task?.state || "",
    },
    resolver : yupResolver(taskYupValidation())
})

       useEffect(()=>{
          if(task){
            reset({
                image: task.image || "",
                title: task.title || "",
                description: task.description || "",
                priority: task.priority || "",
                state: task.state || "",
            });
          }
       },[task])

       function formSubmit(data,navigate){
        
        if (data.image && data.image.length >0){
          const file = data.image[0];
          const reader = new FileReader();

          reader.onloadend=()=>{
             const updatedTask ={
                ...data,
                image :reader.result,
             }
          
          dispatch(editTask({id:Number(id), updatedTask: updatedTask}))
        }  
             reader.readAsDataURL(file);
    } else {
        
        dispatch(editTask({id:Number(id), updatedTask: data}))
    }
    navigate("/tasks")
}
return {
    register,formSubmit,errors,handleSubmit
}
}

export default useEditTask
