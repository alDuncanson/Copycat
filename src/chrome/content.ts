export { }

const main = () => {
	console.log('[content.ts] Main')

	// listen for clipboard events
	document.addEventListener('copy', (event: ClipboardEvent) => {
		console.log('[content.ts] copy', event)
	})
}

main();