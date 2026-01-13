const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const url = "https://rickandmortyapi.com/api/character"


app.get("/characters", async(req, res)=>{
    try {
        const response = await axios.get(url)
        res.json(response.data.results)
        
    } catch(error) {
        res.status(500).json({
            error:"Error al obtener los personajes"
        })
    }
})

app.get('/characters/:name',async (req,res)=>{
    const characterName = req.params.characterName
    const url = `https://rickandmortyapi.com/api/character/${characterName}`

    try {
        const response = await axios.get (url)
        const {name, status, species, gender, origin, image} = response.data
    }catch(ERROR){

    }




})




app.listen (4000, ()=>{
    console.log('express esta funcionando en el puerto http://localhost:4000')
})









