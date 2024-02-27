import express from 'express';
import ejs from 'ejs';

const app = express();
const port = 3000;
let currentDate = new Date();

let Day = currentDate.getDay();

app.get("/", (req, res) => {
    if (Day = 0) {
        var wday = "Weekend";
        var wtodo = "Have Fun";
    } else {
        var wday = "weekday";
        var wtodo = "Work Hard";
    }
    res.render("index.ejs", { day: wday, todo: wtodo});
  });

app.listen(port, () => {
    console.log(`We are using ${port}`);
})
