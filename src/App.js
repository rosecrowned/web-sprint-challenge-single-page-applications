import React from "react";
import { Route, Link, Switch } from "react-router-dom"
import Home from './Components/Home'
import Form from './Components/Form'
import Axios from 'axios'

const App = () => {
  const startOrders = []
  const startDisabled = true

  const [orders, setOrders] = useState(startOrders)
  const [formValues, setFormValues] = useState(startFormValues)
  const [disabled, setDisabled] = useState(startDisabled)

  const getOrders = () => {
    Axios.get('https://reqres.in/api/order')
      .then(res => {
        setOrders(res.data)
      })
      .catch(error => {
        console.log(error)
        console.log('get orders didnt work')
      })
  }
  const postNewOrder = newOrder => {
    Axios.post('https://reqres.in/api/order', newOrder)
      .then(res => {
        setOrders([...orders, res.data])
        setFormValues(startFormValues)
      })
      .catch(error => {
        setFormValues(startFormValues)
        console.log(error)
        console.log('postNewOrder didnt work')
      })
  }
  //Event Handlers
  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value })
  }
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      special: formValues.special.trim(),
      size: formValues.size,
      toppings: ['pepperoni', 'sausage', 'chicken',
        'onion', 'olives', 'pinapple'].filter(top => formValues[top])
    }
    postNewOrder(newOrder)
  }
  //side Effects
  useEffect(() => {
    getOrders()
  }, [])

  useEffect(() => {

  }, [])
  return (

    <Homepage />
  // <Switch>
  //   <Route path='/pizza'>
  //     <Order
  //       values={formValues}
  //       change={inputChange}
  //       submit={formSubmit}
  //     />
  //     </Route>
  // </Switch>
 
  );
};
export default App;
