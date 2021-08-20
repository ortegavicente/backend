
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.send({
        sucess: true,
        message: "Todo ha salido bien",

    })
});



app.post("/crear", (req, res) => {
    let nombre = req.body.nombre;
    let mascota = req.body.mascota;
    let obj = {
        nombre: nombre,
        mascota: mascota
    }


    fs.writeFile(`./data/${Date.now()}.json`, JSON.stringify(obj), (err) => {
        if (err) {
            return res.send({
                success: false,
                message: err
            })
        }
        return res.send("Creado ok");
    });
});

app.post("/create", (req, res) => {
    let nombre = req.body.nombre;
    let mascota = req.body.mascota;
    let obj = {
        nombre: nombre,
        mascota: mascota
    };

    fs.writeFile(`./data/${Date.now()}.json`, JSON.stringify(obj), (err) => {
        if (err) {
            return res.send({
                success: false,
                message: err
            })
        }
        return res.send("Creado ok");
    });
});



app.listen(5000, () => { console.log("Server running on port 5000") });