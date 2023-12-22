import express from "express"; 

const app = express()


// app.get("/", (req, res) => {
//     res.send("Server is ready jjjjjjjjjjjjjjj")
// }) 
 

app.get("/api/jokes", (req, res) => {
const jokes = [
       {
        id: 1,
        title: "This is one",
        content: "This is the one content",
    },
    {
        id: 2,
        title: "This is two",
        content: "This is the two content",
    },
    {
        id: 3,
        title: "This is three",
        content: "This is the three content",
    },
    {
        id: 4,
        title: "This is four",
        content: "This is the four content",
    },
    {
        id: 5,
        title: "This is fiv",
        content: "This is the five content",
    },
]
res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log(`Serve at http://localhost:${port}`);
})

 
