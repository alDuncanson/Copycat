import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { useSearchFilter, useSyncStorage } from '../hooks'
import { removeCopyFromSyncStorageArea } from '../utils/chrome-storage'

export function Search() {
	const copiesFromStorage = useSyncStorage()
	const { filterString, handleFilter, clearFilter } = useSearchFilter()

	return (
		<Fragment>
			<div className="mt-1 flex rounded-md shadow-sm">
				<div className="relative flex flex-grow items-stretch focus-within:z-10">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<MagnifyingGlassIcon
							className="h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
					</div>
					<input
						type="text"
						className="block w-full rounded-md border-gray-300 px-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						placeholder="you@example.com"
						value={filterString}
						onChange={handleFilter}
					/>
				</div>
				<button
					type="button"
					className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
					onClick={clearFilter}
				>
					<XMarkIcon
						className="h-5 w-5 text-gray-400 cursor-pointer"
						aria-hidden="true"
					/>
				</button>
			</div>
			{copiesFromStorage.filter(copy => copy[1].toLowerCase().includes(filterString.toLowerCase())).map(([key, value]) => {
				return (
					<div id={key} className='flex flex-row'>
						<p>{value}</p>
						<button
							className=''
							onClick={() => removeCopyFromSyncStorageArea(key)}
						>Remove</button>
					</div>
				)
			})}
		</Fragment>
	)
}