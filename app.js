const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const URL = "https://rickandmortyapi.com/api/character"


app.get("/characters", async(req, res)=>{
    try {
        const response = await axios.get(URL)
        res.json(response.data.results)
        
    } catch(error) {
        res.status(500).json({
            error:"Error al obtener los personajes"
        })
    }
})


app.listen (4000, ()=>{
    console.log('express esta funcionando en el puerto http://localhost:4000')
})









