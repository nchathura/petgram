import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AddCircle, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Box } from '@mui/system';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    mb: "20px"
})

export const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip onClick={e=>setOpen(true)}
    title="Add"
    sx={{position:"fixed", 
    bottom:20,
    left:{xs: "calc(45%)", md: 30},
    }}>
    <Fab color="primary" aria-label="add">
       <AddCircle/>
    </Fab>
    </Tooltip>
    
    <StyledModal
    open={open}
    onClose={e=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box width={500} height={350} bgcolor={"background.default"} color={"text.primary"} borderRadius={5} p={3}>
        <Typography variant='h6' color="gray" textAlign="center">
            Create Post
        </Typography>
        <UserBox mb={4.5}>
            <Avatar
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gh2o25reFKIFBplALOC5DV0ssXpCzpMUUw&usqp=CAU'
                sx={{width:30, height:30}}
            >
            </Avatar>
            <Typography fontWeight={500} variant="span">
                Alfred Ken
            </Typography>
        </UserBox>
        <TextField 
        sx={{width: "100%"}}
          id="standard-multiline-static"
          multiline
          rows={5}
          placeholder="What's on your mind?.."
          variant="standard"
        />

        <Stack gap={1} direction="row" mt={6} mb={1}>
          <EmojiEmotions color='primary'/>
          <Image color='secondary'/>
          <VideoCameraBack color='success'/>
          <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup 
        fullWidth
        variant="contained" 
        aria-label="outlined primary button group"
        >
        <Button>
            Post
        </Button>
        <Button sx={{width:"100px"}}>
            <DateRange/>
        </Button>
        </ButtonGroup>
    </Box>
    </StyledModal>
    </>
  )
}

export default Add;