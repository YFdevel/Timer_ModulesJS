const resultTimer = document.querySelector(".result-timer");
const inputsBlock = document.querySelector(".timer-show-inner-block");
import {startButton, stopButton, inputsTimer} from "./main.js";
import * as howler from "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.js";


let hours = 0;
let minutes = 0;
let seconds = 0;
let date = new Date();


let myTimer = null;

let sound = new Howl({
    src: ['../audio/new_year.mp3'],
    volume: 0.1
});

export const setInputs = (event) => {
    const elem = event.target;
    if (elem.classList.contains("hours")) {
        hours = parseInt(elem.value);
    } else if (elem.classList.contains("minutes")) {
        minutes = (elem.value <= 59) ? parseInt(elem.value) : "Error";
    } else {
        seconds = (elem.value <= 59) ? parseInt(elem.value) : "Error";
    }
}


export const start = () => {
    if (!startButton.classList.contains("active-button")) {
        inputsTimer.forEach((item) => {
            item.value = "";
        });
        try {
            if ((minutes === 0 && seconds === 0 && hours === 0) || minutes === "Error" || seconds === "Error") {
                throw  new Error("Проверьте правильность вводимых данных");
            }

            startButton.classList.add("active-button");
            stopButton.classList.remove("active-button");
            stopButton.removeAttribute("disabled");
            date.setHours(hours, minutes, seconds, 0);


            myTimer = setInterval(() => {
                inputsBlock.style.display = "none";
                resultTimer.innerHTML = (date.getHours() < 10 ? '0' : '') + date.getHours() + ":" +
                    (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ":" +
                    (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();


                if (date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() < 10) {
                    sound.play();
                }

                if (date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0) {

                    resultTimer.innerHTML = "";
                    inputsBlock.style.display = "block";
                    clearInterval(myTimer);
                    sound.stop();
                    stopButton.classList.add("active-button");
                    startButton.classList.remove("active-button");
                    hours = minutes = seconds = 0;
                }
                date.setSeconds(date.getSeconds() - 1);

            }, 1000);
        } catch (err) {
            inputsTimer.forEach((item) => {
                item.value = "";
            });
            alert(err.message);
            throw err;
        }

    }
}

export const stop = () => {
    if (!stopButton.classList.contains(("active-button"))) {
        clearInterval(myTimer);
        sound.pause();
        stopButton.classList.add("active-button");
        startButton.classList.remove("active-button");
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
    }
}

