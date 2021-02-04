import React, { Component } from 'react'
import { Divider, Grid, Container } from '@material-ui/core'

import Api from '../api'
import { MessageColumn } from './message-column'
import { Snackbar } from './snackbar'
import { ControlButtons } from './control-buttons'
import { NotificationWrapper } from './styled'
class MessageList extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      open: false,
      notification: '',
      messages: [],
    }
    this.removeMessage = this.removeMessage.bind()
    this.handleClose = this.handleClose.bind()
    this.handleClear = this.handleClear.bind()
    this.handleToggle = this.handleToggle.bind()
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message)
    },
  })

  componentDidMount() {
    this.api.start()
  }

  messageCallback(message) {
    const { messages, open, notification } = this.state
    const isOpen = open || message.priority === 1
    const newMsg = message.priority === 1 ? message.message : notification

    this.setState({
      messages: [
        ...messages.slice(),
        message,
      ],
      open: isOpen,
      notification: newMsg
    })
  }

  removeMessage = (msg) => {
    const { messages } = this.state
    
    this.setState({
      ...this.state,
      messages: messages.filter((message) => message.priority !== msg.priority || message.message !== msg.message)
    })
  }

  handleClose = () => {
    this.setState({
      ...this.state,
      open: false,
      notification: ''
    })
  }

  handleClear = () => {
    this.setState({
      messages: [],
      open: false,
      notification: ''
    })
  }

  handleToggle = () => {
    const isApiStarted = this.api.isStarted()
    if (isApiStarted) {
      this.api.stop()
    } else {
      this.api.start()
    }
    this.forceUpdate()
  }

  render() {
    const isApiStarted = this.api.isStarted()

    const errorMessages = this.state.messages.filter(msg => (msg.priority === 1))
    const warningMessages = this.state.messages.filter(msg => (msg.priority === 2))
    const infoMessages = this.state.messages.filter(msg => (msg.priority === 3))

    return (
      <div>
        <Grid style={{ margin: '40px 0' }}>
          <NotificationWrapper>
            <Snackbar
              open={this.state.open}
              message={this.state.notification}
              handleClose={this.handleClose}
            />
          </NotificationWrapper>
          <Divider style={{ margin: '10px 0' }} />
          <ControlButtons
            isStarted={isApiStarted}
            handleClear={this.handleClear}
            handleToggle={this.handleToggle}
          />
        </Grid>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <MessageColumn type={1} messages={errorMessages} handleRemove={this.removeMessage} />
            <MessageColumn type={2} messages={warningMessages} handleRemove={this.removeMessage} />
            <MessageColumn type={3} messages={infoMessages} handleRemove={this.removeMessage} />
          </Grid>
        </Container>
      </div>
    )
  }
}

export default MessageList
