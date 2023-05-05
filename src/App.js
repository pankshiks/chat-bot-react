import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'
import Slider from './components/Slider'
import Chatbot from './components/chatbot/Chatbot'

const App = () => {
  return (
    <Router>
      <main className="py-3">
        <Container>
          <div className="bot">
            <Route path="/chat-bot-react/build/" component={Chatbot} exact />
          </div>
        </Container>
      </main>
    </Router>
  )
}

export default App
