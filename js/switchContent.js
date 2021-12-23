const switchButton = document.querySelector(".switch-button");
const timerField=document.querySelector(".timer-field");
import {form} from "./main.js";

export const switchContent = () => {
      if (switchButton.classList.contains("calculator")){
        switchButton.innerHTML ="Калькулятор дат";
         form.style.display="none";
         timerField.style.display="block";
         switchButton.classList.remove("calculator");
         switchButton.classList.add("timer");
    } else{
        switchButton.innerHTML ="Таймер";
         switchButton.classList.add("calculator");
         switchButton.classList.remove("timer");
         form.style.display="block";
         timerField.style.display="none";
    }
}
switchButton.addEventListener("click", switchContent);
