import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DragonPicture from "./SitePicture";
// import { Link } from 'react-router-dom';
import SpellComponent from "./SpellComponent";
import Grid from '@mui/material/Grid'

export default function Spells() {
  //get the plants
  const [dand, setDand] = useState([]);
  const DDAPI = `https://www.dnd5eapi.co/api/spells`;

  useEffect(() => {
    axios
      .get(DDAPI)
      .then((response) => {
        setDand(response.data.results);
        console.log({ dand });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <DragonPicture />
      {/* <div>{dand.spells}</div> */}

      <Grid container spacing={2}>
        {dand[0]
          ? dand.map(
              (APIdata) => (
                <SpellComponent
                  spellName={APIdata.name}
                  spellURL={APIdata.url}
                  spellDesc={APIdata.desc}
                />
              )
              // {<SpellComponent/>}
            )
          : null}
      </Grid>

      {/* {dand[0] ? dand.map(APIdata => (
    <SpellComponent spellName={APIdata.name} spellURL={APIdata.url} spellDesc={APIdata.desc} />
  )
  // {<SpellComponent/>}
    ) : null} */}
    </div>
  );
}
