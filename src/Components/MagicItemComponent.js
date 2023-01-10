import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import DragonPicture from './SitePicture';
import MagicItemImage from '../icon/D&D Magic Item Image.png';
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function MagicItemComponent({magicItemURL, magicItemName}) {
//get the plants
const [magicItemData, setMagicItemData] = useState({});
const [loading, setLoading] = useState(true);
const DDAPI=`https://www.dnd5eapi.co${magicItemURL}`
   
useEffect(()=> {
    
    
    axios.get(DDAPI)
    .then(response=> {
      setMagicItemData(response.data);
      setLoading(false)
      console.log(response);
    })
    .catch(error => {console.log(error)})
    },[])

    if(loading){
      return(<p>Loading...</p>)
    }

    const renderDescription = (description) => {
      if(description && description.length > 0){
        let descComponents=[<b>Description : </b>]
        for(let i=0 ; i<description.length ; i++){
          descComponents.push(
            <p key={i}>{description[i]}</p>
          )
        }
        return descComponents;
      } 
      return(<p>No Description Available</p>)
    }

  return (
    // <div>
    //     <img class="my-card-image" src={MagicItemImage}></img>
    //     <a href={DDAPI}>
    //     <h3 href={DDAPI}><u>{magicItemName}</u></h3>
    //     </a>
    //     {renderDescription(magicItemData.desc)}

    // </div>
        <Grid item key={magicItemName} xs={12} sm={4} md={3}>
        <Card sx={{ maxWidth: 345, margin: 3, maxHeight: 700, minHeight: 700, display: 'flex', flexDirection: 'column'}} elevation={5}>
          <CardMedia component="img" image={MagicItemImage} alt="avatar" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <a href={DDAPI}>
                <h3 href={DDAPI}>{magicItemName}</h3>
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {magicItemData.desc}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      );
}

