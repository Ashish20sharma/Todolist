import { Box, Button, Card, CardBody, Heading, Stack, StackDivider } from '@chakra-ui/react'
import React from 'react'
import { ContextState } from '../context/Contectprovider'

export default function Todolist() {
    const {setTodo,todoList,setTodoList,setToggleSubmit,setEdit}=ContextState()
    const handleDelete=(id)=>{
         let filter=todoList.filter((elem)=>{
            return id!==elem.id;
         })
         setTodoList(filter);
    }

    const handleEdit=(item)=>{
        let editItem=todoList.find((elem)=>{
            return item.id===elem.id
        })
        setToggleSubmit(false);
        setTodo(editItem.name);
        setEdit(editItem.id);
        console.log(editItem)
    }
    return (
        <Card width="50%" mt={8} bg="#444444" color="white" fontFamily="sans-serif">
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    {todoList.length>0?todoList.map((item)=>{
                        return <Box key={item.id} display="flex" justifyContent="space-between" alignItems="center" >
                        <Box>
                            <Heading  size='xs' textTransform='capitalize'>
                                {item.name}
                            </Heading>
                        </Box>
                        <Box gap={3} display="flex">
                            <Button color="white" bg="blue" _hover="none" onClick={()=>handleEdit(item)}>Edit</Button>
                            <Button color="white" bg="red" _hover="none" onClick={()=>handleDelete(item.id)}>Delete</Button>
                        </Box>
                    </Box>
                    }):<h1 style={{textAlign:"center",fontSize:"20px"}} >Add Todo</h1>}

                </Stack>
            </CardBody>
        </Card>
    )
}
