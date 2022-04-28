import logo from "./logo.svg";
import "./App.css";
import restaurant from "./restaurant.jpg";
import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Woopss404,
  Services,
  CompanyHistory,
  Location,
} from "./pages";

// function SecretComponent() {
//   return <h1>For Authorized Users only</h1>;
// }

// function RegularComponent() {
//   return <h1>For everyone</h1>;
// }
// function Header(props) {
//   console.log(props);
//   return (
//     <header>
//       <h1> {props.name}'s Kitchen </h1>
//     </header>
//   );
// }

// function Main(props) {
//   return (
//     <section>
//       <p> We serve the most {props.adjective} food around</p>
//       <img
//         src={restaurant}
//         height={200}
//         alt="napkin and silverware at a restaurant table"
//       ></img>
//       <ul style={{ textAlign: "left" }}>
//         {props.dishes.map((dish) => (
//           <li key={dish.id}>{dish.title}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// function Footer(props) {
//   return <p>Copyright {props.year}</p>;
// }

const dishes = [
  "Macroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Panner Tikka",
];

// We are building this object before we are passing it to component as a property.
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

// This is a component and it returns a UI element that we can add to the dom in index.js
function App({ login }) {
  // ======== React Routing Starts=========== //

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/contacts" element={<Contact />}></Route>

        <Route path="*" element={<Woopss404 />}></Route>
      </Routes>
    </div>
  );

  // ======== React Routing Ends=========== //

  // ======== useEffect and useStateHook for async Handling Starts=========== //
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(null);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   if (!login) return;
  //   setLoading(true);
  //   fetch(`https://api.github.com/users/${login}`)
  //     .then((response) => response.json())
  //     .then(setData)
  //     .then(
  //       () =>
  //         new Promise((resolve) => Promise.resolve(setTimeout(resolve, 2000)))
  //     )
  //     .then(() => setLoading(false))
  //     .catch(setError);
  // }, [login]);
  // if (loading) return <h1>Loading...</h1>;
  // if (error) return <pre>{JSON.stringify(error, null, 2)} </pre>;
  // if (!data) return null;
  // if (data) {
  //   return (
  //     <div>
  //       <h1>{data.name}</h1>
  //       <p>{data.location}</p>
  //       <img alt={data.login} src={data.avatar_url}></img>
  //       <p></p>
  //     </div>
  //   );
  // }
  // return <div>No User available</div>;
  // ======== useEffect and useStateHook for async Handling Ends=========== //
  // ======== useReducer =========== //
  // function toggle() {
  //   setChecked()
  // }
  // const [checked, toggle]= useReducer(
  //   (checked) => !checked,
  //   false
  //   )
  // return (
  //   <>
  //   <input type= "checkbox" value = {checked} onChange = {toggle }></input>
  //   <p> {checked? "checked": "not checked"}</p>
  //   </>
  // )
  // ======== useReducer =========== //
  // ======== useEffect and useState Hooks Start =========== //
  // const [emotion, setEmotion]  =  useState("happy");
  // const [secondary, setSecondary] = useState("tired");
  // useEffect( () => {
  //   console.log(`It's ${emotion} around here`)
  // }, [emotion])
  // useEffect( () => {
  //   console.log(`It's ${secondary} around here`)
  // }, [secondary])
  //   return (
  //     <>
  //     <h1>Current Emotion is {emotion} and {secondary}</h1>
  //     <button onClick= {() => setEmotion("happy")}>Happy </button>
  //     <button onClick= {() => setEmotion("frustrated")}>Frustrate </button>
  //     <button onClick= {() => setEmotion("Enthusiastic")}>Enthuse </button>
  //     <button onClick= {() => setSecondary("Craby")}>Craby </button>
  //     </>
  //   )
  // ======== useEffect and useStateHook Ends=========== //
  // return (
  //   <>
  //   {props.authorized ? <SecretComponent /> :<RegularComponent /> }
  //   </>
  // )
  // return (
  //   <div className="App">
  //     <Header name= "Ankur"/>
  //     <Main adjective= "amazing" dishes = {dishObjects}/>
  //     <Footer year = {new Date().getFullYear()}/>
  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header> */}
  //   </div>
  // );
}

export default App;
