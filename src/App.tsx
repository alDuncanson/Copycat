import { useEffect, useState } from 'react'
import './App.css'

function App() {

	const [copies, setCopies] = useState<[string, string][]>([])

	useEffect(() => {
		chrome.storage.sync.get(null, copies => {
			setCopies(Object.entries(copies))
		})
	})

	function removeCopy(id: string) {
		chrome.storage.sync.remove(id)
	}

	function clearCopies() {
		chrome.storage.sync.clear()
	}

	return (
		<div className='App'>
			<button onClick={clearCopies}>Clear All</button>
			{copies.map(([key, value]) => {
				return (
					<div id={key} className='copy'>
						<p>{value}</p>
						<button onClick={() => removeCopy(key)}>Remove</button>
					</div>
				)
			})}
		</div>
	)
}

export default App
