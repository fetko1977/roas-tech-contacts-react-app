export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        },0);
}