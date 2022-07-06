import React from 'react'

export default function InExList({ incomes, expenses, removeIncome, removeExpense }) {
    return (
        <div className='row my-3'>
            <div className="col-md-10 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <h4 className="mb-3">Gəlir</h4>
                        <ul className="list-group">
                            {
                                incomes.map(income =>
                                    <li key={income.id} className="list-group-item list-group-item-action">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-1">
                                                {income.label} {income.amount + " Azn"}
                                            </h6>
                                            <span className="text-danger"
                                                onClick={() => removeIncome(income.id)}>
                                                <i className="bi bi-bag-x"></i>
                                            </span>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>  
                    <div className="col-md-5">
                        <h4 className="mb-3">Xərc</h4>
                        <ul className="list-group">
                            {
                                expenses.map(expense =>
                                    <li key={expense.id} className="list-group-item list-group-item-action">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-1">
                                                {expense.label} {expense.amount + " Azn"}
                                            </h6>
                                            <span className="text-danger"
                                                onClick={() => removeExpense(expense.id)}>
                                                <i className="bi bi-bag-x"></i>
                                            </span>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
