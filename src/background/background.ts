(() => {
	const contextMenuProperties: chrome.contextMenus.CreateProperties = {
		id: 'copy-image',
		title: 'Copycat Image',
		contexts: ['image']
	}

	chrome.runtime.onInstalled.addListener(() => {
		chrome.contextMenus.create(contextMenuProperties, () => {
			if (chrome.runtime.lastError) {
				console.error(chrome.runtime.lastError)
			}
		})
	})

	chrome.contextMenus.onClicked.addListener((info: chrome.contextMenus.OnClickData) => {
		if (info.mediaType === 'image') {
			chrome.storage.local.set({
				[Date.now()]: {
					type: 'image',
					data: info.srcUrl
				}
			})
		}
	})
})()

export { }