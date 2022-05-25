import React from "react";
import { Container, Box } from "@mui/system";
import NavBar from "./NavBar"

export default function index({children}){
    return(
        <Box>
            <NavBar />
            
            <Container>{children}</Container>
        </Box>
    );
}