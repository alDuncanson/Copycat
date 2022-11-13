(() => {
	const contextMenuProperties: chrome.contextMenus.CreateProperties = {
		id: 'copy-image',
		title: 'Copycat Image',
		contexts: 'image'
	}

	chrome.runtime.onInstalled.addListener(() => {
		chrome.contextMenus.create(contextMenuProperties, () => {
			if (chrome.runtime.lastError) {
				console.error(chrome.runtime.lastError)
			}
		})
	})

	chrome.contextMenus.onClicked.addListener((info, tab) => {
		if (info.mediaType === 'image') {
			chrome.storage.sync.set({
				[Date.now()]: {
					type: 'text',
					data: info.srcUrl
				}
			})
		}
	})
})()

export { }