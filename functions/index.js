const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get("/time", function (req, res) {
    res.status(200).send(`${Date.now()}`);
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
