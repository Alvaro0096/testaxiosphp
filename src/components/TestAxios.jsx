import React, { useState } from 'react';
import axios from 'axios';

const TestAxios = () => {
  const [data, setData] = useState({
    name: '',
    surname: '',
    age: '',
    email: '',
    subject: ''
  });

  const sendMail = () => {
    axios.post(process.env.REACT_APP_URLPHP, data)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail();
    // console.log(data);
  }

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h3>Form:</h3>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name:</label>
                <input 
                  id="name" 
                  name="name"
                  type="text" 
                  className="form-control" 
                  autoComplete="off"
                  onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="surname" className="form-label">Surname:</label>
                <input 
                  id="surname" 
                  name="surname"
                  type="text" 
                  className="form-control" 
                  autoComplete="off"
                  onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="age" className="form-label">Age:</label>
                <input 
                  id="age" 
                  name="age"
                  type="number" 
                  max="99"
                  maxLength={2}
                  className="form-control" 
                  autoComplete="off"
                  onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Mail:</label>
                <input 
                  id="email" 
                  name="email"
                  type="email" 
                  className="form-control" 
                  autoComplete="off"
                  onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Select option:</label>
              <select 
                id="subject" 
                name="subject" 
                className="form-select"
                onChange={(e) => setData({...data, [e.target.name]: e.target.value})}
              >
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
                <option value="forth">Forth</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-left">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default TestAxios