//* Sign In buttons- Dont need right now*/
<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
  <Link
    href="#"
    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
  >
    Sign in
  </Link>
  <Link
    href="#"
    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
  >
    Sign up
  </Link>
</div>;

// For expanding different routes of pages in the navigation - Dont need right now

// headlessui Popover for More button - Dont need right now
<Popover className="relative">
  {({ open }) => (
    <>
      <Popover.Button
        className={classNames(
          open ? 'text-gray-900' : 'text-gray-500',
          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        )}
      >
        <span>More</span>
        <ChevronDownIcon
          className={classNames(
            open ? 'text-gray-600' : 'text-gray-400',
            'ml-2 h-5 w-5 group-hover:text-gray-500',
          )}
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                >
                  <item.icon
                    className="h-6 w-6 flex-shrink-0 text-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
              <div>
                <h3 className="text-base font-medium text-gray-500">
                  Recent Posts
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="truncate text-base">
                      <a
                        href={post.href}
                        className="font-medium text-gray-900 hover:text-gray-700"
                      >
                        {post.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View all posts
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  )}
</Popover>;

// headlessui Popover for Features button - Dont need right now
<Popover className="relative">
  {({ open }) => (
    <>
      <Popover.Button
        className={classNames(
          open ? 'text-red-200' : 'text-white',
          'group inline-flex items-center rounded-md bg-slate-900 text-base font-medium hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        )}
      >
        <span>Features</span>
        <ChevronDownIcon
          className={classNames(
            open ? 'text-gray-600' : 'text-gray-400',
            'ml-2 h-5 w-5 group-hover:text-gray-500',
          )}
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                >
                  <item.icon
                    className="h-6 w-6 flex-shrink-0 text-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
              {callsToAction.map((item) => (
                <div key={item.name} className="flow-root">
                  <a
                    href={item.href}
                    className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">{item.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  )}
</Popover>;

{
  /** Newsletter Sign Up */
}
<div className="self-end">
  <form action="" className="flex flex-row font-cuprum">
    <input
      className="border-none bg-[#343538] text-sm font-light text-[#8C8C8C]"
      type="email"
      placeholder="Sign up to our newsletter"
    />
    <button className="bg-[#A98E00] p-3 font-cuprum text-white" type="submit">
      Submit
    </button>
  </form>
</div>;
