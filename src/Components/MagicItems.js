import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import DragonPicture from './SitePicture';
// import { Link } from 'react-router-dom';
import MagicItemComponent from './MagicItemComponent';
import Grid from '@mui/material/Grid'

export default function MagicItemProperties() {
//get the plants
const [dand, setDand] = useState([]);
const DDAPI=`https://www.dnd5eapi.co/api/magic-items`
   
useEffect(()=> {
    
    
    axios.get(DDAPI)
    .then(response=> {setDand(response.data.results); console.log({dand})})
    .catch(error => {console.log(error)})
    },[]) //Empty array ensures the loading only happens once, if you put something in this array it will infinitely loop which is bad 



  return (
    <div>
        <DragonPicture />
        <Grid container spacing={2}>
        {/* <div>{dand.spells}</div> */}
        {dand[0] ? dand.map(APIdata => (
        <MagicItemComponent magicItemName={APIdata.name} magicItemURL={APIdata.url} />
    )
) : null}
</Grid>
    </div>
  )
}