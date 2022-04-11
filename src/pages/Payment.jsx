import React, { useState, useEffect } from 'react'
import PaymentForm from '../components/PaymentForm'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { post } from '../api'
import { useSelector } from 'react-redux'

const stripe = loadStripe("pk_test_51KTd1dCxJ8HWxsAUvHdkJU90wXuUHO4qa4bF5dq3A7kCPWLAiaPnQ4bDpvBqIVMHPdABDwVMODmDff6jl8ok59OJ00SeHORvaW")

const Payment = () => {
    const user = useSelector(state => state.user)
    const [clientSecret, setClientSecret] = useState("")
    useEffect(() => {
        post("/orders", {
            amount: 100
        }, user.token)
            .then(({ data }) => {
                setClientSecret(data.data.attributes.clientSecret)
            })
    }, [])

    return (
        <div className='pt-11'>
            {clientSecret && (
                <Elements stripe={stripe} options={{ clientSecret }}>
                    <PaymentForm />
                </Elements>
            )}
        </div>
    )
}

export default Payment