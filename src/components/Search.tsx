import { Menu, Transition } from '@headlessui/react'
import { CalendarIcon, ClipboardIcon, EllipsisVerticalIcon, MagnifyingGlassIcon, TrashIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { useSearchFilter, useSyncStorage } from '../hooks'
import { clearSyncStorageArea, removeCopyFromSyncStorageArea } from '../utils/chrome-storage'
import { togglePopupWindow } from '../utils/chrome-window'
import { copyToClipboard } from '../utils/clipboard'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export function Search() {
	const copiesFromStorage = useSyncStorage()
	const { filterString, handleFilter, clearFilter } = useSearchFilter()

	return (
		<div id='Search'>
			<div id='SearchBar' className='flex flex-row items-center px-4'>
				<div className="mr-4 flex flex-1 rounded-md shadow-sm border border-gray-300">
					<div className="relative flex flex-grow items-stretch focus-within:z-10">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<MagnifyingGlassIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</div>
						<input
							type="text"
							className="block w-full rounded-md border-gray-300 px-10 focus:border-indigo-500 focus:ring-indigo-500"
							placeholder={`Search copies (${copiesFromStorage.length} total)`}
							value={filterString}
							onChange={handleFilter}
						/>
					</div>
					<button
						type="button"
						className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border-l border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
						onClick={clearFilter}
					>
						<XMarkIcon
							className="h-5 w-5 text-gray-400 cursor-pointer"
							aria-hidden="true"
						/>
					</button>
				</div>
				<Menu as="div" className="relative inline-block text-left">
					<div>
						<Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
							<EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="absolute right-0 z-10 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div className="py-1">
								<Menu.Item>
									{({ active }) => (
										<button
											className={classNames(
												active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
												'block px-4 py-2 text-sm'
											)}
											onClick={togglePopupWindow}
										>
											Popout Window
										</button>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<button
											className={classNames(
												active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
												'block px-4 py-2 text-sm'
											)}
											onClick={clearSyncStorageArea}
										>
											Delete all copies
										</button>
									)}
								</Menu.Item>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
			<ul id='SearchResults' className="divide-y divide-gray-200">
				{copiesFromStorage.length === 0 ?
					<p className='text-center mt-8'>Copy text to your clipboard and it will show up here!</p>
					: copiesFromStorage.filter(copy => copy[1].toLowerCase().includes(filterString.toLowerCase())).map(([key, value]) => {
						const copyDate = new Date(parseInt(key)).toLocaleString()
						return (
							<li key={key}>
								<div className="block">
									<div className="flex items-center p-4">
										<div className="min-w-0 flex-1">
											<div className="truncate">
												<div className="flex text-sm">
													<p className="truncate font-medium text-indigo-600">{value}</p>
												</div>
												<div className="mt-2 flex">
													<div className="flex items-center text-sm text-gray-500">
														<CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
														<time dateTime={copyDate}>{copyDate}</time>
													</div>
												</div>
											</div>
										</div>
										<div className="ml-3 flex-shrink-0">
											<button
												type="button"
												className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
												title="Copy to Clipboard"
												onClick={() => copyToClipboard(value)}
											>
												<ClipboardIcon
													className="h-4 w-4 text-white cursor-pointer"
													aria-hidden="true"
												/>
											</button>
										</div>
										<div className="ml-3 flex-shrink-0">
											<button
												type="button"
												className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
												title="Delete Copy"
												onClick={() => removeCopyFromSyncStorageArea(key)}
											>
												<TrashIcon
													className="h-4 w-4 text-white cursor-pointer"
													aria-hidden="true"
												/>
											</button>
										</div>
									</div>
								</div>
							</li>
						)
					})}
			</ul>
		</div>
	)
}