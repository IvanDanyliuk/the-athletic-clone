import React, { useState } from 'react';
import { Alert, Box, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useForm } from 'react-hook-form';
import { TextInput } from '../../../ui/';


interface IUpdatePasswordModalProps {
  onUpdate: (value: string) => void
}

interface IPaswwordsData {
  current: string,
  new: string, 
  confirmNew: string
}

const UpdatePasswordModal: React.FC<IUpdatePasswordModalProps> = ({ onUpdate }) => {
  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm<IPaswwordsData>();

  const [openForm, setOpenForm] = useState<boolean>(false);

  const handleSetPassword = (data: IPaswwordsData) => {
    if(data.new === data.confirmNew) {
      onUpdate(data.new);
      reset();
      setOpenForm(false);
    } else {
      setError('confirmNew', { type: 'custom', message: 'Passwords don\'t match' })
    }
  };

  const handleClickOpen = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    reset();
    setOpenForm(false);
  };

  return (
    <Box>
      <Button onClick={handleClickOpen}>Update Password</Button>
      <Dialog open={openForm}>
        <DialogTitle>Update Password</DialogTitle>
        <DialogContent>
          <Box data-testid='updatePasswordForm' component='form' onSubmit={handleSubmit(handleSetPassword)}>
            <TextInput 
              name='current' 
              label='Current Password'
              type='password' 
              register={register}
              registerOptions={{ required: 'Enter your current password' }}
              error={errors.current}
            />
            <TextInput 
              name='new' 
              label='New Password'
              type='password' 
              register={register}
              registerOptions={{ required: 'Enter your new password' }}
              error={errors.current}
            />
            <TextInput 
              name='confirmNew' 
              label='Confirm New Password'
              type='password' 
              register={register}
              registerOptions={{ required: 'Confirm your new password',  }}
              error={errors.current}
            />
            {errors.confirmNew && (
              <Alert severity='warning'>
                {errors.confirmNew.message}
              </Alert>
            )}
            <Button type='button' onClick={handleClose}>Cancel</Button>
            <Button type='submit'>Update</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default UpdatePasswordModal;