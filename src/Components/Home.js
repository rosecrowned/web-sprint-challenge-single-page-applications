import React,{ useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import Home from './Form'
import Order from './Order'

//initial values

const initialFormValues= {
    size: false,
    sauce: false,
    toppings: false,
    subs: false,
    quantity: false,
    special notes: '',
}

export default function submitOrderForm() {
    return(
        <div> Form return!</div>
    )
}