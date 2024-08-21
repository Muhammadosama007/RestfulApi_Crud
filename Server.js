const express=require('express');
const app=express();

const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 2, title: "1984", author: "George Orwell", year: 1949 },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { id: 5, title: "Moby-Dick", author: "Herman Melville", year: 1851 }
  ];

 app.post('/books',(req,res)=>{
    res.send('Book added successfully');
 })

 app.get('/books',(req,res)=>{
    res.send(books);
 })

 app.put('/books',(req,res)=>{
    res.send('Book updated');
 })

 app.delete('/books',(req,res)=>{
    res.send('Book deleted successfully');
 })

 app.listen(3000);