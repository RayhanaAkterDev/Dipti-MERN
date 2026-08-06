// TODO - Check whether a user can withdraw money from an ATM.

/**
 * Example:
 * canWithdraw(5000, 1200); // "Transaction Successful"
 * canWithdraw(5000, 6000); // "Insufficient Balance"
 * canWithdraw(5000, 1250); // "Enter an amount divisible by 100"
 *
 * Rules:
 * - If the withdrawal amount is greater than the balance,
 *   return "Insufficient Balance".
 *
 * - Otherwise, if the withdrawal amount is NOT divisible by 100,
 *   return "Enter an amount divisible by 100".
 *
 * - Otherwise,
 *   return "Transaction Successful".
 *
 * NOTE:
 * - Assume both inputs are positive integers.
 * - Return the result as a string.
 * - Don't search the internet.
 */

function canWithdraw(balance, amount) {
    if (balance >= amount) {
        if (amount % 100 === 0) {
            return "Transaction Successful";
        } else {
            return "Enter an amount divisible by 100";
        }
    } else {
        return "Insufficient Balance";
    }
}

console.log(canWithdraw(5000, 1200));
console.log(canWithdraw(5000, 6000));
console.log(canWithdraw(5000, 1250));
