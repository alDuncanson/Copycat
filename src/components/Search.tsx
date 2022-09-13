import { useSearchFilter } from '../hooks'
import { SearchBar } from './SearchBar'
import { SearchResults } from './SearchResults'

export function Search() {
	const { filterString, handleFilter, clearFilter } = useSearchFilter()

	return (
		<div id='Search'>
			<SearchBar
				filterString={filterString}
				handleFilter={handleFilter}
				clearFilter={clearFilter}
			/>
			<SearchResults filterString={filterString} />
		</div>
	)
}