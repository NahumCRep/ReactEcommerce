import React, {useState, useEffect} from 'react'
import PaymentForm from '../components/PaymentForm'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { post } from '../api'

const stripe = loadStripe("pk_test_51KTd1dCxJ8HWxsAUvHdkJU90wXuUHO4qa4bF5dq3A7kCPWLAiaPnQ4bDpvBqIVMHPdABDwVMODmDff6jl8ok59OJ00SeHORvaW")

const Payment = () => {
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        post("/api/payments/intent", {
            amount: 100
        })
            .then(({ data }) => {
                setClientSecret(data.clientSecret)
            })
    }, [])
    
    return (
        <div>
            {/* {clientSecret && <Elements stripe={stripe} options={{
                clientSecret
            }}>
                <PaymentForm />
            </Elements>} */}
            <Elements stripe={stripe}>
                <PaymentForm />
            </Elements>
        </div>
    )
}

export default Payment