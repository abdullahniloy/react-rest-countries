import logo from './logo.svg';
import './App.css';
// import './components/Header/Header.css'
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
import Friend from './components/Friend/Friend';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}

      <Countries></Countries>
      <Person></Person>
      <Friend></Friend>
      <Header></Header>
    </div>
  );
}
// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])

//   return (
//     <div>
//       <h1>Rest Countries Information!!</h1>
//       <h2>Available Countries:{countries.length}</h2>
//       {
//         countries.map(country => console.log(country))
//       }

//       {/* {
//         countries.map(country => <p>{country.name.common}</p>)
//       } */}
//       {
//         countries.map(country => <Country name={country.name.common} Population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h1>Name:{props.name}</h1>
//       <h3>Population:{props.Population}</h3>

//     </div>
//   )
// }

export default App;
