import { useEffect, useState } from "react"
import { Copy } from "./utils/clipboard"

export const useSyncStorage = () => {
	const [copies, setCopies] = useState<[string, Copy][]>([])

	useEffect(() => {
		chrome.storage.local.get(null, copies => {
			setCopies(Object.entries(copies))
		})

		chrome.storage.onChanged.addListener(() => {
			chrome.storage.local.get(null, (copies: { [key: string]: Copy }) => {
				setCopies(Object.entries(copies))
			})
		})
	}, [])

	return copies
}

export const useSearchFilter = () => {
	const [filterString, setFilterString] = useState('')

	function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
		setFilterString(event.target.value)
	}

	function clearFilter() {
		setFilterString('')
	}

	return { filterString, handleFilter, clearFilter }
}