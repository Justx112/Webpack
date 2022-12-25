import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { timerCalculate } from "./timer.js";

// Калькулятор дат html
const dateCalcForm = document.getElementById("datecalc"); 
const dateCalcResult = document.getElementById("datecalc__result");
const buttonCalcTime = document.querySelector('.date_calc_button');
// Таймер html
const timer = document.getElementById("timer")
const TimerButton = document.querySelector('.timer_button')
const timerValue = document.querySelector('.time_input')
const startTimerButton = document.querySelector('.start_timer')
const stopTimerButton = document.querySelector('.stop_timer')

// id таймер
let id;

// флаг включен/выключен таймер
let isStarted = false

dateCalcForm.addEventListener("submit", handleCalcDates);

startTimerButton.addEventListener("click", startTimer)

stopTimerButton.addEventListener("click", stopTimer)

function handleCalcDates(event) { 
    dateCalcResult.innerHTML = ""; 
    event.preventDefault(); 
    
    let { firstDate, secondDate } = event.target.elements; 
    firstDate = firstDate.value, secondDate = secondDate.value; 
    
    if (firstDate && secondDate) { 
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

function startTimer(e){
    e.preventDefault();
    if (!isStarted){
        id = setInterval(()=>{
            timerValue.value = timerCalculate(timerValue.value)
            // воспроизведение звука
            if (timerValue.value==="00:00:00"){
                clearInterval(id)
                let audio = document.getElementById("player")
                audio.play()
            }
        },1000)}
        isStarted = true
    }
    
function stopTimer(event){
    event.preventDefault()
    if(isStarted)
    {
        clearInterval(id)
        isStarted = false
    }
}

// Свитчер страницы
buttonCalcTime.addEventListener("click", ()=>{
    dateCalcForm.style.display="block"
    timer.style.display = "none"
})
TimerButton.addEventListener("click", ()=>{
    dateCalcForm.style.display = "none"
    timer.style.display = "block"
})