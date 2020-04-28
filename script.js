"use strict";
let money, time;

function start() {
  money = +prompt("Ваш денежный лимит на месяц?");
  time = prompt("Enter data in YYYY-MM-DD format");
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш денежный лимит на месяц?");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", "");
      let b = prompt("Во сколько обойдется?", "");

      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        appData.expenses[a] = b;
      } else {
        console.log("Плохой результат");
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова суума накоплений?");
      let percent = +prompt("Под какой процент?");
      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 0; i <= 3; i++) {
      let optExpenses = prompt("Статья необязательных расходов?", "");
      if (
        typeof optExpenses === "string" &&
        typeof optExpenses != null &&
        optExpenses != "" &&
        optExpenses.length < 50
      ) {
        appData.optionalExpenses[i] = optExpenses;
        console.log(appData.optionalExpenses);
      } else {
        console.log("Плохой результат");
        i--;
      }
    }
  },
  chooseIncome: function () {
    let items = prompt(
      "Что принесёт дополнительный доход? (Перечислите через запятую)",
      ""
    );
    if (typeof items != "string" || items == "" || typeof items == null) {
      console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();
    }

    appData.income.forEach(function (itemmassive, i) {
      alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
    });
  },
};

for (let key in appData) {
  console.log(
    "Наша программа включает в себя данные: " + key + " - " + appData[key]
  );
}
