require('dotenv').config();
const express = require('express');
const session = require('express-session')
// const axios = require('axios');
const massive = require('massive');

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log("Hi I'm middleware");
    next();
});

const punches = [
    {}
]

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(db => {
    console.log('db connected');
    app.set('db', db)
});


app.get('/api/punches', async (req, res) => {
    const db = req.app.get('db')
    let punches = await db.get_punches()
    res.status(200).send(punches);
});

app.get('/api/getEditPunch/:id', async (req, res) => {
    const db = req.app.get('db')
    let punches = await db.get_editPunch([id])
    res.status(200).send(punches);
});

app.post('/api/newPunch', async (req, res) => {
    const db = req.app.get('db')
    const { punchType, dateId, dayOfWeek, hourNum, minuteNum, amPm } = req.body;
    const newPunch = await db.add_punch([punchType, dateId, dayOfWeek, hourNum, minuteNum, amPm])
    // .catch();
    res.status(200).send(newPunch);
    // console.log(req.body)
});

app.put('/api/editPunch/:id', async (req, res) => {
    const db = req.app.get('db');
    const { punchType, dateId, dayOfWeek, hourNum, minuteNum, amPm } = req.body;
    const {id} = req.params
    const updatePunch = await db.edit_punch([punchType, dateId, dayOfWeek, hourNum, minuteNum, amPm, id])
    res.status(200).send(updatePunch);
    console.log(req.body)
})

app.delete('/api/deletePunch/:id', async (req, res) => {
    const db = req.app.get('db')
    console.log(req.params)
    const updatePunches = await db.delete_punches([+req.params.id])
    res.status(200).send(updatePunches);
});

app.listen(SERVER_PORT, () => console.log(`I hear it on: ${SERVER_PORT}`))