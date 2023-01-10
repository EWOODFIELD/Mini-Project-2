import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import DragonPicture from './SitePicture';
import { Link } from 'react-router-dom';
import HomeImage from './HomeImage';

export default function Home() {
//get the plants




  return (
    <div>
        <h1>This is the home page</h1>
        <DragonPicture />
        <br></br>
        <HomeImage />
    </div>
  )
}