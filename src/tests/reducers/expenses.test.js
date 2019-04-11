import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducers(undefined, {type: '@@INIT'});

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducers(expenses, action);

    expect(state).toEqual([ expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducers(expenses, action);

    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

//should add expense
test('should add expense', () => {
    const expense = {
        id: '5',
        description: 'New expense',
        note: '',
        amount: 1500,
        createdAt: 0
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducers(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});

//should edit the expense
test('should edit the expense', () => {
    const updates = {
        description: 'This is newly edited description'
    }
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }

    const state = expensesReducers(expenses, action);

    expect(state[0].description).toBe('This is newly edited description');
});

// should not edit expense if expense not found
test('should not edit expense if id not found', () => {
    const updates = {
        description: 'This is not edited description try'
    }

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }

    const state = expensesReducers(expenses, action);

    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }

     const state = expensesReducers(expenses, action);

    expect(state).toEqual([expenses[1]]);
});