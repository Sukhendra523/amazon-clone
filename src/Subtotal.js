import React from 'react'
import CurrencyForamt from 'react-currency-format'
import './subTotal.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer'

function Subtotal(){
    const [{basket},dispatch] = useStateValue()
    return(
        <div className="subtotal">
            <CurrencyForamt
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({basket.length} items):<strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains gift
                        </small>
                    </>

                )
                }
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}
            />
            <button>Proceed To Checkout</button>
        </div>
        
    )
}

export default Subtotal