import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CakeIcon from '@mui/icons-material/Cake';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import main from "../main.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';






const UsersList = ({ users, userSelect,  openModal1, deleteUser }) => {
    const hasData = users.length > 0;

const edit = (user) =>{
    userSelect(user)
    openModal1()

}



    return (


        <Grid container spacing={2}>

            {hasData ? (
                users.map((user) => {
                    return <Grid item md={4} sm={6} xs={12} key={user.id}>
                        <Card sx={{ minWidth: 275, boxShadow: 4 }}>
                            <CardContent>
                                <Typography display="flex" flex-flexDirection="row" justifyContent="space-between" sx={{ fontSize: 18, marginBottom: "1.5rem" }} color="#0093AB" gutterBottom>

                                    <span>User Data </span>

                                    <divs>
                                    <button className="edit-button" onClick={() => edit(user)}><EditIcon position="start" fontSize="small" sx={{  margin:  "1px", color: 'gray' }}></EditIcon> </button>

                                    <button className="delete-button" onClick={() => deleteUser(user.id)} ><DeleteIcon position="start" fontSize="small" sx={{  color: 'white', margin: "1px" }}></DeleteIcon></button>

                                    </divs>
                                   

                                </Typography>

                                <Typography component="div" noWrap sx={{ my: 1.5, color: 'black', fontSize: '20px' }}>
                                    <PersonIcon position="start" sx={{ my: -0.5, mx: 1, color: 'gray' }}> </PersonIcon>
                                    {`${user.first_name} ${user.last_name}`}
                                </Typography>

                                <Typography noWrap sx={{ my: 1.5, color: 'black', fontSize: '18px' }}>
                                    <EmailIcon position="start" sx={{ my: -0.8, mx: 1, color: 'gray' }}> </EmailIcon>
                                    {user.email}
                                </Typography>

                                <Typography noWrap sx={{ my: 1.5, color: 'black', fontSize: '18px' }}>
                                    <KeyIcon position="start" sx={{ my: -0.5, mx: 1, color: 'gray' }}> </KeyIcon>
                                    {user.password}
                                </Typography>

                                <Typography noWrap sx={{ my: 1.5, color: 'black', fontSize: '18px' }}>
                                    <CakeIcon position="start" sx={{ my: -0.5, mx: 1, color: 'gray' }}> </CakeIcon>
                                    {user.birthday}
                                </Typography>

                                
                            </CardContent>
                        </Card>
                    </Grid>
                })
            )
                :
                (
                    <Typography variant="h5" color="GrayText" sx={{ ml: 3, mt: 2 }}>
                        No data
                    </Typography>
                )

            }



        </Grid>

    );
};

export default UsersList;