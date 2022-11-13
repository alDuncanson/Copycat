import { createToast } from "./toasts"

export function removeCopyFromSyncStorageArea(id: string) {
	chrome.storage.sync.remove(id, () => {
		createToast('removed')
	})
}

export function deleteSyncStorageArea() {
	if (window.confirm('Are you sure you want to delete all copies?')) {
		chrome.storage.sync.clear(() => {
			createToast('cleared')
		})
	}
}