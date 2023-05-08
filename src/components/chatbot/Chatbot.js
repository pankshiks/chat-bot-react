import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import Link from './Link'
import Review from './review'
import Company ,{Product}from './compo';
import '../../App.css'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0f4d4a',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0f4d4a',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'ChatBot',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)
  const [names,setNames] = useState("")

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }
let upname = '';
  if(names !=''){
    console.log("value-------",names)
    upname = names
    console.log(upname);
  }

  if(upname){
    console.log("heloo00000000000000")
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hellos!',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'What is your  name?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  setNames(value)
                  console.log("valuw--",value)
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hi,{previousValue} I am LN Bot! What can I do for you?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'Potato News', trigger: '4' },
                { value: 2, label: 'Products', trigger: '3' },
                { value: 3, label: 'Events', trigger: '5' },
                { value: 4, label: 'Directory of all *Companies*', trigger: '6' },
              ],
            },
            {
              id: '3',
              component: <Product />,
              trigger: 'q-submit',
            },
            {
              id: '4',
              message:
              'Here is a link to the latest articles related to potatos! globally Potato. https://test-potatopro.com/news',
              trigger: 'q-submit',
            },
            {
              id: '5',
              component: <Link />,
              trigger: 'q-submit',
            },
            {
              id: '6',
              component: <Company />,
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'Potato News', trigger: '4' },
                { value: 2, label: 'Products', trigger: '3' },
                { value: 3, label: 'Events', trigger: '5' },
                { value: 4, label: 'Directory of all *Companies*', trigger: '6' },
                { value: 5, label: 'Further Query', trigger: 'name' },
              ],
            },
            {
              id: 'name',
              message: `Hi Buddy! What is your gender?`,
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: 'male', label: 'Male', trigger: '7' },
                { value: 'female', label: 'Female', trigger: '7' },
              ],
            },
            {
              id: '7',
              message: 'How old are you?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: 'msgs',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
  
                return true;
              },
            },
            {
              id: 'msgs',
              message: 'Great! Check out your summary',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Would you like to update some field?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
                { value: 'no', label: 'No', trigger: 'end-message' },
                
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '7',
            },
            {
              id: 'end-message',
              message: 'Thanks! Your data was submitted successfully!',
              end: true,
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
            <i className="fa fa-minus"></i>
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
            <i className="fa fa-plus"></i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
