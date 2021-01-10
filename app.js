const express = require("express");

let app = express();

app.get("/", function(req, res) {
    res.send("FOSAN ACADEMY, hey welcome :) ");
  });

app.get('/books', (req,res) =>{
    res.send('Ini adalah daftar dari buku buku yan ada');
});

app.get('/borrow', (req,res) =>{
    res.send('Ini dalah form untuk menginput data buku dan peminjam')
})

app.listen(3000);