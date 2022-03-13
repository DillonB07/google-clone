import { GlobeIcon } from '@heroicons/react/solid'

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>United Kingdom</p>
      </div>
      <div className="md:gird-cols-2 grid grid-flow-row-dense grid-cols-1 gap-y-4 px-8 py-3 lg:grid-cols-3">
        <div className="flex items-center justify-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="mr-1 h-5 text-green-700" />
          <p className="link">Carbon neutral since 2007</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <a
            href="https://www.google.co.uk/intl/en_uk/ads/"
            className="link block"
          >
            Advertising
          </a>
          <a href="https://www.google.co.uk/services/" className="link block">
            Business
          </a>
          <a
            href="https://www.google.com/search/howsearchworks/"
            className="link block"
          >
            How Search works
          </a>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <a href="https://policies.google.com/privacy" className="link block">
            Privacy
          </a>
          <a href="https://policies.google.com/terms" className="link block">
            Terms
          </a>
          <a href="https://myaccount.google.com" className="link block">
            Settings
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
