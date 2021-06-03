class BankAccount {
  constructor(name, money) {
    this.holder = name;
    this.balance = money;
  }

  get balance() {
    return this._balance;
  }

  set balance(money) {
    if (money >= 0) {
      this._balance = money;
    } else {
      console.log('Not valid');
    }
  }

  deposit(money) {
    this.balance += money;
  }

  withdraw(money) {
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
    }
  }

  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
      account.balance += money;
    }
  }
}

class SavingsAccount {
  // 여기에 코드를 작성하세요
}

class DonationAccount {
  // 여기에 코드를 작성하세요
}

const sa1 = new SavingsAccount('Kate', 50000);
const da1 = new DonationAccount('Mike', 90000, 0.05);

sa1.years++;
sa1.addInterest(0.02);
da1.donate();
sa1.years++; 
sa1.addInterest(0.05);
da1.donate();
sa1.years++;
sa1.addInterest(0.07);
da1.donate();

console.log(Math.floor(sa1.balance));
console.log(Math.floor(da1.balanace));