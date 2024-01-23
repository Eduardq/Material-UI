import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    marginBottom:"20px"
})
const Add = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)}
            title="Delete" 
            sx={{ position:"fixed", bottom: 20, 
            left:{xs:"calc(45%)" ,md:30},}}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        </Tooltip>
        <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
    <Typography variant='h6' color="gray" textAlign="center">
        Create post 
    </Typography>
    <UserBox gap={1}>
        <Avatar src="/static/images/avatar/4.jpg"
        sx={{width:30,height:30}}/>
        <Typography>
            John Doe
        </Typography>
    </UserBox>
    <TextField
    sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What s up?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions/>
            <Image color="secondary "/>
            <VideoCameraBack color="success" />
            <PersonAdd color="error" /> 
        </Stack>
        <ButtonGroup variant="contained"
        aria-labe="outlined primary button group"
        fullWidth>
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange /></Button>
        </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add