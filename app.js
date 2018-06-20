const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static('./js'))
app.use(express.static('./css'));

app.get('/', (request, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

// create route to get single book by its isbn
// app.get('/books/:isbn', (request, response) => {
//     // make api call using fetch
//     fetch(`http://openlibrary.org/api/books?bibkeys=ISBN:${request.params.isbn}&format=json&jscmd=data`)
//         .then((response) => {
//             return response.text();
//         }, (err) => {
//             return {}
//         }).then((body) => {
//             let results = JSON.parse(body)
//             // console.log(results)   // logs to server
//             response.send(results) // sends to frontend
//         });
// });

// create a search route
// app.get('/search', (request, response) => {
//     fetch(`http://openlibrary.org/search.json?q=${request.query.string}`)
//         .then((response) => {
//             // console.log(response);
//             return response.text();
//         }).then((body) => {
//             let results = JSON.parse(body)
//             // console.log(results)
//             response.send(results)
//         });
// });

//create search for description and location
// app.get('/jobs/:description', (request, response) => {
//     fetch(`https://jobs.github.com/positions.json?description=${request.params.description}`).then((response) => {
//         return response.text();
//     }).then((body) => {
//         let results = JSON.parse(body)
//         console.log(results);
//         response.send(results);
//     })
// })
//search by location
// app.get('/jobs/:location', (request, response) => {
//     console.log('here');
//     fetch(`https://jobs.github.com/positions.json?location=${request.params.location}&full_time=true`).then((response) => {
//         return response.text();
//     }).then((body) => {
//         let results = JSON.parse(body)
//         console.log(results);
//         response.send(results);
//     }).catch(err => {
//         console.log(err);
//     })
// })
app.get('/jobs', (request, response) => {
    console.log('here');
    fetch(`https://jobs.github.com/positions.json?location=sf&full_time=true`).then((response) => {
        return response.text();
    }).then((body) => {
        let results = JSON.parse(body)
        console.log(results);
        response.send(results);
    }).catch(err => {
        console.log(err);
    })
})





app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`)
})