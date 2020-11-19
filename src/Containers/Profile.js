/* eslint-disable */
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import {  fade, makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper/Paper";

export default function Profile({...props}){
  // const classes = useStyles();
  // const history = useHistory();
  console.log(props);


  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [fabValue, setFabValue] = useState(0);
  const [searchedRecipe, setSearchedRecipe] = React.useState([]);
  const [searchTxt, setSearchTxt] = React.useState('')
  const getUserProfile = () => {

  }
  return(
    <Container style={{marginTop:'100px', marginBottom:'50px'}}>
      <Typography variant="h4" color="primary.contrastText">
        Welcome
      </Typography>
      <Typography variant="body1" color="textPrimary">
        {"You user name is " + props.params.info.username}
      </Typography>
      {/*<Typography variant="body1" color="textPrimary">*/}
      {/*  {"You email is" + props.params.info.email}*/}
      {/*</Typography>*/}
    </Container>
  )
}