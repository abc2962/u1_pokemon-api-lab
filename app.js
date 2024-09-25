const button= document.querySelector(`#btn`)
const pokemonInput=document.querySelector(`#pokemonName`)
const pokemonSprite=document.querySelector(`#pokemonSprite`)
const imgElement = document.getElementById("pokemonSprite")
button.addEventListener(`click`, async () => {
    let pokemonName = pokemonInput.value
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const pokemonSprite = response.data.sprites.front_default         
      imgElement.setAttribute ('src', pokemonSprite)
      console.log(pokemonSprite)
    })


    





