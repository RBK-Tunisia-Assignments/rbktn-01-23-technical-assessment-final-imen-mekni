import React  , {useState}from "react";
import "../App.css";
import axios from "axios"
const Add = ({update , setUpdate}) => {

const [name , setName] = useState("")
const [cooktime , setCooktime] = useState("")
const [preptime , setPreptime] = useState("")
const [serves , setServes] = useState("")
const [category , setCategory] = useState("")
const [description, setDescription] = useState("")
const [ingredients , setIngredients] = useState("")
const [image , setImage] = useState("")


const post = () => {
const newrecepie = {
  recepie_Name: name,
      Cook_Time: cooktime,
      Prep_Time: preptime,
      Serves: serves,
      categorie: category,
      recepie_Description: description,
      recepie_Ingredients: ingredients,
      recepie_Image: image
}
axios.post("http://localhost:4000/add" , newrecepie)
.then((res)=> {
setUpdate(!update)
})
.catch((err) =>  {
  console.log(err)
})




}



  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" value={name} onChange={(e) => {setName(console.log(e.target.value))}} />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" value={cooktime} onChange={(e) => {setCooktime(e.target.value)}} />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" value={preptime} onChange={(e) => {setPreptime(e.target.value)}} />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves"   value={ serves} onChange={(e) => {setServes(e.target.value)}}/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" value={category} onChange={(e) => {setCategory(e.target.value)}} />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" value={description} onChange={(e) => {setDescription(e.target.value)}} />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" value={ingredients}  onChange={(e) => {setIngredients(e.target.value)}} />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => {setImage(e.target.value)}}  />
      </div>
      <button className="create-recipe-btn" onClick={post} >Create Recipe</button>
    </div>
  );
};
export default Add;
