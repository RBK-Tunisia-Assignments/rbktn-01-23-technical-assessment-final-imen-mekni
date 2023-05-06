import React from "react";
import "../index.scss";
import axios from "axios"
const AllRecepies = ({data}) => {
console.log(data);

const remove = (id) => {
  axios.delete(`http://localhost:4000/delete/${id}`)
    .then((res) => {
      console.log("deleted");
    })
    .catch((error) => {
      console.log(error);
    });
}
// const update = () => {
// axios.update(`http://localhost:4000/delete${}`)
// .then()

// }
  return (
   
    <div className="card-container">
    
    
    {data.map((element)=> {  return (
      <div className="card">
     <button className="delete" onClick={() => remove(element.recepie_Id)}>delete</button>
<button className="update">update </button>
      
        <> 
          <div className="header">
            <img
              className="img"
              src= {element.recepie_Image}
              alt="food"
            />
          </div>
          <div className="text">
            <h1 className="food">{element.recepie_Name}</h1>
            <i> 25 Mins    </i>   {element.Cook_Time} <br /> 
            <i> Serves: 5 </i> {element.Serves}
          </div>
        </>
   
      </div>
    )
})}
      </div>
  );
};
      
      // <div className="card">
      //   <button className="delete">delete</button>
      //   <button className="update">update </button>

      //   <>
      //     <div className="header">
      //       <img
      //         className="img"
      //         src="https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      //         alt="food"
      //       />
           
      //     </div>
      //     <div className="text">
      //       <h1 className="food">Pasta</h1>
      //       <i> 30 Mins</i> <br />
      //       <i> Serves : 4 </i>
      //     </div>
      //   </>
      // </div>
      // <div className="card">
      //   <button className="delete">delete</button>
      //   <button className="update">update </button>

      //   <>
      //     <div className="header">
      //       <img
      //         className="img"
      //         src="https://images.unsplash.com/photo-1618449840665-9ed506d73a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VycnklMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      //         alter=""
      //       />
      //     </div>
      //     <div className="text">
      //       <h1 className="food">Curry chicken</h1>
      //       <i> 45 Mins</i> <br />
      //       <i>Serves : 4  </i>
      //     </div>
      //   </>
      // </div>
      // <div className="card">
      //   <button className="delete">delete</button>
      //   <button className="update">update </button>

      //   <>
      //     <div className="header">
      //       <img
      //         className="img"
      //         src="https://images.unsplash.com/photo-1512058556646-c4da40fba323?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RpciUyMGZyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      //         alt="food"
      //       />
      //     </div>
      //     <div className="text">
      //       <h1 className="food">Stir-Fry</h1>
      //       <i> 40 Mins</i> <br />
      //       <i>Serves : 3 </i>
      //     </div>
      //   </>
      // </div>
      // <div className="card">
      //   <button className="delete">delete</button>
      //   <button className="update">update </button>

      //   <>
      //     <div className="header">
      //       <img
      //         className="img"
      //         src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hc3RlZCUyMGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      //         alt="food"
      //       />
           
      //     </div>
      //     <div className="text">
      //       <h1 className="food">Roasted Chicken</h1>
      //       <i> 425 Mins</i> <br />
      //       <i>Serves : 6 </i>
      //     </div>
      //   </>
      // </div>
      // <div className="card">
      //   <button className="delete">delete</button>
      //   <button className="update">update </button>

      //   <>
      //     <div className="header">
      //       <img
      //         className="img"
      //         src="https://images.unsplash.com/photo-1548869206-93b036288d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVlZiUyMHN0aXIlMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      //         alt="food"
      //       />
      //     </div>
      //     <div className="text">
      //       <h1 className="food">Beef Stir Fry</h1>
      //       <i> 40 Mins</i> <br />
      //       <i>Serves : 2 </i>
      //     </div>
      //   </>
      // </div>
  


export default AllRecepies;
