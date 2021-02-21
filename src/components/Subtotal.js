import React from 'react';
import { useStateValue } from './context/Context';
import CurrencyFormat from 'react-currency-format';
function Subtotal() {
  let [{ basket }] = useStateValue();
  const amount = basket.map((basketObj) => basketObj.price);
  console.log('Array of String', amount);
  const toNumbers = amount.map(Number);
  console.log('Converted Array of String into Numbers', toNumbers);
  const total = toNumbers.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log(total);
  // var CurrencyFormat = require('react-currency-format');

  return (
    <div>
      <p>
        SubTotal ({basket.length} Items)
        <span>
          <strong>
            {
              <CurrencyFormat
                value={total}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            }
          </strong>
        </span>
      </p>
      <p>
        <span>
          <input type='checkbox' />
          This contains a gift
        </span>
      </p>
      <button>Click To Proceed</button>
    </div>
  );
}

export default Subtotal;
