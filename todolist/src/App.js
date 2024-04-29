import { Box, Text } from '@chakra-ui/react';
import './App.css';
import AddTodoBox from './component/addTodoBox';
import Todolist from './component/Todolist';
function App() {
  
  return (
    <>
      <Box bg="#333333" width="100%" height="100vh" color="white" display="flex" alignItems="center" justifyContent="center" flexDir="column">
        <Text fontFamily="sans-serif" fontSize="30px" fontWeight="600" >My Todos</Text>
        <AddTodoBox />
        <Todolist />
      </Box>
    </>
  );
}

export default App;
