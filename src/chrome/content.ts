(() => {
	document.addEventListener('copy', () => {
		navigator.clipboard.readText().then(text => {
			chrome.storage.local.set({
				[Date.now()]: {
					type: 'text',
					data: text
				}
			})
		})
	})
})()

export { }