import express from "express";
import data from "./data/mock.json" assert {type: "json"};

// importing the express
const app = express();
// creating the instance of the express
const PORT = 5000;
// creating a varible of port but its not necessary except that its easier fir refactoring the code

// Creating A GET request
app.get('/', (req, res) => {
    res.json(data);
   })


   // Creating a POST request
app.post('/create', (req, res)=> {
    res.send("this is a POST request");
})

// createa a PUT reeuest
app.put('/edit', (req, res) => {
    res.send("this is a PUT request");
});


// Creating a delete request
app.delete('/delete', (req, res)=> {
    res.send("this is a DELETE request");
});

// Requesting a static page
app.use(express.static("public"))

// suppose now we want to use a particular link say /images/img1.jpeg then??
app.use("/images", express.static("images"))

// Creating Routes and fething data from ID

app.get("/class/:id", (req, res)=> {
    const studentID = Number(req.params.id);
    // console.log(studentID);
    const student = data.filter((student)=>student.id === studentID);
    // console.log(student[0].first_name);
    res.send(student[0].first_name)

})

// Example of getting all the student names
app.get("/students", (req, res)=> {
    res.send(
        data.map((d)=>d.first_name)
    )
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})
