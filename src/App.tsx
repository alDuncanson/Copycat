import { useEffect, useState } from 'react'
import './App.css'

function App() {

	const [items, setItems] = useState<[string, string][]>([])

	useEffect(() => {
		chrome.storage.sync.get(null, items => {
			setItems(Object.entries(items))
		})
	}, [])

	return (
		<div className="App">
			{items.map(([key, value]) => {
				return <div id={key}>{value}</div>
			})}
		</div>
	)
}

export default App
