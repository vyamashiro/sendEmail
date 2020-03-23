const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const port = 3000;

const user = "email_mudar@gmail.com";
const pass = "senha_mudar123";

app.get('/', (req, res) => res.send('Hello World'));

app.get('/send', (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: { user, pass}
    })


    transporter.sendMail({
        from: user,
        to: user,
        replyTo: "email_mudar@gmail.com",
        subject: "Olá, mundo!",
        html: "<h1>Hello world?</h1>",
    }).then(info=>{
        res.send(info)
    }).catch(error => {
        res.send(error)
    })

})

app.listen(port, () => console.log(`Running on port ${port}`));

