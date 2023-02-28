const btnEl= document.getElementById('btn');
const jokeEl=document.getElementById('joke');
const apikey ="wrhCyjRyB4ooqAppPbBF+g==L0ZVYNF3pgZ6o7eA";

const options={
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    },
}

const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1"


 async function getJoke(){

try {
    jokeEl.innerText="Updating......";
 btnEl.disabled= true;
 btnEl.innerText="Loading...."

  const response=  await fetch(apiUrl,options);
  //to convert the response in json file

  const data= await response.json();
  
  btnEl.disabled= false;
  btnEl.innerText="Tell me a joke";

  jokeEl.innerText=data[0].joke;

    
} catch (error) {
   jokeEl.innerText='Error getting now,try again later' ;
}
  
}

btnEl.addEventListener("click", getJoke)