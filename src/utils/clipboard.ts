import { createToast } from './toasts'

export function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text)
	createToast('copied')
}

export interface Copy {
	type: string,
	data: string
}