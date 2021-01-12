"use strict";
const express=require('express')
const port=3000
const app= express()

app.get("/",function(res,req){
    res.send('FOSAN ACADEMY, hey welcome :) ')
})
app.get('/books',function(res,req){
    req.send('Ini adalah daftar dari buku buku yang ada')
})
app.get('/borrow',function(res,req){
    req.send('Ini dalah form untuk menginput data buku dan peminjam')
})
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})