import { Toaster } from 'react-hot-toast'
import { Header } from './components/Header'
import { Search } from './components/Search'

function App() {
	return (
		<div id='App' className='flex flex-col'>
			<Toaster />
			<Header />
			<Search />
		</div>
	)
}

export default App
