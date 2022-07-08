import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

export const Post = () => {
  return (
   
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar 
          sx={{ bgcolor: "red"}} 
          aria-label="avatar" 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gh2o25reFKIFBplALOC5DV0ssXpCzpMUUw&usqp=CAU' 
          loading="lazy" >
          </Avatar>
        }
        action={
          <IconButton 
          aria-label="settings">
            <MoreVert />
          </IconButton>
        }
          title="Alfred Ken"
          subheader="May 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://cdn.pixabay.com/photo/2017/08/07/18/57/dog-2606759_960_720.jpg"
        alt="pets"
        loading="lazy" 
      />
      <CardContent>
            <Typography variant="body2" color="text.secondary">
            Nullam sollicitudin metus urna, eget laoreet sapien porttitor vitae. Aliquam urna lacus, molestie non ligula eu, convallis volutpat nisi. Suspendisse vestibulum velit ac nunc hendrerit ullamcorper. 
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
            </IconButton>
            <IconButton aria-label="share">
            <Share/>
            </IconButton>
        </CardActions>
        </Card>

  )
}
