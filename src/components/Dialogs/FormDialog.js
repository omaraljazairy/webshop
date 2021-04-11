import React, {useState} from 'react';
import { Dialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import { Button } from 'semantic-ui-react';

const FormDialog = (props) => {

    const [showDialog, setShowDialog] = useState(props.show);
    console.log("props show ", props.show);

    return (
        <Dialog open={showDialog} onClose={() => setShowDialog(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Change Email Address</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Provide a new email address and Submit. 
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email"
                    type="email"
                    value="omar@fedal.nl"
                    fullWidth
                    // onChange={event => this.handleEmailChange(event.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="VerificationCode"
                    type="text"
                    value="some code"
                    fullWidth
                    // onChange={event => this.setState({verificationCode: event.target.value})}
                />
            </DialogContent>
            <DialogActions>
                    <Button onClick={() => console.log('save')} color="blue">
                    Save
                    </Button>
                <Button onClick={() => setShowDialog(false)} color="red">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default FormDialog;