import toast from 'react-hot-toast'

export function removeCopyFromSyncStorageArea(id: string) {
	chrome.storage.sync.remove(id)
	toast.success('Removed copy')
}

export function deleteSyncStorageArea() {
	// eslint-disable-next-line no-restricted-globals
	if (confirm('Are you sure you want to delete all copies?')) {
		chrome.storage.sync.clear()
		toast.success('Cleared all copies')
	}
}