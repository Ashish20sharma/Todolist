import { Box, Button, Card, CardBody, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { ContextState } from '../context/Contectprovider'

export default function Todolist() {
    const {todoList,setTodoList}=ContextState()
    // console.log(todolist)
    const handleDelete=(item)=>{
         let filter=todoList.filter((elem)=>{
            return item!==elem;
         })
         setTodoList(filter);
    }
    return (
        <Card width="50%" mt={8} bg="#444444" color="white" fontFamily="sans-serif">
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    {todoList.length>0?todoList.map((item)=>{
                        return <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Heading size='xs' textTransform='capitalize'>
                                {item}
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                View a summary of all your clients over the last month.
                            </Text>
                        </Box>
                        <Box gap={3} display="flex">
                            <Button color="white" bg="blue" _hover="none">Edit</Button>
                            <Button color="white" bg="red" _hover="none" onClick={()=>handleDelete(item)}>Delete</Button>
                        </Box>
                    </Box>
                    }):<h1 style={{textAlign:"center",fontSize:"20px"}} >Add Todo</h1>}

                </Stack>
            </CardBody>
        </Card>
    )
}
