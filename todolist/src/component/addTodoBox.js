import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { ContextState } from '../context/Contectprovider'

const AddTodoBox = () => {
    const {todo,setTodo,todoList,setTodoList,description,setDescription} =ContextState()
        const handleTodo=()=>{
            
            setTodoList([...todoList,todo])
            setTodo('')
        }
    return (
        <>
        <Box width="50%" mt={5} p={6} bg="#444444" display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-evenly" rounded="5px">
            <Box spacing="3" display="flex" gap="10px">
                <Box >
                    <Text pb={2}>Name</Text>
                    <Input color="black" onInput={(e)=>setTodo(e.target.value)} value={todo} htmlSize={20} width='15vw' bgColor="white" placeholder='Enter the Todo name' />
                </Box>
                <Box>
                    <Text pb={2}>Description</Text>
                    <Input onInput={(e)=>setDescription(e.target.value)} value={description} color="black" htmlSize={20} width='15vw' bgColor="white" placeholder='Enter the Todo description' />
                </Box>
            </Box>
            <Button onClick={()=>handleTodo()} mt={7} colorScheme='blue'>Add Todo</Button>
        </Box>
        </>
    )
}

export default AddTodoBox
