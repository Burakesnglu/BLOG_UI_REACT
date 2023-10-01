import React from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

import environment from '../../../../environment/environment'

export default function CreateTag() {
    const [open, setOpen] = React.useState(false);

    const securityCode = environment.securityCode

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createTag = (event) => {
        debugger
        const data = new FormData(event.currentTarget);
        const formData = {
            name: data.get('name'),
            description: data.get('description'),
        };

        const config = {
            headers: {
                'security-code': securityCode,
            }
        };

        axios.post(apiUrl + 'v1/saveTag', formData, config)
            .then(response => {
                console.log(response)
                let body = response.data
                switch (body.code) {
                    case 1:
                        console.log(body)
                        break;
                    case -1:
                        console.log('error')
                        break;

                    default:
                        break;
                }
                setOpen(false);

            })
            .catch(error => {
                console.error(error);
            });

    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Tag
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Tag</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText> */}
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Tag"
                            name="name"
                            autoComplete="Tag"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="description"
                            label="Description"
                            name="description"
                            autoComplete="Description"
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={createTag}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
