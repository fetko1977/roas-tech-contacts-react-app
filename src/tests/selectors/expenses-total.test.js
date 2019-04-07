import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return corect total if no expenses', () => {
    const emptyExpensesArray = [];
    const total = expensesTotal(emptyExpensesArray);

    expect(total).toBe(0);
});

test('should return corect total if expenses have just 1 item', () => {
    const expensesArray = [expenses[0]];
    const total = expensesTotal(expensesArray);

    expect(total).toBe(expenses[0].amount);
});

test('should return corect total if expenses have just multiple items', () => {
    const total = expensesTotal(expenses);

    expect(total).toBe(720);
});