export function togglePopupWindow() {
	chrome.windows.getCurrent(window => {
		if (window.type === 'popup' && window.id) {
			chrome.windows.remove(window.id)
		} else {
			chrome.windows.create({
				url: '/index.html',
				type: 'popup',
				width: 400,
				height: 600
			})
		}
	})
}