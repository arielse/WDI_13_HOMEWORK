import React from "react"

export default class PasswordStrength extends React.Component {
  constructor(props) {
    super(props)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.state = {
      content: ""
    }
  }
  onPasswordChange(event) {
    this.setState({ content: event.target.value })
    console.log(this.state.content)
  }

  render() {
    return <div>
      <input type="password"
      onChange={this.onPasswordChange}
      value={this.state.content} />
      <p>weak</p>
    </div>
  }
}
