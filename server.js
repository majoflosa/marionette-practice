const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use( express.static( __dirname ) );
app.use( bodyParser.json() );

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

let initialTasks = [
    {id: 1,title: 'A first task', status: 'revising', description: 'Lorem ipsum dolor sit amet.'},
    {id: 2, title: 'A second task', status: 'ongoing', description: 'This is the description for the second task.'},
    {id: 3, title: 'A third task', status: 'done', description: 'A very descriptive description here.'}
];

app.get('/api/tasks/', (req, res) => {
    return res.status(200).json( initialTasks );
});

app.post('/api/tasks', (req, res) => {
    console.log( 'post endpoint hit: ', req.body );
    // if ( !req.body ) return res.status(500).json({error: 'req.body is undefined' });

    // initialTasks = initialTasks.map( task => {
    //     if ( task.title === req.body.title ) task = req.body;
    //     return task;
    // });
    // let updatedTask = initialTasks.find( task => task.title === req.body.title );
    
    // return res.status(200).json( updatedTask );
});

app.put('/api/tasks/:id', (req, res) => {
    console.log('put endpoint hit: ', req.body );
    if ( !req.body ) return res.status(500).json({error: 'req.body is undefined' });

    initialTasks = initialTasks.map( task => {
        if ( task.id === +req.params.id ) task = req.body;
        return task;
    });
    let updatedTask = initialTasks.find( task => task.id === +req.params.id );

    return res.status(200).json( updatedTask );
});


app.listen( 4000, () => console.log('Server running on port 4000') );