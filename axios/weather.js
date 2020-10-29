let date;
let time;
date = new Date()

const optionsDate = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
const currentDate = date.toLocaleDateString("en-US", optionsDate);
const dateField = document.querySelector('.date')
const timeField = document.querySelector('.time')
const  town = document.querySelector('.town')
const country = document.querySelector('.country')
const temp = document.querySelector('.temp')
const status_img = document.querySelector('.status_img')
const description = document.querySelector('.description')
dateField.innerText = currentDate;
var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
timeField.innerText = `${date.getHours()}:${date.getMinutes()} ${ampm}`;
let city;
const sendBtn = document.querySelector(".butt")
const status = document.querySelector('.status')
sendBtn.addEventListener('click', (e)=> {
  e.preventDefault()
  sendBtn.innerText = `Wait...`
  city = document.querySelector('.city').value
  axios.get(`https://weatherappericus123.herokuapp.com/weather/${city}`).then((response) => {
 town.innerText = response.data.details.city;
 document.querySelector('.town').innerHTML = `${response.data.details.city},`;
 country.innerText = response.data.details.country
temp.innerText = `${response.data.details.temp}°`
 description.innerText = response.data.details.description
 const icon = response.data.details.icon
 status_img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
status.innerText = ``
sendBtn.innerText = `Send`
    }).catch((error) =>{ 
      sendBtn.innerText = `Send`
      if (city == '') {
        status.innerText = `City name is required`
      }else if(error.response.data.error) {
        status.innerText = `Not Found`
      }else{
        status.innerText = `Error,please try again!`
      }
    })
})

