let date;
let time;
date = new Date()

const optionsDate = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
   function getTime(){
    const currentDate = date.toLocaleDateString("en-US", optionsDate);
    const dateField = document.querySelector('.date')
    const timeField = document.querySelector('.time')
    var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    timeField.innerText = `${date.getHours()}:${date.getMinutes()} ${ampm}`;
    dateField.innerText = currentDate;
  }
const copyright = document.querySelector('.copyright')
copyright.style.position = "static"
const  town = document.querySelector('.town')
const title = document.querySelector('.tit')
const country = document.querySelector('.country')
const details_img = document.querySelector('.details_img')
const temp = document.querySelector('.temp')
temp.style.display ="none";
country.style.display = "none"
const textField = document.querySelector('.city')
const status_img = document.querySelector('.status_img')
const description = document.querySelector('.description')
let city;
const status = document.querySelector('.status')
getTime()
const sendBtn = document.querySelector(".butt")
sendBtn.addEventListener('click', (e)=> {
  e.preventDefault()
  sendBtn.innerText = `Wait...`
  city = document.querySelector('.city').value
  axios.get(`https://weatherappericus123.herokuapp.com/weather/${city}`).then((response) => {
 temp.style.display ="block";
 country.style.display = "block"
 status.style.display = "none"
 const weather_details = document.querySelector('details_weather')
 town.innerText = response.data.details.city;
 document.querySelector('.town').innerHTML = `${response.data.details.city},`;
 country.innerText = response.data.details.country
 temp.innerText = `${response.data.details.temp}°`
 description.innerText = response.data.details.description
 const icon = response.data.details.icon
 status_img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
status.innerText = ``
sendBtn.innerText = `Send`
if (screen.width < 461) {
  details_img.style.display = "none"
  weather_details.style.marginTop = "2.5%"
}
  getTime()
    }).catch((error) =>{ 
      getTime()
      status.style.display = "block";
      sendBtn.innerText = `Send`
      if (city == '') {
        status.innerText = `City name is required`
        console.log(status.innerText);
      }else if(error.response.data.error) {
        status.innerText = `Not Found`
      }else{
        status.innerText = `Error,please try again!`
      }
    })
})
