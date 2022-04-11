import React, { useState, useEffect } from 'react'
import PaymentForm from '../components/PaymentForm'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { post } from '../api'
import { useSelector } from 'react-redux'

const stripe = loadStripe("pk_test_51KTd1dCxJ8HWxsAUvHdkJU90wXuUHO4qa4bF5dq3A7kCPWLAiaPnQ4bDpvBqIVMHPdABDwVMODmDff6jl8ok59OJ00SeHORvaW")

const Payment = () => {
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const [clientSecret, setClientSecret] = useState("")
    const [totalProductsAmount, setTotalProductsAmount] = useState(0)

    useEffect(() => {
        let totalAmount = 0
        cart.forEach((product) => {
            totalAmount += Number(product.price) * Number(product.quantity)
        })
        console.log('monto total',totalAmount)
        setTotalProductsAmount(totalAmount)
        console.log('monto en centavos',totalAmount*100)
        post("/orders", {
            amount: (totalAmount * 100)
        }, user.token)
            .then(({ data }) => {
                setClientSecret(data.data.attributes.clientSecret)
            })
    }, [])

    return (
        <div className='pt-16'>
            <div className='mt-6 flex justify-center items-center gap-2'>
                <h1 className='font-neue text-2xl text-palette-teal'>To Pay</h1>
                <p className='font-josefina text-5xl text-palette-dark'>${totalProductsAmount}</p>
            </div>
            {clientSecret && (
                <Elements stripe={stripe} options={{ clientSecret }}>
                    <PaymentForm />
                </Elements>
            )}
        </div>
    )
}

export default Payment