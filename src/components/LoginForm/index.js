import {Component} from 'react'


import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    login:true
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }
  onCreater = () =>{
    this.setState({login:true})

  }
  onteamMate = () =>{
    this.setState({login:false})
  }



  submitForm = () => {
    const {username,password} = this.state


    if ((username !== "")  && (password !=="")) {
      this.setState({errorMsg:""})

    } else {
      this.setState({errorMsg:"password Required"})
      
    }
  }
    

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {errorMsg,login} = this.state
    

    return (
      <div className="login-form-container">
        <div className='allign-left'>
        <img
          src="https://res.cloudinary.com/ccbpmohan/image/upload/v1675330788/logoplanesto_aqxafc.jpg"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://res.cloudinary.com/ccbpmohan/image/upload/v1675330788/logoplanesto_aqxafc.jpg"
          className="login-img"
          alt="website login"
        />
        <p className='discription'>
        We make an effort to spread enthusiasm across palnesto.<br />
         For us, maintaining a positive and helpful attitude <br /> 
         at all times is essential and, might we say,evident.
        </p>
        </div>
        
        <div className="form-container">
          <img
            src="https://res.cloudinary.com/ccbpmohan/image/upload/v1675331068/logoplanesto_s9u31z.jpg"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />{login && <div>
            <button className='buttons creater' onClick={this.onCreater}>CREATER</button>
            <button className='buttons' onClick={this.onteamMate}>TEAM MATE</button>
          </div> }
          {!login && <div>
            <button className='buttons' onClick={this.onCreater}>CREATER</button>
            <button className='buttons teamMate' onClick={this.onteamMate}>TEAM MATE</button>
          </div> }
          
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          
            <button type="button" onClick={this.submitForm} className="login-button">
            Login
            </button>
         
          
          <p className="error-message">{errorMsg}</p>
        </div>
      </div>
    )
  }
}

export default LoginForm
