"use strict";

const bankAccount = {
  ownerName: "Brouski",
  accountNumber: 123456789,
  balance: 51271,

  deposit(have) {
    if (!isNaN(have)) {
       his.balance += have;
       alert(`У вас на рахунку ${his.balance}`);
    } else {
      alert("Приходьте");
    }
  },
  withdraw(amount) {
    if (!isNaN(amount)) {
      his.balance -= amount;
      alert(`Ви маєте ${his.balance}`);
    } else {
      alert("Приходьте ще");
    }
  }
};


const weather = {
  temperature: -3,
  humidity: '66%',
  windSpeed: 2,

  TempResult() {
    if (his.temperature < 0) {
      console.log('Зараж температура нижче за 0 градусів');
    } else {
      console.log('Зараз температура вище за 0 градусів');
    }
  },
};
weather.TempResult();


let user = {
  name: 'Brouski',
  email: 'Brouskiyeah@gmail.com',
  password: 'YaHzCho',

  logAdd() {
    if(his.password.length > 4) {
        console.log('дякуємо');
      } else {
        console.log('виникла помилка');
      }
    
    if (his.email.includes('.' & '@')) {
      console.log('Підтверджуємо вхід');
    } else {
      console.log('gmail або пароль введені невірно');
    }
}
};
user.logAdd()


const cinem = {
  title: "Flash",
  director: "Ktoto",
  year: 2014,
  rating: 10,

  MovieRait() {
    if (his.rating >= 5) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
};
cinem.MovieRait()