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
dateField.innerText = currentDate;
var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
timeField.innerText = `${date.getHours()}:${date.getMinutes()} ${ampm}`;
let city;
const sendBtn = document.querySelector(".butt")
sendBtn.addEventListener('click', (e)=> {
  e.preventDefault()
  city = document.querySelector('.city').value
  axios.get(`https://weatherappericus123.herokuapp.com/weather/${city}`).then((res) => {
    console.log(res);
    }).catch((err)=>{
     console.log(err.res);
    })
})

