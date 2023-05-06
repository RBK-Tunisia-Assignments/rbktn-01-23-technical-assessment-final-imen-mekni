const express = require("express");
const app = express();
const PORT = 4000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const connection = require("./database-mysql/index");


app.get("/get", (req, res) => {
  connection.query("SELECT * FROM recepie", (err, result) => {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      res.send(result);
    }
  });
});

app.post("/add", (req, res) => {
  const Cook_Time = req.body.Cook_Time
  const Prep_Time = req.body.Prep_Time
  const recepie_Name = req.body.recepie_Name
 const Serves = req.body.Serves
 const categorie = req.body.categorie
 const recepie_Description = req.body.recepie_Description
 const recepie_Ingredients = req.body.recepie_Ingredients
 const recepie_Image = req.body.recepie_Image

  connection.query("INSERT INTO recepie ( Cook_Time , Prep_Time ,  recepie_Name  ,Serves , categorie  ,  recepie_Description ,  recepie_Ingredients , recepie_Image  ) VALUES  (?, ?, ?, ?, ?, ?, ?, ?)", [Cook_Time , Prep_Time ,recepie_Name , Serves ,categorie ,recepie_Description , recepie_Ingredients , recepie_Image ], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("added");
    }
  });
});



app.delete("/delete/:id", (req, res) => {
  const id = req.params.id
  connection.query("DELETE FROM recepie WHERE recepie_Id = ?", [id] ,  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Deleted recipe");
    }
  });
});


app.put("/update/:id", (req, res) => {
  const Cook_Time = req.body.Cook_Time
  const Prep_Time = req.body.Prep_Time
  const recepie_Name = req.body.recepie_Name
  const Serves = req.body.Serves
  const categorie = req.body.categorie
  const recepie_Description = req.body.recepie_Description
  const recepie_Ingredients = req.body.recepie_Ingredients
  const recepie_Image = req.body.recepie_Image
  const recepie_Id = req.params.id;

  connection.query(
    "UPDATE recepie SET Cook_Time=?, Prep_Time=?, recepie_Name=?, Serves=?, categorie=?, recepie_Description=?, recepie_Ingredients=?, recepie_Image=? WHERE recepie_Id=?",
    [Cook_Time, Prep_Time, recepie_Name, Serves, categorie, recepie_Description, recepie_Ingredients, recepie_Image, recepie_Id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err)
      } else {
        res.send("updated");
      }
    }
  );
});





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
