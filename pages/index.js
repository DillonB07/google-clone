import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full justify-between p-5 text-sm text-gray-700">
        <div className="flex items-center space-x-4">
          {/* Left */}
          <a href="https://about.google" className="link">
            About
          </a>
          <a href="https://store.google.com" className="link">
            Store
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <a href="https://mail.google.com" className="link">
            Gmail
          </a>
          <a href="https://www.google.co.uk/imghp" className="link">
            Images
          </a>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100" />

          <Avatar url="https://dillonb07.is-a.dev/static/images/DillonB07.png" />
        </div>
      </header>

      {/* Body */}

      {/* Footer */}
    </div>
  )
}
