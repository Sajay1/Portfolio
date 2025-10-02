const express = require("express")
const cors = require("cors")
const Resend = require("resend")
const resend = new Resend('re_xxxx...xxxxxx');


const app = express()

app.use(cors())

