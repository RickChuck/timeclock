require('dotenv').config();
const express = require('express');
const session = require('express-session')
// const axios = require('axios');
const massive = require('massive');

const app = express();
app.use(express.json());

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(db => {
    console.log('db connected');
    app.set('db', db)
});

app.get('/api/punches', async (req, res) => {
    const db = req.app.get('db')
    let punches =  await db.get_punches()
    res.status(200).send(punches)
})

app.delete('/api/deletePunch/:punch_id', (req, res) => {
    const db = req.app.get('db')
    db.delete_punches([req.params.punch_id])
    .then((updatedPunches) => {
        res.status(200).send(updatedPunches)
    })
})

app.listen(SERVER_PORT, () => console.log(`I hear it on: ${SERVER_PORT}`))