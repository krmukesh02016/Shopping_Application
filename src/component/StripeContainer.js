import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY="pk_test_51JIcBRSEs07vuR60BisFsCz6ZFsMBPDEHLpV2CJpV3up9xq8J2Mr29YK2RL7SzRxjO9SDSlHUKhKtFlNdh3hmDr900EOzAkqKx"

const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
    return (
        <div>
            <Elements stripe={stripeTestPromise}>
			<PaymentForm />
		   </Elements>
        </div>
    )
}
