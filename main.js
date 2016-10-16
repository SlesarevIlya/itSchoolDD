"use strict";

window.onload = () => {
    var firstSelect = document.getElementById("first");
    var secondSelect = document.getElementById("second");
    downloadList(firstSelect, secondSelect);
    showTime();

    var interval = 0;
    var first, second, line, countCurrency;
    var url = "https://api.fixer.io/latest";
    var callBack;

    let buttonStart = document.getElementById("start");
    buttonStart.onclick = () => {

        first = firstSelect.options[firstSelect.selectedIndex].value;
        second = secondSelect.options[secondSelect.selectedIndex].value;
        line = url + "?base=" + first + "&symbols=" + second;

        let countCurrencyInput = document.getElementById("countCurrency");
        countCurrency = +countCurrencyInput.value;

        makeRequest(first, second, countCurrency, line);
    };

    let buttonSetInterval = document.getElementById("setInterval");
    buttonSetInterval.onclick = () => {
        let intervalInput = document.getElementById("intervalInput");
        interval = intervalInput.value * 1000;
        let currentInterval = document.getElementById("currentInterval");
        currentInterval.textContent = interval / 1000;

        //update course in interval
        clearInterval(callBack);
        callBack = setInterval(() => {
            makeRequest(first, second, countCurrency, line)
        }, interval);
    };

    var time = document.getElementById("time");
    //every one second update
    setInterval(showTime, 1000);
};

function downloadList(firstSelect, secondSelect) {
    let url = "https://api.fixer.io/latest";
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();

    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            var response = JSON.parse(request.responseText);
            console.log(response);
            for (let elem in response.rates) {
                console.log(elem);
                let optionFrom = document.createElement("option");
                optionFrom.text = elem;
                optionFrom.value = elem;
                let optionTo = document.createElement("option");
                optionTo.text = elem;
                optionTo.value = elem;
                firstSelect.add(optionFrom);
                secondSelect.add(optionTo);
            }
        }
    };
}

function makeRequest(first, second, countCurrency, line) {
    if (first === undefined || second === undefined) {
        return;
    }

    var request = new XMLHttpRequest();
    request.open("GET", line, true);
    request.send();

    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            var response = JSON.parse(request.responseText);
            if (first === second) {
                document.getElementById("course").textContent = first + " => " + second + "\n 1.0";
            } else {
                document.getElementById("course").textContent = first + " => " + second + "\n" + response.rates[second] * countCurrency;
            }
        }
    };
}

function showTime() {
    var date = new Date();
    date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    time.innerHTML = date;
}