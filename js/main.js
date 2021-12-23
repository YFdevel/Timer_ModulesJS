import { printError, printResult } from './printResult.js';
import getDateDiff from './getDateDiff.js';
import {switchContent} from "./switchContent.js";
export const form = document.getElementById('datecalc');
export const startButton = document.querySelector(".timer-btn-block-start");
export const stopButton = document.querySelector(".timer-btn-block-end");
export const inputsTimer = document.querySelectorAll(".input-timer");
import {start,stop,setInputs} from "./timer.js";



form.onsubmit = (event) => {
  event.preventDefault();
  
  const dataForm = new FormData(event.target);

  const firstDate = dataForm.get('firstDate');
  const secondDate = dataForm.get('secondDate');

  if (!firstDate || !secondDate) {
    printError('Oooopps! Введите дату')
  } else {
    const dateResult = getDateDiff(firstDate, secondDate);
    printResult(dateResult);
  }
}
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
inputsTimer.forEach((item) => {
  item.addEventListener("input", setInputs);
});