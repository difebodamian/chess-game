import { useState } from 'react'
import { TURNS } from './logic/index'

import './App.css'
import { Board } from './components/Board'

function App() {
	const [board, setBoard] = useState(Array(64).fill(null))
	const [turn, setTurn] = useState(TURNS.black)

	return (
		<div className='App'>
			<Board board={board}></Board>
		</div>
	)
}

export default App
