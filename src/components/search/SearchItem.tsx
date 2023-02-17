import { CalendarIcon, ClipboardIcon, TrashIcon } from '@heroicons/react/20/solid'
import { removeCopyFromSyncStorageArea } from '../../utils/chrome-storage'
import { Copy, copyToClipboard } from '../../utils/clipboard'

export function SearchItem({ key, date, copy }: { key: string, date: string, copy: Copy }) {
	const copyDate = new Date(parseInt(date)).toLocaleString()

	function viewImage() {
		chrome.tabs.create({ url: copy.data })
	}

	return (
		<li key={key}>
			<div className='block'>
				<div className='flex items-center p-4'>
					<div className='min-w-0 flex-1'>
						<div className='truncate'>
							<div className='flex text-sm'>
								{copy.type === 'text' ?
									<p className='truncate font-medium text-indigo-600'>{copy.data}</p>
									:
									<img
										onClick={viewImage}
										src={copy.data}
										className='object-cover h-24 w-24 cursor-pointer'
										alt='Click to view'
									/>
								}
							</div>
							<div className='mt-2 flex'>
								<div className='flex items-center text-xs text-gray-500'>
									<CalendarIcon className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
									<time dateTime={copyDate}>{copyDate}</time>
								</div>
							</div>
						</div>
					</div>
					<div className='ml-3 flex-shrink-0'>
						<button
							type='button'
							className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
							title='Copy to Clipboard'
							onClick={() => copyToClipboard(copy.data)}
						>
							<ClipboardIcon
								className='h-4 w-4 text-white cursor-pointer'
								aria-hidden='true'
							/>
						</button>
					</div>
					<div className='ml-3 flex-shrink-0'>
						<button
							type='button'
							className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
							title='Delete Copy'
							onClick={() => removeCopyFromSyncStorageArea(date)}
						>
							<TrashIcon
								className='h-4 w-4 text-white cursor-pointer'
								aria-hidden='true'
							/>
						</button>
					</div>
				</div>
			</div>
		</li>
	)
}