const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({
    origin: "https://login-azure-ten.vercel.app",  
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let users = [
    { username: "Sundari", password: "2468" } 
]

app.get("/", (req, res) => {
    res.send("✅ Backend is running successfully!")
})

app.post("/login", function(req, res) {

    const username = req.body.username
    const password = req.body.password

    const user = users.find(function(u) {
        return u.username === username && u.password == password
    })

    if (user) {
        res.send(true)  
    } else {
        res.send(false)  
    }

})

app.post("/signup", function(req, res) {

    const username = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
    })

    console.log("Users:", users)

    res.send("Signup successful")

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
})