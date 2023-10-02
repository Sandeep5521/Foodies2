const express = require("express");
const app = express();
const cors = require('cors');
const con = require(`${__dirname}/src/db.js`);

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }))
// app.get('/', (req, res) => {
//     res.send({
//         name: 'Sandeep'
//     })
// })

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send({
        done: 'OK !!!'
    })
})

app.post('/register', (req, res) => {
    console.log(req.body);
    res.send({
        done: 'OK !!!'
    })
})

app.listen(8000, () => {
    console.log('Server runs !!!')
})
