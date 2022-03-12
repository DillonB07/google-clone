import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'

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
          {/* <ViewGridIcon className="h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100" /> */}
          <svg
            className="gb_Se h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>

          <Avatar url="https://dillonb07.is-a.dev/static/images/DillonB07.png" />
        </div>
      </header>

      <form className="mt-44 flex flex-grow flex-col items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />

        <div className="mt-5 flex w-full max-w-md items-center rounded-full border border-gray-200 px-5 py-3 focus-within:shadow-lg hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="mr-3 h-5 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="ml-3 h-5 text-gray-500" />
        </div>

        <div className="mt-8 flex w-1/2 flex-col justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
    </div>
  )
}
