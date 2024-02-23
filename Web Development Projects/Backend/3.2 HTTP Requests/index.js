import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("Hello World!");
    // console.log(req);
});

app.get("/about", (req, res) => {
	res.send("<h1>About Me</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/vinodh", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/kumar", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`server runnning on port ${port}`);
});