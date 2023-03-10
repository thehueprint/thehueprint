'use client';

import Image from 'next/image';
import Logo from '../public/Logo.png';
import Link from 'next/link';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

// import { ChevronDownIcon } from '@heroicons/react/20/solid';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];
// const recentPosts = [
//   { id: 1, name: 'Boost your conversion rate', href: '#' },
//   {
//     id: 2,
//     name: 'How to use search engine optimization to drive traffic to your site',
//     href: '#',
//   },
//   { id: 3, name: 'Improve your customer experience', href: '#' },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

export default function Header() {
  return (
    <header className="container w-full bg-[#082331]">
      <Popover className="relative">
        {/* Menus */}
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="flex items-center justify-between py-6  lg:justify-start lg:space-x-10">
            {/* Logo  */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link
                className="flex flex-row items-center justify-start"
                href="#"
              >
                <span className="sr-only">The Hueprint</span>
                <div className="relative h-10 w-10 lg:h-16 lg:w-16">
                  <Image
                    className="object-cover"
                    src={Logo}
                    alt="The Hueprint Logo"
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>

                <p className="hidden font-cuprum text-2xl text-white lg:block">
                  The Hueprint
                </p>
              </Link>
            </div>

            {/*Mobile Button Navigation  */}
            <div className="-my-2 -mr-2 lg:hidden">
              <Popover.Button className="focus:ring-inse inline-flex items-center justify-center rounded-md bg-[#082331] p-2 text-white focus:outline-none focus:ring-2 focus:ring-white">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            {/* Desktop Navigation  */}
            <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
              {/* Mission link  */}
              <Link
                className="text-base font-medium text-white hover:text-green-500"
                href="/"
                prefetch={false}
              >
                Mission
              </Link>

              {/* Features Dropdown or Link  */}
              <Link
                className="text-base font-medium text-white hover:text-green-500"
                href="/"
                prefetch={false}
              >
                features
              </Link>

              {/* Work link  */}
              <Link
                className="text-base font-medium text-white hover:text-green-500"
                href="/"
                prefetch={false}
              >
                Work
              </Link>

              {/* Team link  */}
              <Link
                className="text-base font-medium text-white hover:text-green-500"
                href="/"
                prefetch={false}
              >
                Team
              </Link>

              {/* Contact link  */}
              <Link
                className="text-base font-medium text-white hover:text-green-500"
                href="#footer"
                prefetch={false}
              >
                Contact
              </Link>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* Mobile Navigation Panel  */}
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden"
          >
            {/* Mobile Navigation header  */}
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Link
                      className="h-8 w-auto"
                      href="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>

                  {/* Mobile Navigation Close Button  */}
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>

                {/* Top Mobile Navigation Panel Links  */}
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Bottom Mobile Navigation Panel Links  */}
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Docs
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
