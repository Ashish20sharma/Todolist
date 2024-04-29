import React, { createContext, useContext, useState } from 'react'

const context=createContext();
export default function Contectprovider({children}) {
    const [todo,setTodo]=useState();
    const [description,setDescription]=useState();
    const [todoList,setTodoList]=useState([]);
    const [toggleSubmit,setToggleSubmit]=useState(true);
    const [edit,setEdit]=useState(null)
  return (
    <context.Provider value={{todo,setTodo,description,setDescription,todoList,setTodoList,toggleSubmit,setToggleSubmit,edit,setEdit}}>
      {children}
    </context.Provider>
  )
}
export  function ContextState(){
    return useContext(context);
}
