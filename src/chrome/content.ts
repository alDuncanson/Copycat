(() => {
	document.addEventListener('copy', () => {
		navigator.clipboard.readText().then(text => {
			chrome.storage.sync.set({
				[Date.now()]: {
					type: 'text',
					data: text
				}
			})
		})
	})
})()

export { }