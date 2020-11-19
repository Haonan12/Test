/* eslint-disable */
import { API } from "aws-amplify";
import recipes from '../Data/recipes.json';
import ingredients from '../Data/ingredients.json';
import menuData from '../Data/menu.json';
// import { appointmentData } from '../Data/data';
import axios from "axios";
import config from "./../config/config";

const colors = ['#cb6bb2','#56ca85','#1e90ff']
// const recipesToBeModified = getRecipeList();
const processRecipes = (recipes) => {
  if (!recipes) return null;
  for (let i = 0; i < recipes.length; i++) {
    recipes[i].id = recipes[i].recipeId;
    recipes[i].text = recipes[i].title;
    recipes[i].color = colors[Math.floor(Math.random() * Math.floor(3))]
  }
  console.log(recipes);
  return recipes;
}

const cfg = { headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*'}
}

const controller = (() => {
  return {
    getRecipeListBySearch: async keyword =>
      axios.get(config.server + '/search/' + keyword).then(response => {
        return response.data;
      }),
    getAllIngredients: async () =>
      axios.get(config.server + '/list/a').then(response => {
        return response.data;
      }),
    getRandomRecipe : async () =>
      axios.get(config.server + '/random').then(response => {
        console.log(response)
        return response.data;
      }),
    sendUserProfile : async (user) =>
      axios.put(config.server + '/profile',{user},cfg),
    signIn: async (username, password) =>
      axios.post(config.server + '/user/signin',{username, password}).then(response => {
        return response.data;
      }),
    signUp: async (username, password, email) => {
      console.log(username, password, email)
      axios.post(config.server + '/user/signup', {username, password, email}).then(response => {
        return response.data;
      })
    }
  }
})();

export default controller;