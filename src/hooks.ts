import { useEffect, useState } from "react"

export const useSyncStorage = () => {
	// leaving this as [sting, any] because I plan to expand this to include more than just strings
	const [copies, setCopies] = useState<[string, any][]>([])

	useEffect(() => {
		chrome.storage.sync.get(null, copies => {
			setCopies(Object.entries(copies))
		})

		chrome.storage.onChanged.addListener(() => {
			chrome.storage.sync.get(null, (copies: { [key: string]: any }) => {
				setCopies(Object.entries(copies))
			})
		})
	}, [])

	return copies
}

export const useSearchFilter = () => {
	// typed search/filter string
	const [filterString, setFilterString] = useState('')

	// update filter string as user types
	function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
		setFilterString(event.target.value)
	}

	// clear filter string
	function clearFilter() {
		setFilterString('')
	}

	return { filterString, handleFilter, clearFilter }
}