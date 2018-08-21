class Account {
    constructor(number, balance) {
        this.number = number;
        this.balance = balance;
        this.history = [];
    }

    toString() { //javascript __str__ function
        return `Your account number is ${this.number} and balance is ${this.balance}`; //f string equivalent in javascript
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`withdrawal successful, remaining balance: ${this.balance}`)
        } else {
            console.log("Insufficient funds to make transaction");
        }
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("no negative deposit allowed");
        } else {
            this.balance += amount;
            console.log(`deposit successful, new balance: ${this.balance}`)
        }

    }

}

class Savings extends Account {
    constructor(number, balance, account_type = "Savings") {
        super(number, balance);
        this.account_type = account_type;
    }

    toString() { //javascript __str__ function
        console.log(`${super.toString()} with account ${this.account_type}`); //f string equivalent in javascript
    }

}

class Cheque extends Account {
    constructor(number, balance, account_type = "Cheque") {
        super(number, balance);
        this.account_type = account_type;
    }

    toString() { //javascript __str__ function
        console.log(`${super.toString()} with account ${this.account_type}`); //f string equivalent in javascript
    }
}

//////////////////////////////////////////////////////////////////////////////////////////
//const my_account = new Cheque(1, 1000);
//my_account.toString();
//my_account.withdraw(200);
//my_account.deposit(800);
//////////////////////////////////////////////////////////////////////////////////////////

class customer {
    constructor(name) {
        this.name = name;
        this.accounts = {
            "Cheque": [],
            "Savings": []
        };
    }

    create_acc(acc_type, acc_no, deposit) {
        this.acc_type = acc_type;
        this.acc_no = acc_no;

        if (acc_type == "Cheque") {
            this.accounts[acc_type].push(new Cheque(acc_no, deposit));
            console.log(`${this.name}, account type ${this.acc_type} created, with account no. ${this.acc_no}`)
        } else if (acc_type == "Savings") {
            this.accounts[acc_type].push(new Savings(acc_no, deposit));
            console.log(`${this.name}, account type ${this.acc_type} created, with account no. ${this.acc_no}`)
        }

    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//const cust = new customer("Kuselo");
//cust.create_acc("Cheque", 2, 1500);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class ATM extends customer {
    constructor(name) {
        super(name);
    }

    withdrawlATM(acc_type, acc_no, amount) {
        for (var i = 0; i < this.accounts[acc_type].length; i++) {
            if (this.accounts[acc_type][i].number == acc_no) {
                this.accounts[acc_type][i].withdraw(amount);
            }
        }
    }

    depositATM(acc_type, acc_no, amount) {
            for (var i = 0; i < this.accounts[acc_type].length; i++) {
                if (this.accounts[acc_type][i].number == acc_no) {
                    this.accounts[acc_type][i].deposit(amount);
                }
            }
        }
        /*    depositATM(acc_type, acc_no, amount) {
                for (var i in this.accounts[acc_type]) {
                    if (i.number == acc_no) {
                        i.deposit(amount);
                    }
                }
            } */

    getBalances() {

        this.total_cheque = 0;
        this.totol_savings = 0;

        for (var i = 0; i < this.accounts["Savings"].length; i++) {
            console.log(`Savings Account ${this.accounts["Savings"][i].number} has ${this.accounts["Savings"][i].balance}`);
            this.totol_savings += this.accounts["Savings"][i].balance;
        }

        for (var i = 0; i < this.accounts["Cheque"].length; i++) {
            console.log(`Cheque Account ${this.accounts["Cheque"][i].number} has ${this.accounts["Cheque"][i].balance}`);
            this.total_cheque += this.accounts["Cheque"][i].balance;
        }

        console.log(`Total in Savings: R${this.totol_savings}`)
        console.log(`Total in Cheque: R${this.total_cheque}`)
    }
}


class Bank {
    constructor(bank_name) {
        this.bank_name = bank_name;
        customerList = [];
    }

    AddCustomer(cust_name) {
        new_cust = new customer(cust_name);
        customerList.push(new_cust);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const atm_instance = new ATM("Kuselo");
atm_instance.create_acc("Cheque", 2, 1500);
atm_instance.create_acc("Savings", 7, 7500);
atm_instance.create_acc("Cheque", 4, 1600);
atm_instance.create_acc("Savings", 9, 1700);
console.log(atm_instance.accounts["Cheque"][1]);
console.log(atm_instance.accounts["Savings"]);
atm_instance.withdrawlATM('Savings', 7, 292);
atm_instance.depositATM('Cheque', 4, 29999);
atm_instance.getBalances();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////