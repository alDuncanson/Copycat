import { Menu, Transition } from '@headlessui/react'
import { FunnelIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export function FilterMenu({ handleFilter }: { handleFilter: (filterString: string) => void }) {
	return (
		<Menu as='div' className='relative inline-block text-left mr-2'>
			<Menu.Button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
				<FunnelIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
			</Menu.Button>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 z-10 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<div className='py-1 flex flex-col items-stretch'>
						<Menu.Item>
							{({ active }) => (
								<button
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm text-left'
									)}
									onClick={() => handleFilter('filter:image')}
								>
									Images
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm text-left'
									)}
									onClick={() => handleFilter('filter:text')}
								>
									Text
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm text-left'
									)}
									onClick={() => handleFilter('filter:number')}
								>
									Numbers
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm text-left'
									)}
									onClick={() => handleFilter('filter:duplicate')}
								>
									Duplicates
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}