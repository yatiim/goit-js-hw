'use strict';

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        let id = this.transactions.length + 1;
        return {
            id,
            type,
            amount,
        };
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount, 'deposit'));
        return `Операция прошла успешно. Счет пополнен на ${amount}`
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (amount > this.balance) {
            return 'Операция невозможна, недостаточно средств!';
        }
        this.balance -= amount;
        this.transactions.push(this.createTransaction(amount, 'withdraw'));
        return `Операция прошла успешно. Со счет снята сумма ${amount}`
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return `Текущий баланс ${this.balance}`;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (const item of this.transactions) {
            if (item.id === id) {
                return item;
            }
        }
        return 'Транзакции под таким номером не найдено';
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0;
        for (const item of this.transactions) {
            if (item.type === type) {
                total += item.amount;
            }
        }
        return `Общая сумма транзакций типа "${type}" составляет ${total}.`
    },
};

console.log(account.deposit(3000));
console.log(account.getBalance());
console.log(account.withdraw(5000));
console.log(account.getBalance());
console.log(account.deposit(4500));
console.log(account.getBalance());
console.log(account.withdraw(5000));
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(13));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));