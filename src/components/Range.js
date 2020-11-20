import React, { useEffect } from "react";

function Range() {

    const value = 15;
    const label = 7.22;

    function getValue(e) {
        let value = e.target.value;
    }

  useEffect(() => {
    const range = document.getElementById('range');
    const rangeV = document.getElementById('rangeV');
    const rangePosition = document.getElementById('rangePosition');
    const partialFee = document.getElementById('partialFee');

    const setValue = () => {
        const newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) );
        const newPosition = 10 - (newValue * 0.2);
        const abc = range.value;
        const fee = 7.5;
        console.log(abc);

        if (abc < 5) {
            rangeV.innerHTML = `<div> $${range.value} </div>`;
        }
        else if (abc >= 5 && abc <= 95) {
              rangeV.innerHTML = `<div> $${range.value}0K </div>`;

        }
        else if (abc == 100){
              rangeV.innerHTML = `<div> $1M </div>`;
        }

        if (abc == 0) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) + 6px )`;
            partialFee.innerHTML = `<label> ${fee}0% </label>`;
        }
        else if (abc == 5) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) + 6px )`;
            partialFee.innerHTML = `<label> ${fee}0% </label>`;
        }
        else if (abc == 10) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) + 5px )`;
            partialFee.innerHTML = `<label> ${fee - 0.14}% </label>`;
        }
        else if (abc == 15) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) + 4px )`;
            partialFee.innerHTML = `<label> ${fee - 0.28}% </label>`;
        }
        else if (abc == 20) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) + 4px )`;
            partialFee.innerHTML = `<label> ${fee - 0.42}% </label>`;
        }
        else if (abc == 25) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) + 3px )`;
            partialFee.innerHTML = `<label> 6.94% </label>`;
        }
        else if (abc == 30) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) + 2px )`;
            partialFee.innerHTML = `<label> ${fee - 0.70}0% </label>`;
        }
        else if (abc == 35) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) + 2px )`;
            partialFee.innerHTML = `<label> ${fee - 0.84}% </label>`;
        }
        else if (abc == 40) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) + 1px )`;
            partialFee.innerHTML = `<label> ${fee - 0.98}% </label>`;
        }
        else if (abc == 45) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) + 0px )`;
            partialFee.innerHTML = `<label> ${fee - 1.12}% </label>`;
        }
        else if (abc == 50) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) - 1px )`;
            partialFee.innerHTML = `<label> ${fee - 1.26}% </label>`;
        }
        else if (abc == 55) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) - 1px )`;
            partialFee.innerHTML = `<label> ${fee - 1.40}0% </label>`;
        }
        else if (abc == 60) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) - 2px )`;
            partialFee.innerHTML = `<label> ${fee - 1.54}% </label>`;
        }
        else if (abc == 65) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) - 3px )`;
            partialFee.innerHTML = `<label> ${fee - 1.68}% </label>`;
        }
        else if (abc == 70) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) - 4px )`;
            partialFee.innerHTML = `<label> ${fee - 1.82}% </label>`;
        }
        else if (abc == 75) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) - 5px )`;
            partialFee.innerHTML = `<label> ${fee - 1.96}% </label>`;
        }
        else if (abc == 80) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) - 6px )`;
            partialFee.innerHTML = `<label> ${fee - 2.1}0%  </label>`;
        }
        else if (abc == 85) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) - 6px )`;
            partialFee.innerHTML = `<label> ${fee - 2.24}% </label>`;
        }
        else if (abc == 90) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) - 7px )`;
            partialFee.innerHTML = `<label> ${fee - 2.38}% </label>`;
        }
        else if (abc == 95) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) - 8px )`;
            partialFee.innerHTML = `<label> ${fee - 2.52}% </label>`;
        }
        else if (abc == 100) {
            rangePosition.style.left = `calc(${newValue}% + (${newPosition}px) - 8px )`;
            partialFee.innerHTML = `<label> ${fee - 2.80}0% </label>`;
        }

        rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;

    };

    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener("input", setValue);


    //Set default value of input
    document.getElementById("range").value = 15;

  }, []);

  //Selected value effect
  function selectedEffectValue(e) {
    const val = (e.target.value - 0);
    e.target.style.background =
    "linear-gradient(to right, #0a5169 0%,  " +
    val +
    "%, #dff1eb " +
    val +
    "%, #dff1eb 100%)";
  }


  return (
      <div>

    <div className="range-wrap">

        <div className="rangeslider__handle-tooltip range-value" id="rangePosition">
          <span>
            <div className="slider_tooltip_price" id="rangeV"> ${value}0K </div> <br />
            <div className="slider_tooltip_text"> Estimate Grand Total </div>
          </span>
        </div>
        <input type="range" id="range" min="0" max="100" step="5" onInput={selectedEffectValue} onChange={getValue} />

        <div class="waterfall">
            <ul>
                <li>$0</li>
                <li>$250,0000</li>
                <li>$500,000</li>
                <li>$750,000</li>
                <li>$1M+</li>
            </ul>
        </div>

        <p class="section_title_description css-ulgnwk-WaterFall">Drag the slider around based on what you think it will cost to repair the property. <br />
            Move forward based on the estimated fee structure below.</p>

        <div class="partial_fee_btn">
            <i class="info_popup" data-toggle="popover" data-placement="top" data-content="Fee Structure Example: An estimate grand total of $100k will result in a fee of $7,360. The $750 deposit will be collected upon submission and applied toward the overarching fee."> i </i>
            <div id="partialFee">
                <label> {label}% </label>
            </div>
            <span> mpartial Fee </span>
        </div>

        <p class="waterfall_info_text"> [$750 Minimum] </p>

    </div>
    </div>
  );
}

export default Range;
