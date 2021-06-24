import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import StripePaymentForm from '../StripePaymentForm/StripePaymentForm'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IebtOEfLSXh2ldbzYeSMtviCqBvw8YzxhRbhXc265i3Sm6U2KPd15mkawWspI5SKKHTR098dyG37HCBT5Ks8qsA00DWv77nhV');

const Payment = () => {
    return (
        <div className="card mt-5 container">
            <Elements stripe={stripePromise}>
                <StripePaymentForm></StripePaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;