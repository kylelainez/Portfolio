const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,"../")));

app.get("/", function (req, res){
    res.sendFile("index.html")
});

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: "kylelainez@gmail.com",
        pass: "Kyle1205abby."
    }
})

app.post("/", async(req,res) => {
    const body = req.body;
    const message = body.message;
    const name = body.name;
    const email = body.email; 
    const text = `Name: ${name} \n Email: ${email} \n Message: ${message}`;

    try{
        await transporter.sendMail(
            {
            from: "<kylelainez@gmail.com>",
            to: "kyleadrianlainez@gmail.com",
            subject: "Website Message",
            text:text,
            }, () => {
            res.redirect("/?success");
        }
        );
    }catch (error){
        console.error(error);
        res.redirect("/?error");
    }
});



app.listen(8080,() => {
    console.log("Listening to port 8080");
});