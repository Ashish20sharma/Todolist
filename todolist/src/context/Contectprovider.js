import React, { createContext, useContext, useState } from 'react'

const context=createContext();
export default function Contectprovider({children}) {
    const [todo,setTodo]=useState();
    const [description,setDescription]=useState();
    const [todoList,setTodoList]=useState([]);
  return (
    <context.Provider value={{todo,setTodo,description,setDescription,todoList,setTodoList}}>
      {children}
    </context.Provider>
  )
}
export  function ContextState(){
    return useContext(context);
}
