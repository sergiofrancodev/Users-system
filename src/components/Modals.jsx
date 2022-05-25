import React from 'react';
import { Modal } from './Modal';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";


const Modals = ({upUser, userSelected, deselectUser, isOpenModal1, openModal1, closeModal1}) => {


  
  const[name, setName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[birthday, setBirthday] = useState("");
  const[password, setPassword] = useState("");

  useEffect(() =>{

    if(userSelected !== null){
      setName(userSelected.first_name);
      setLastName(userSelected.last_name);
      setEmail(userSelected.email);
      setBirthday(userSelected.birthday);
      setPassword(userSelected.password);
    }else{

      setName("");
      setLastName("");
      setEmail("");
      setBirthday("'");
      setPassword("");

    }

  },[userSelected]);

  const submit = e =>{
    e.preventDefault();

    const user = {

      first_name: name,
      last_name: lastName,
      password: password,
      email: email,
      birthday: birthday 
    };

    if(userSelected !== null){

      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user).then(() =>{
        upUser();
        deselectUser();          

      })
    }else{
      axios.post("https://users-crud1.herokuapp.com/users/", user)
      .then(() => upUser())
      .catch((error) => console.log(error.response));
    } 
    closeModal1()
  }



  const [values, setValues] = useState({
   
    showPassword: false,
  });

  

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  

  return (
    <div>

      <Button 
      
      onClick={openModal1} variant="contained"
        sx={{
          background: "#FFD124", color: "black", ':hover': {
            bgcolor: '#FFD124',
            color: '#2F2F2F',
          }, boxShadow: "5 #fff",
        }}>
          
          <AddIcon></AddIcon> Add New User </Button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1} >

      <FormControl onSubmit={submit} sx={{ display: 'flex', flexWrap: 'wrap' , p: 4}}>
      

      <FormControl sx={{ m: 1, width: '100%'}} variant="outlined">
          <InputLabel htmlFor="first_name">Name</InputLabel>
          <OutlinedInput
            id="first_name"
            type="text"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
           
          />
          </FormControl>


          <FormControl sx={{ m: 1, width: '100%'}} variant="outlined">
          <InputLabel htmlFor="last_name">Last Name</InputLabel>
          <OutlinedInput
            id="last_name"
            type="text"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />

        </FormControl>

        <FormControl sx={{ m: 1, width: '100%'}} variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            type="text"
            label="your@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

        </FormControl>

        <FormControl sx={{ m: 1, width: '100%'}} variant="outlined">

          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>        
        <FormControl sx={{ m: 1 }} variant="outlined">
          <h3>Birthday</h3>
          <InputLabel htmlFor="birthday"></InputLabel>
          <OutlinedInput
          type="date"
            id="birthday"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            
          />

        </FormControl>

{userSelected === null && (

<FormControl sx={{ my: 2, width: '50%', textAlign: 'center', alignSelf: 'center'}}>
<Button variant='contained' type="submit" onClick={submit}  sx={{my: 1}}><AddIcon sx={{mx: 1}}></AddIcon>Create new user</Button>
</FormControl>

)}
       


{userSelected !== null && (

<>
<FormControl sx={{ my: 2, width: '50%', textAlign: 'center', alignSelf: 'center'}}>
<Button variant='contained' type="submit" onClick={submit}  sx={{my: 1}}><AddIcon sx={{mx: 1}}></AddIcon>Update User</Button>
</FormControl>

        <Button sx={{background: "white"}} onClick={deselectUser}>
          Clear Form
        </Button>
        </>
      )}
    </FormControl>

      </Modal>
    </div>
  );
};

export default Modals;