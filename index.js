const express = require('express');

const app = express();

let livros =[
    {title: "Pequeno principe", author: "Antoine de Saint-Exupéry", year: "1943", genre:"Fábula"},
    {title: "O Senhor dos Anéis", author: "J. R. R. Tolkien", year: "2002", genre:"Ficção de aventura"},
    {title: "A culpa é das estrelas", author: "John Green", year: "2012", genre:"Romance"},
    {title: "jujutsu kaisen ", author: "Gege Akutami", year: "2018", genre:"Mangá"}
]

app.use(express.json());



app.listen(3080,() => {
    console.log("sevidor rodando!");
});

app.get('/', (req, res) =>{
    res.json(livros);
});

app.post('/novolivro', (req, res)=>{
    let title = req.body.title;
    let author = req.body.author;
    let year = req.body.year;
    let genre = req.body.genre;

    console.log(title);
    console.log(author);
    console.log(year);
    console.log(genre);

    let newLivro = {title, author, year, genre}
    livros.push(newLivro);

    res.send("ok");

});

app.put('/novolivro/:index', (req, res) =>{
    const{index} = req.params;
    let title = req.body.title;
    let author = req.body.author;
    let year = req.body.year;
    let genre = req.body.genre;

    livros[index] = {title, author, year, genre}

    return res.json(livros);
});

app.delete("/:index", (req, res) =>{
    const {index} = req.params;
    livros.splice(index,1);
    return res.json({message: "O livro foi deletado do CRUD"});
})