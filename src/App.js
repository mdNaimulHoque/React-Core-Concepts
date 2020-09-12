import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const lovers = ['Naim', 'Rahim', 'Malek', 'Imran'];
  const products = [
    {name: 'Lohar Kudal', price:'$149.99'},
    {name: 'Steel Konda', price: '99.99'},
    {name: 'Kudal', price: '118.99'},
    {name: 'Kaci', price: '$60'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>{
          lovers.map(lover => <li>{lover}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
        </ul>
        {
          products.map(product =><Product product={product}></Product>)
        }
        <Person name={lovers[0]} job='Programming'></Person>
        <Person name={lovers[1]} job ='Capa-Cal Ltd. MR'></Person>
        <Person name={lovers[2]} job='CNG Owner'></Person>
        <Person name={lovers[3]} job='Islamic Singer'></Person>
      </header>
    </div>
  );
}

function Counter () {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users () {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h2>Dynamic Users : {users.length}</h2>
      <h3>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </h3>
    </div>
  )
}
function Product (props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <p>{name}</p>
      <h3>{price}</h3>
      <button>Buy now</button>
    </div>
  )
}

function Person (props) {
  return (
    <div>
      <h3>My Name: {props.name}</h3>
      <p>My profession: {props.job}</p>
    </div>
  )
}
export default App;
