import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { useSyncStorage } from '../../hooks'
import { FilterMenu } from '../FilterMenu'
import { KebabMenu } from '../KebabMenu'

interface SearchBarProps {
	filterString: string,
	handleFilter: (filterString: string) => void,
	clearFilter: () => void
}

export function SearchBar({ filterString, handleFilter, clearFilter }: SearchBarProps) {
	const copiesFromStorage = useSyncStorage()

	return (
		<div id='SearchBar' className='flex flex-row items-center px-4'>
			<div className='flex flex-1 rounded-md shadow-sm border border-gray-300 mr-2'>
				<div className='relative flex flex-grow items-stretch focus-within:z-10'>
					<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
						<MagnifyingGlassIcon
							className='h-5 w-5 text-gray-400'
							aria-hidden='true'
						/>
					</div>
					<input
						type='text'
						className='block w-full rounded-md border-gray-300 px-10 focus:border-violet-800 focus:ring-violet-800'
						placeholder={`Search copies (${copiesFromStorage.length} total)`}
						value={filterString}
						onChange={event => handleFilter(event.target.value)}
					/>
				</div>
				<button
					type='button'
					className='relative -ml-px inline-flex items-center space-x-2 rounded-r-md border-l border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-violet-800 focus:outline-none focus:ring-1 focus:ring-violet-800'
					onClick={clearFilter}
				>
					<XMarkIcon
						className='h-5 w-5 text-gray-400 cursor-pointer'
						aria-hidden='true'
					/>
				</button>
			</div>
			<FilterMenu handleFilter={handleFilter} />
			<KebabMenu />
		</div>
	)
}