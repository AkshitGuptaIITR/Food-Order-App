import classes from './Checkout.module.css';
import axios from 'axios';
import { useContext, useState } from 'react';
import CartContext from '../../context/cart-context';

const Checkout = (props) => {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [postal, setPostal] = useState('');
  const [city, setCity] = useState('');
  const [isValide, setIsValide] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(CartContext)

  const confirmHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    let data = {
      name: name,
      street: street,
      postal: postal,
      city: city,
      totalAmount: props.amount,
      items: ctx.items
    };

    if (
      name !== '' &&
      street !== '' &&
      postal !== '' &&
      city !== ''
    ) {
      setIsValide(true);
      axios.post("https://react-http-3033b-default-rtdb.firebaseio.com/order.json", data)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      setIsValide(true)
    }
    setIsLoading(false);
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' onChange={(e) => setStreet(e.target.value)} />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' onChange={(e) => setPostal(e.target.value)} />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' onChange={(e) => setCity(e.target.value)} />
      </div>
      {isLoading ? <p>Loading...</p> : null}
      {isValide ? (isLoading ? <p>Response Saved!!</p> : <p>Fill Up Every Details</p>) : null}
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;