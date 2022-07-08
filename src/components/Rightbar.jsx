import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box 
    flex={2} p={2} 
    sx={{display:{xs:"none", sm:"block"}}}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100} mb={1}>Online Friends</Typography>
        <AvatarGroup max={8}>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gh2o25reFKIFBplALOC5DV0ssXpCzpMUUw&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2020/04/13/17/56/person-5039551_960_720.jpg" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jf2lVWby5x-_6BhIp-J1VRQrtPf62p7XoA&usqp=CAU" />
          <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51aI6YDGDyY2vgeXZL6F3qRUqXnH3DsHjbg&usqp=CAU" />
          <Avatar alt="Trevor A" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9a47f57F9wHSfAwr6cCV1QPsTIdN4oK13Q&usqp=CAU" />
          <Avatar alt="Trevor H" src="" />
          <Avatar alt="Trevor I" src="https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068_960_720.jpg" />
          <Avatar alt="Trevor J" src="" />
          <Avatar alt="Trevor K" src="" />
          <Avatar alt="Trevor L" src="" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={4} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5} loading="lazy" >
          <ImageListItem>
            <img src='https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg' alt="#"/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://cdn.pixabay.com/photo/2019/11/07/08/40/puppy-4608266_960_720.jpg'alt="#"/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://cdn.pixabay.com/photo/2017/08/07/18/57/dog-2606759_960_720.jpg'alt="#"/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg'alt="#"/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://cdn.pixabay.com/photo/2017/12/29/10/23/nature-3047194_960_720.jpg' alt="#"/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_960_720.jpg' alt="#"/>
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={100} mt={4}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gh2o25reFKIFBplALOC5DV0ssXpCzpMUUw&usqp=CAU" />
            </ListItemAvatar>
            <ListItemText
              primary="Alfred Ken"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jf2lVWby5x-_6BhIp-J1VRQrtPf62p7XoA&usqp=CAU" />
            </ListItemAvatar>
            <ListItemText
              primary="George Doe"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9a47f57F9wHSfAwr6cCV1QPsTIdN4oK13Q&usqp=CAU" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar