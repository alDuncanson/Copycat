import toast from 'react-hot-toast'

const toasts = {
	'cleared': 'Cleared all copies',
	'removed': 'Removed copy',
	'copied': 'Copied to clipboard'
}

export function createToast(type: keyof typeof toasts) {
	toast.dismiss(type)
	toast.success(toasts[type], {
		id: type
	})
}