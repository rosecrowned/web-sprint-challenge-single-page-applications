import React from 'react'
import 'submitOrderForm' from './Home'

export default function PizzaForm(props) {
    const {
        size,
        sauce,
        toppings,
        subs,
        quantity,
        special_notes,
        submit
    } =props

    const onSubmit= evt => {
        evt.preventDefault()
        submit()
    }
    
    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return(
        <form className='form container'>
            <div className="form-inputs">
                <h2> Size </h2>
                    <label> Size
                    <select
                        onChange={onChange}
                        value={Value.size}
                        name='size' >
                            <option value= ''> Select a size:</option>
                            <option value='small'> Small</option>
                            <option value='medium'> Medium</option>
                            <option value ='large'> large</option>
                    </select>
                    </label>

                <h2> Sauce </h2>
                    <label> Sauce
                    <select
                        onChange={onChange}
                        value={Value.sauce}
                        name='sauce' >
                            <option value= ''> Select a sauce:</option>
                            <option value='marinara'> Marinara</option>
                            <option value='white'> White</option>
                            <option value ='bbq'> BBQ</option>
                    </select>
                    </label>

                <h2> Toppings </h2>
                    <label> Pepperoni
                        <select
                            onChange={onChange}
                            value={value.toppings}
                            name='toppings'
                            type="checkbox"
                            >
                        </select>
                    </label>
                    <label> Sausage
                        <select
                            onChange={onChange}
                            value={value.Sausage}
                            name='Sausage'
                            type="checkbox"
                            >
                        </select>
                    </label>

            </div>

            <div className="order-submit">
                <button disabled={diasblaed}>
                    Submit!
                </button>
            </div>
        </form>





    )


}