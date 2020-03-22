const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const port = 3000;

const user = "email@email.com";
const pass = "Senha1234";

app.get('/', (req, res) => res.send('Hello World'));

app.get('/send', (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.umbler.com",
        port: 587,
        auth: { user, pass}
    })


    transporter.sendMail({
        from: user,
        to: user,
        replyTo: "contato@email.com",
        subject: "Olá, mundo!",
        html: "<h1>Hello world?</h1>",
    }).then(info=>{
        res.send(info)
    }).catch(error => {
        res.send(error)
    })

})

app.listen(port, () => console.log(`Running on port ${port}`));

