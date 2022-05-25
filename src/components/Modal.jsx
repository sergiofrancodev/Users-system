import { Typography } from '@mui/material';
import React from 'react';
import "./Modal.css"
import CloseIcon from '@mui/icons-material/Close';

export const Modal = ({children, isOpen, closeModal}) => {
    
    return (
        <article className={`modal ${isOpen && "is-open"}`}>
            <div className='modal-container'>
                <Typography variant='h2' sx={{textAlign: 'center', fontWeight: 500, fontSize: '34px', color: '#424242'}} >ADD NEW USER</Typography>
       <button onClick={closeModal} className='modal-close'><CloseIcon sx={{color: 'red', fontSize: '38px'}}></CloseIcon></button>
              <br />
              {children}
            </div>
        </article>
    );
};

export default Modal;