/* eslint-disable */
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player";
import { useLocation } from 'react-router-dom';

import TagList from './TagList';
import IngredientList from './IngredientList';
// import UploadButton from './UploadButton';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import InputBase from "@material-ui/core/InputBase/InputBase";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme=>({
  card:{
    maxWidth: "700px",
    margin: "9px auto",
    marginTop:'100px',
    marginBottom:'50px'
  },
  content:{
    paddingTop: 0,
  },
  media: {
    height: theme.spacing(30),
    opacity: 0.5,
  },
  uploadBtn: {
    position: "absolute",
    zIndex: "1",
  },
  methodText: {
    width: "100%",
  },
  input: {
    margin: "0 6px",
    padding: "4px 0",
    color: "#000",
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function ExpendedRecipeCard ({ history }){
  const location = useLocation();
  const recipe = location.state.detail;

  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const attachment = recipe.attachment

  // if (!attachment && recipe.attachment) {
  //   attachment = recipe.attachment
  // }else if (attachment) {
  //   attachment = URL.createObjectURL(attachment);
  // }

  return(
    <Card className={classes.card} raised>
      {/*{isEditable &&*/}
      {/*  <div className={classes.uploadBtn}>*/}
      {/*    <UploadButton handleFileChange={handleFileChange}/>*/}
      {/*  </div>*/}
      {/*}*/}

      <CardMedia
        className={classes.media}
        image={attachment}
        title="Recipe Image"
      />
      <InputBase
        disabled={true}
        className={classes.input}
        name="title"
        value={recipe.title}
        placeholder="Name"
      />
      <br/>
      <TagList recipeData={recipe}/>
      <CardContent className={classes.content}>
        <Tabs centered value={tabValue} onChange={handleTabChange} className={classes.tabs}>
          <Tab label="Ingredients"/>
          <Tab label="Method"/>
          <Tab label="Video"/>
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <IngredientList recipeData={recipe}/>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <InputBase
            multiline
            value={recipe.instructions}
            className={classes.methodText}
            placeholder="Step"
          />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <ReactPlayer width="30ptx"
            url= {recipe.video}
          />
        </TabPanel>

      </CardContent>
    </Card>
  );
}
