import { CopyDataManager } from '../utils/copy-data'

(() => {
	document.addEventListener('copy', () => {
		navigator.clipboard.readText().then((clipboardData: string) => {
			const storageData = CopyDataManager.getCopyData(clipboardData)

			chrome.storage.local.set({
				[Date.now()]: storageData
			})
		})
	})
})()

export { }