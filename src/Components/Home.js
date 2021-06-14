import React,{ useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import Home from './Form'
import Order from './Order'
import PizzaForm from './Form'

//initial values

const initialFormValues= {
    name: false,
    size: false,
    sauce: false,
    toppings: false,
}

export default function submitOrderForm() {
    return(
        <PizzaForm />
    )
}