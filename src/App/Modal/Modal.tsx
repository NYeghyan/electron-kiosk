import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

    interface IProps {
        open : boolean
        onClose : (closeModal : boolean) => void
        processFile : () => void
    }


export default function BasicModal(props: IProps) {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = () => {setOpen(false), props.onClose(false)};


  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Are shu shure you want to process thes File
          </Typography>
          <Button variant="contained" style={{backgroundColor:"red"}} onClick={() => {props.processFile(); props.onClose(false)}}>Confirm</Button>
        </Box>
      </Modal>
    </div>
  );
}
