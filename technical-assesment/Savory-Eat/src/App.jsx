//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useState , useEffect}from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecepies.jsx"
import Add from "./components/Addrecepie.jsx" 
// import data from "./data/data.json"*
import axios from "axios"
function App() {
const [view,setView]=useState('Home')
const [data , setData] = useState([])
const [search , setSearch] = useState("")
const [update , setUpdate] = useState(false)

const API = () => {
axios.get("http://localhost:4000/get")
.then((result) => {
  setData(result.data)
})
.catch((err)=> {
  console.log(err)
})
}
useEffect (() => {
API()
}, [])


  let changeView = (view) => {
    setView(view);
  };
  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Addrecepie
        </div>
        <div className="nav-item" active-color="red">
          <input type="text" value={search}   />
          <button onClick={setSearch} >search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView}  />}
      {view === "Allrecepies" && <AllRecepies   data = {data}   />}
      {view === "Addrecepie" && <Add  ff = {update}  setUpdate = {setUpdate} />}
      <div></div>
    </div>
  );
}

export default App;


