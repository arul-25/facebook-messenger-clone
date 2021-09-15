import "./App.css"
import React, {useEffect, useState} from "react"
import {Button, FormControl, InputLabel, Input} from "@material-ui/core"
import Message from "./Message"
import db from "./config"
import firebase from "firebase"
import FlipMove from "react-flip-move"
import {Send} from "@material-ui/icons"
import {IconButton} from "@material-ui/core"

function App() {
	const [input, setInput] = useState("")
	const [messages, setMessages] = useState([])
	const [username, setUsername] = useState("")

	useEffect(() => {
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot(snapshot => {
				setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
			})
	}, [])

	useEffect(() => {
		setUsername(prompt("please enter your name"))
	}, [])

	const sendMessage = e => {
		e.preventDefault()

		db.collection("messages").add({
			message: input,
			username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})
		setMessages([...messages, {username, message: input}])
		setInput("")
	}

	return (
		<div className="App">
			<img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt="messenger-logo" />
			<h1>Messenger Clone</h1>
			<h2>Welcome {username}</h2>

			<form onSubmit={sendMessage} className="app__form">
				<FormControl className="app__formControl">
					<Input className="app__input" placeholder="Enter a message..." id="my-input" value={input} onChange={e => setInput(e.target.value)} />
					<IconButton disabled={!input} type="submit" onClick={sendMessage} color="primary" variant="outline" className="app__iconButton">
						<Send />
					</IconButton>
				</FormControl>
			</form>

			<FlipMove>
				{messages.map(({id, message}) => (
					<Message username={username} message={message} key={id} />
				))}
			</FlipMove>
		</div>
	)
}

export default App
