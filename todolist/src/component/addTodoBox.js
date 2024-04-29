import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { ContextState } from '../context/Contectprovider'

const AddTodoBox = () => {
    const {todo,setTodo,todoList,setTodoList,toggleSubmit,setToggleSubmit,edit} =ContextState()
        const handleTodo=()=>{
            let allTodo={id:Date.now().toString(),name:todo}
            setTodoList([...todoList,allTodo])
            setTodo('')
        }

        const handleEdit=()=>{
            setTodoList(
                todoList.map((item)=>{
                    if(item.id===edit){
                        return {...item,name:todo}
                    }
                    return item;
                })
            )
            setToggleSubmit(true);
            setTodo('');
        }
    return (
        <>
        <Box width="50%" mt={5} p={6} bg="#444444" display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-evenly" rounded="5px">
            <Box spacing="3" display="flex" gap="10px">
                <Box >
                    {toggleSubmit?<><Text pb={2}>Write Todo</Text>
                    <Input color="black" onInput={(e)=>setTodo(e.target.value)} value={todo} htmlSize={20} width='20vw' bgColor="white" placeholder='Enter the Todo name' /></>:<><Text pb={2}>Edit Todo</Text>
                    <Input color="black" onInput={(e)=>setTodo(e.target.value)} value={todo} htmlSize={20} width='20vw' bgColor="white" placeholder='Edit the Todo' /></>}
                </Box>
            </Box>
            {toggleSubmit?<Button onClick={()=>handleTodo()} mt={7} colorScheme='blue'>Add Todo</Button>:<Button onClick={()=>handleEdit()} mt={7} colorScheme='blue'  >Edit</Button>}
        </Box>
        </>
    )
}

export default AddTodoBox
