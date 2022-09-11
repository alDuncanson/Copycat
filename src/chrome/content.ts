(() => {
	document.addEventListener('copy', () => {
		navigator.clipboard.readText().then(text => {
			chrome.storage.sync.set({ [Date.now()]: text })
		})
	})
})()

export { }