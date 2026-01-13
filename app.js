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

app.get('/characters/:name', async (req, res) => {
  const characterName = req.params.name

  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${characterName}`
    )

    const { name, status, species, gender, origin, image } =
      response.data.results[0]

    res.json({name,status,species,gender,origin:origin.name,image})

  } catch (error) {
    res.status(404).json({error: 'Personaje no encontrado'})
  }
})



app.listen (3002, ()=>{
    console.log('express esta funcionando en el puerto http://localhost:3002')
})









