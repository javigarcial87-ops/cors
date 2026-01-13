function getCharacterInfo() {
    const characterNameInput = document.getElementById('characterName')
    const characterInfo = document.getElementById('characterInfo')

    const characterName = characterNameInput.value.toLocaleLowerCase()

    fetch (`http://localhost:3002/characters/${characterName}`)
    .then (response => response.json)
    .then(data => {
        const {name,status,species,gender,origin,image}= data

        characterInfo.innerHTML = `
        
    <h2>${name}</h2>
    <img src="${image}" alt="${image}">
    <p>${status}</p>
    <p>${species}</p>
    <p>${gender}</p>
    <p>${origin}</p>
        
    `
    })
    .catch(error => characterInfo.innerHTML = `<p>no se puede acceder al personaje</p>`)

}