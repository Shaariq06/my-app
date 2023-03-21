import './App.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from './components/header';
import Button from './components/button';
import Input from './components/input';
import Nav from './components/nav';


function App() {

  const links = [{link: "url.com" ,label: "Home"},
    {link: "url.com", label: "Salaah Times"},
    {link: "url.com", label: "Donations"},
    // {link: "url.com", label: "Donations"},
    // {link: "url.com", label: "Donations"},
    ]

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [formValues, setFormValues] = useState("");
  const [showUserDetails, setShowUserDetails] = useState("");

  const changeHandler = (event) => {
    const ele = event.target;

    if (ele.name  === 'firstName') {
      setFirstName(ele.value);
    }
    if (ele.name  === 'lastName') {
      setLastName(ele.value);
    }
}

const submitHandler = (event) => {
  if (firstName !== "" && lastName !== "") {
    setFormValues({
      firstName: firstName,
      lastName: lastName
    });
    setShowUserDetails(true);
  }
}

  return (
    <div className="App">
      <Nav links={links}></Nav>

      <Header>React Form</Header>
      <form>
        <Input name="firstName" type="text" placeHolder="First name" onChange={changeHandler} label="First Name: " />
        <Input name="lastName" type="text" placeHolder="Last name" onChange={changeHandler} label="Last Name: " />
        <Button onClick={submitHandler}>Submit</Button>
      </form>
      {showUserDetails && (<Navigate to="/user-details" replace={true} state={formValues}/>)}
    </div>

  );
}

export default App;