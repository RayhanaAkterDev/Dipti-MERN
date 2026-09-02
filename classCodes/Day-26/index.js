const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded())

const users = [
    {
        name: "Sumaya",
        city: "Dhaka",
    },
    {
        name: "Ayaz",
        city: "Rajshahi",
    },
    {
        name: "Humayun",
        city: "Barishal",
    }
]

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/users", (req, res) => {
    // res.json(users)
    // res.json({ users })
    res.status(200).json({ peoples: users })
})

app.post("/add-user", (req, res) => {
    const { name, city } = req.body
    if (!name) {
        return res.status(404).json({
            success: false,
            message: "Name is requried!",
        })
    }
    if (!city) {
        return res.status(404).json({
            success: false,
            message: "city is requried!",
        })
    }
    users.push({ name, city })
    res.status(201).json({
        success: true,
        message: "Data created successfully!",
        data: { name, city }
    })
})


// to update more than 1 data use `put` method and for single data `patch` method

app.put("/user-update", (req, res) => {
    res.send("put method working")
})

app.delete("/user-delete", (req, res) => {
    res.send("delete method is working")
})

app.listen(4000, () => {
    console.log("suerver is running");
})
