/* Global Variables */

const zipInput = document.getElementById('zip');
const dateOutput = document.getElementById('date');
const tempOutput = document.getElementById('temp');
const contentOutput = document.getElementById('content');


const localHostUrl = "http://localhost:";
const port = '3000';
const getUrl = localHostUrl+port+"/all";
const postUrl = localHostUrl+port+"/add";


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Personal API Key for OpenWeatherMap API
let baseURL = 'api.openweathermap.org/data/2.5/weather?'
let apiKey = '&appid=d146af58d54d6a67bcbc7e92d8f4aa8c';


// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */

function performAction(e){
     getWeather();
  }

/* Function to GET Web API Data*/
const getWeather = async ()=>{

    console.log(zipInput.value);
    const res = await fetch(`http://${baseURL}zip=${zipInput.value},us${apiKey}`);
    try {
  
      const data = await res.json();
      console.log(data)

      dateOutput.innerHTML = `The date is: ${d}`;
      contentOutput.innerHTML =  ` You feel : ${document.getElementById('feelings').value}`;
      tempOutput.innerHTML = `The temperatue is: ${data.main.temp}`;
      
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }



/* Function to POST data */

const postData = async ( url = postUrl, data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {

      const newData = await response.json();
      
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

/* Function to GET Project Data */


const getData = async (url=getUrl) =>{ 
    const request = await fetch(url);
    try {
    // Transform into JSON
    const allData = await request.json();
    
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  };
