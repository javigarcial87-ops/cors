function getCharacterInfo() {
    const characterNameInput = document.getElementById('characterName')
    const characterInfo = document.getElementById('characterInfo')

    const characterName = characterNameInput.value.toLocaleLowerCase()
     if(!characterName){
        characterInfo.innerHTML = `<p>Escribe algo aquí</p>`
        return
    }

    fetch (`http://localhost:3000/characters/${characterName}`)
    .then(response => {
            if (!response.ok) {
                throw new Error('Personaje no encontrado') 
            }
            return response.json()
        })
    .then(data => {
        const {name,status,species,gender,origin,image}= data

        characterInfo.innerHTML = `
        
    <h2>${name}</h2>
    <img src="${image}" alt="${image}">
    <p>STATUS: ${status}</p>
    <p>SPECIES: ${species}</p>
    <p>GENDER: ${gender}</p>
    <p>ORIGIN ${origin}</p>
        
    `
    })
    .catch(error => {
            characterInfo.innerHTML = `<p>personaje no encontrado</p>`
        })

}