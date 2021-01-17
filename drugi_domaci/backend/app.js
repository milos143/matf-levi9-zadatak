const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Hard-coded initial collection of books in store
books = new Map();

books.set(0, { title: 'Hazarski rečnik', author: 'Milorad Pavić' });
books.set(1, { title: 'Mamac', author: 'David Albahari' });
books.set(2, { title: 'Kroz vasionu i vekove', author: 'Milutin Milanković' });
books.set(3, { title: 'Grimus', author: 'Salman Ruždi' });
books.set(4, { title: 'Snohvatice', author: 'Jovan Jovanović' });
books.set(5, { title: 'Šta sanjam i šta mi se događa', author: 'Ivo Andrić'});
books.set(6, { title: 'Plodovi zemlje', author: 'Knut Hamsun'});

// Converting map books to JSON format 
function createJSONData() {
    let all_data = {}

    for (const [key, value] of books)
        data[key] = value

    return all_data;
}

// Displaying all books in json format
app.get('/admin/proizvodi', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(createJSONData())
})

// Adding new book in map
app.post('/admin/unos-novog-proizvoda', (req, res) => {
    // Entering title and author of new book
    let title = req.body.title;
    let author  = req.body.author;

    res.setHeader("Access-Control-Allow-Origin", "*"); 

    books.set(
        books.size,
        {                   
            title: title,
            author: author
        }
    );

    //New list of books 
    res.send(createJSONData());
})


//Deleting book by id
app.delete('/admin/proizvodi', (req, res) => {

    let id = req.body.id;
    books.delete(id)

    //Remaining books
    data = createJSONData();
    res.send(data)
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})