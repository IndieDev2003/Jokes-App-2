let jokepara = document.querySelector("#joke-para")
const resetJoke=document.querySelector("#reset-joke")
const apiUrl="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single"


async function ShowJoke(){

    let response= await fetch(apiUrl)
    const apiJoke=await response.json()
    console.log(apiJoke.joke)
    
    jokepara.innerHTML=apiJoke.joke

    resetJoke.addEventListener("click",async ()=>{
         response= await fetch(apiUrl)
         const apiJoke=await response.json()
         console.log(apiJoke.joke)
    
        jokepara.innerHTML=apiJoke.joke

    })
}

ShowJoke();

