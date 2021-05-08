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
                    <h3>Feel free to write a direct message</h3>
                        <form id="contact-form" onSubmit={handleSubmit} method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' value={state.name} onChange={onInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" name='email' value={state.email} onChange={onInputChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea rows="10" name='message' value={state.message} onChange={onInputChange}></textarea>
                            </div>
                            <button type="submit">Send</button>
                    </form>
                </div>
                <div className='social-media'>
                    <h3>You can also find me here</h3>
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