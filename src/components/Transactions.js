import React, { useState } from 'react'

export default function Transactions({addIncome, addExpense}) {
    const [label,setLabel] = useState('');
    const [amount,setAmount] = useState('');

    const addInc = (income) => {
        addIncome(income);
        setTimeout(() => {
            setLabel('');
            setAmount('');
        }, 0);
    }

    const addEx = (expense) => {
        addExpense(expense);
        setTimeout(() => {
            setLabel('');
            setAmount('');
        }, 0);
    }

    return (
        <div className='row'>
            <div className="col-md-6 mx-auto">
                <div className="row g-3 my-3">
                    <div className="col-auto">
                        <button 
                            disabled={!label || !amount}
                            onClick={() => addInc({label, amount})}
                            className="btn btn-sm btn-success mb-3">
                            <i className="bi bi-bag-plus-fill"></i>
                        </button>
                    </div>
                    <div className="col-auto">
                        <input type="text" 
                            value={label}
                            onChange={(event) => setLabel(event.target.value)}
                            className="form-control mb-2" 
                            placeholder='Kateqoriya'
                        />
                        <input type="number" 
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            className="form-control mb-2" 
                            placeholder='Qiymət'    
                        />
                    </div>
                    <div className="col-auto">
                        <button 
                            disabled={!label || !amount}
                            onClick={() => addEx({label, amount})}
                            className="btn btn-sm btn-danger mb-3">
                            <i className="bi bi-bag-dash-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
