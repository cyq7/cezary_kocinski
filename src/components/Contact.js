import { useState } from 'react';
import axios from 'axios'
import './styles/Contact.scss'

const Contact = () => {

  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  });

const onInputChange = event => {
const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };
 
const handleSubmit = e => {
  e.preventDefault();
  console.log(state);

  axios({
    method: "POST",
    url:"http://localhost:3002/send",
    data: state
  }).then((response)=>{
    if (response.data.status === 'success') {
      alert("Message Sent.");
      resetForm()
    } else if(response.data.status === 'fail') {
      alert("Message failed to send.")
    }
  })
}

const resetForm = () => {
    this.setState({name: "", email: "", message: ""})
  }

    return (
        <div className='contact'>
            <h1>CONTACT</h1>
            <div className='container'>
                <div className='form'>
                    <h4>Feel free to write a direct message</h4>
                        <form id="contact-form" onSubmit={handleSubmit} autoComplete="off" method="POST">
                            <div className="form-group">
                                <input type="text" name='name' value={state.name} required onChange={onInputChange} />
                                <label className="label-name" htmlFor="name">
                                  <span 
                                    className="content-name"
                                    style={state.name === "" ? null : {transform: "translateY(-130%)", color: "rgb(255, 0, 50)"}}
                                  >Name</span>
                                </label>                               
                            </div>
                            <div className="form-group">
                                <input type="email" name='email' value={state.email} required onChange={onInputChange}/>
                                <label  className="label-name" htmlFor="email">
                                  <span 
                                    className="content-name"
                                    style={state.email === "" ? null : {transform: "translateY(-130%)", color: "rgb(255, 0, 50)"}}
                                    >Email address</span>
                                </label>
                            </div>
                            <div 
                            className="message-group"
                            style={state.message === "" ? null : {height: "200px", paddingTop: "2em"}}>
                                <textarea rows="10" name='message' value={state.message} required onChange={onInputChange}></textarea>
                                <label className="label-text" htmlFor="message">
                                  <span className="content-text">Message</span>
                                </label>
                            </div>
                            <button type="submit">Send</button>
                    </form>
                </div>
                <div className='social-media'>
                    <h4>You can also find me here</h4>
                    <div className='items'>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;