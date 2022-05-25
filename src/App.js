import { CircularProgress, Typography, Box, Grid, ListItem, } from '@mui/material';
import { useEffect, useState } from 'react';
import UsersList from './components/UsersList';
import Layout from './Layout'
import { getUsers } from './components/services/Users';
import Modals from './components/Modals';
import axios from 'axios';
import { useModal } from "./components/hooks/useModal"



function App() {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userSelected, setUserSelected] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    getUsers().then((res) => {
      setUsers(res.data);
      setIsLoading(false);
    });

  }, []);

  const upUser = () => {

    axios.get("https://users-crud1.herokuapp.com/users/").then((res) => setUsers(res.data))
  }

  const deleteUser = (id) => {

    if (window.confirm("Do you really want to delete?")) {

      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => upUser())}

  
    } 

  const userSelect = (user) => setUserSelected(user);

  const deselectUser = () => setUserSelected(null);

  console.log(users);

  return (
    <Layout>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="baseline"
        sx={{ py: 4 }}>

        <Grid item xs={12} md={8}>
          <ListItem> <Typography variant="h2" sx={{ fontWeight: 500, fontSize: '48px', color: '#FFF', textShadow: 1 }}>Users</Typography></ListItem>
        </Grid>

        <Grid item xs={12} md={4} sx={{ my: 5, }}>
          <ListItem>

            <Modals upUser={upUser} userSelected={userSelected} deselectUser={deselectUser} 
            isOpenModal1={isOpenModal1}
            openModal1 ={openModal1}
            closeModal1={closeModal1}
            

            />



          </ListItem>
        </Grid>


      </Grid>




      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
          <Typography variant='h3'>Loading...</Typography>
        </Box>)
        :
        (
          <UsersList users={users} userSelect={userSelect} closeModal1={closeModal1} openModal1={openModal1} deleteUser={deleteUser}/>
        )
      }
    </Layout>
  );
}

export default App;
