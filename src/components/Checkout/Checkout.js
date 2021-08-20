import React, { useState, useEffect, useContext } from 'react';
import backgroundImg from '../../assets/marble_bg.jpg';
import { FaMotorcycle, FaPaypal } from 'react-icons/fa';
import { RiSecurePaymentLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BsCreditCard } from 'react-icons/bs';
import useInput from '../../hooks/use-input';
import useHttp from '../../hooks/use-http';
import Button from '../UI/Button';
import CartContext from '../../store/cart-context';

import styles from './Checkout.module.css';

/* props.cart => information of the cart from Cart.js */
export default function Checkout(props) {
  const { isLoading, error: httpError, sendRequest } = useHttp();
  const cartCtx = useContext(CartContext);
  const [isFormValid, setIsFormValid] = useState(false);
  const [paymentChoice, setPaymentChoice] = useState(null);

  const {
    enteredValue: phoneEnteredValue,
    hasError: phoneHasError,
    changeInputHandler: changePhoneInputHandler,
    touchInputHandler: touchPhoneInputHandler
  } = useInput(x => /^[0-9]{8,11}$/.test(x));

  const {
    enteredValue: addressEnteredValue,
    hasError: addressHasError,
    changeInputHandler: changeAddressInputHandler,
    touchInputHandler: touchAddressInputHandler
  } = useInput(x => x.trim().length > 20);
  
  useEffect(() => {
    setIsFormValid(!phoneHasError && !addressHasError && paymentChoice);
    return () => { setIsFormValid(false) }
  }, [phoneHasError, addressHasError, paymentChoice])

  const exitModalHandler = () => {
    setIsFormValid(false);
    props.onClearModal();
  }

  const submitHandler = (event) => {
    event.preventDefault();
    touchAddressInputHandler(true);
    touchPhoneInputHandler(true);

    if (isFormValid) {
      const orderInfo = {
        ...props.cart,
        address: addressEnteredValue,
        phone: phoneEnteredValue,
        paymentMethod: paymentChoice
      };

      // Send the order to the backend Firebase server
      sendRequest({
        url: 'https://not-pizza-hut-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
        method: 'POST',
        header: { 'Content-type': 'application/json' },
        body: orderInfo
      }, (data) => {
        console.log('Request successful', data);
        console.log('Data sent', orderInfo);
        if(!httpError) {
          cartCtx.clearCart();
          exitModalHandler();
          props.onOrderComplete();
        }
      });
    }
  }

  return <>
    <img src={backgroundImg} className={styles.bg} alt='' onClick={exitModalHandler}></img>
    <div className={styles.checkout}>
      <button onClick={() => props.onClearModal()} className={styles.closeBtn}>X</button>
      <div className={styles.checkoutModal}>
        <div className={styles['orderSummary']}>
          <h2>Summary</h2>
          <h1>{`HK $ ${props.cart.totalPrice.toFixed(1) || ' - '}`}</h1>
          <small>Please take a short moment to fill in necessary information for payment and delivery.</small>
          <p>Note: Do not leave any real credentials here, thank you.</p>
        </div>

        <form onSubmit={submitHandler} className={styles['orderDetailForm']}>
          <h2><FaMotorcycle />... Delivery Detail</h2>
          <div className={`${styles['formInput']} ${phoneHasError ? styles.invalid : ''}`}>
            <label>Telephone Number</label>
            <input type="tel" value={phoneEnteredValue} onChange={changePhoneInputHandler} onBlur={() => {touchPhoneInputHandler(true)}}></input>
            {phoneHasError && <small className={styles.errorMsg}>Please enter a valid phone number without country code</small>}
          </div>

          <div className={`${styles['formInput']} ${addressHasError ? styles.invalid : ''}`}>
            <label>Address</label>
            <input type="text" value={addressEnteredValue} onChange={changeAddressInputHandler} onBlur={() => {touchAddressInputHandler(true)}}></input>
            {addressHasError && <small className={styles.errorMsg}>Address must consist of 20 characters</small>}
          </div>

          <h2><RiSecurePaymentLine />+ Secure Payment</h2>
          <div className={styles.payments}>
            <div className={`${styles.btn} ${paymentChoice === 'Credit Card' ? styles.chosen : ''}`}>
              <button onClick={() => { setPaymentChoice('Credit Card') }} type="button">
                <BsCreditCard /> Credit Card (Demo)
              </button>
            </div>
            <div className={`${styles.btn} ${paymentChoice === 'Paypal' ? styles.chosen : ''}`}>
              <button onClick={() => { setPaymentChoice('Paypal') }} type="button">
                <FaPaypal /> Paypal (Demo)
              </button>
            </div>
            <div className={`${styles.btn} ${paymentChoice === 'Cash' ? styles.chosen : ''}`}>
              <button onClick={() => { setPaymentChoice('Cash') }} type="button">
                <RiMoneyDollarCircleLine /> Cash on arrival
              </button>
            </div>
          </div>

          {httpError && <small className={styles.errorMsg}>Something went wrong: {httpError}</small>}
          <Button type="submit" disabled={!isFormValid || isLoading} className={styles.submitBtn}>
            {isLoading ? 'Loading...' : 'Confirm Order'}
          </Button>
        </form>
      </div>
    </div>
  </>
}