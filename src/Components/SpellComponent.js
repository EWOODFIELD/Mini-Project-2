import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DragonPicture from "./SitePicture";
import SpellImage from "../icon/D&D Spell Image.png";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function SpellComponent({ spellURL, spellName, spellDesc }) {
  //get the plants
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const DDAPI = `https://www.dnd5eapi.co${spellURL}`;

  useEffect(() => {
    axios
      .get(DDAPI)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const renderDescription = (description) => {
    if (description && description.length > 0) {
      let descComponents = [<b>Description : </b>];
      for (let i = 0; i < description.length; i++) {
        descComponents.push(<p key={i}>{description[i]}</p>);
      }
      return descComponents;
    }
    return <p>No Description Available</p>;
  };

  return (
    <Grid item key={spellName} xs={12} sm={4} md={3}>
    <Card sx={{ maxWidth: 345, margin: 3, maxHeight: 700, minHeight: 700, display: 'flex', flexDirection: 'column'}} elevation={5}>
      <CardMedia component="img" image={SpellImage} alt="avatar" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <a href={DDAPI}>
            <h3 href={DDAPI}>{spellName}</h3>
          </a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.desc}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  );
  {/* // <div>
  // <img class="my-card-image" src={SpellImage}></img>
  // <a href={DDAPI}>
  // <h3 href={DDAPI}>{spellName}</h3>
  // </a>
  // {renderDescription(data.desc)}
  // </div> */}
}
