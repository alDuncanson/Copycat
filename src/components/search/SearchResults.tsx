import { useSyncStorage } from '../../hooks'
import { Copy } from '../../utils/clipboard'
import { SearchItem } from './SearchItem'

export function SearchResults({ filterString }: { filterString: string }) {
	const copiesFromStorage = useSyncStorage()

	const filteredCopies = copiesFromStorage.filter(([key, copy]) => {
		if (copy.type === 'text') {
			return copy.data.toLowerCase().includes(filterString.toLowerCase())
		} else {
			return true
		}
		// TODO filter by date as well as images?
	})

	return (
		<ul id='SearchResults' className='divide-y divide-gray-200'>
			{copiesFromStorage.length === 0 ?
				<p className='text-center mt-8'>Copy text to your clipboard and it will show up here!</p>
				: filteredCopies.length === 0 ? <p className='text-center mt-8'>No copies match your search query</p>
					: filteredCopies.map(([key, copy]: [string, Copy]) => {
						return (
							<SearchItem key={key} date={key} copy={copy} />
						)
					})}
		</ul>
	)
}