import { createToast } from "./toasts"

export function removeCopyFromSyncStorageArea(id: string) {
	chrome.storage.local.remove(id, () => {
		createToast('removed')
	})
}

export function deleteSyncStorageArea() {
	if (window.confirm('Are you sure you want to delete all copies?')) {
		chrome.storage.local.clear(() => {
			createToast('cleared')
		})
	}
}