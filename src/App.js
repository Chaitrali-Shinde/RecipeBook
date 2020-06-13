import React, {useEffect, useState} from 'react';
import './App.css';
import Recipes from './Recipes';
import Axios from 'axios';

const App= ()=>{

  const application_ID= "fc45fb22";
  const application_Key= "5555e6c7f2fa8f83e751a35f64bb65f6 	";
  const [recipes, setRecipes]= useState([]);
  const [search, setSearch]= useState("");
  const [query, setQuery]= useState('chicken')


//everytime the page renders the useEffect gets called bt due to empty array it gets calledonly once
  useEffect(() => {
    GetRecipes();
  }, [query]);


  //asyn makes possible to make possible to fetch data into application using a api
  const GetRecipes= async () =>{
    const response= await Axios.get(`https://api.edamam.com/search?q=${query}&app_id=${application_ID}&app_key=${application_Key}`);
    //the above fetched data is stores in data in json format
    setRecipes(response.data.hits);
  
  }

  const handleChange = e=>{
    setSearch(e.target.value);  
  }

  const getSearch= e=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
  <div>
    <h1>Recipe book</h1>
      <form onSubmit= {getSearch}>
        <input 
          type= "text" 
          placeholder= "search..."
          value= {search}
          onChange= {handleChange}
          />
        <button  type="submit">Search</button>
      </form>
      {recipes. map(recipe=>(
        <Recipes 
        key={recipe.recipe.label}
        title= {recipe.recipe.label} 
        image= {recipe.recipe.image} 
        calories= {recipe.recipe.calories}/>
  ))}
  </div>);
}

export default App;
 