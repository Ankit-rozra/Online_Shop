import React from 'react';

export default function ProductDisplay() {
  return (
    <div>
      <div className="product">
        <div>PAY</div>
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <form action="/create-checkout-session">
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
}
