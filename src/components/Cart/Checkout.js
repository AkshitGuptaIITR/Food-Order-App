import classes from './Checkout.module.css';
import axios from 'axios';
import { useContext, useState } from 'react';
import CartContext from '../../context/cart-context';
import useInputValidate from '../../hooks/useInputValidate';

const Checkout = (props) => {
  const [name, validName, handleNameInput, handleNameBlur] = useInputValidate();
  const [street, validStreet, handleStreetInput, handleStreetBlur] = useInputValidate();
  const [postal, validPostal, handlePostalInput, handlePostalBlur] = useInputValidate();
  const [city, validCity, handleCityInput, handleCityBlur] = useInputValidate();
  const [isValide, setIsValide] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const ctx = useContext(CartContext);

  const responseHTML = <p>Full-Up the Whole Form...</p>;

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
      setIsValide(true)
      setIsLoading(true)
      axios.post("https://react-http-3033b-default-rtdb.firebaseio.com/order.json", data)
        .then((res) => {
          setFeedback('Response Save Successfully!!');
          // console.log(res)
        })
        .catch((err) => {
          setFeedback('SomeThing Went Wrong!')
          // console.log(err)
        })
    } else {
      setIsValide(false)
    }
    setIsLoading(false);
  };

  return (
    <form className={`${classes.form}`} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${!validName && classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={(e) => handleNameInput(e)}
          onBlur={handleNameBlur}
          value={name}
        />
      </div>
      <div className={`${classes.control} ${!validStreet && classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          onChange={(e) => handleStreetInput(e)}
          onBlur={handleStreetBlur}
          value={street}
        />
      </div>
      <div className={`${classes.control} ${!validPostal && classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input
          type='text'
          id='postal'
          onChange={(e) => handlePostalInput(e)}
          onBlur={handlePostalBlur}
          value={postal}
        />
      </div>
      <div className={`${classes.control} ${!validCity && classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          onChange={(e) => handleCityInput(e)}
          onBlur={handleCityBlur}
          value={city}
        />
      </div>
      {isLoading ? <p>Loading...</p> : null}
      {!isValide ? responseHTML : feedback}
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