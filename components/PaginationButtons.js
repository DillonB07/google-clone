import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'

function PaginationButtons() {
  const router = useRouter()

  const startIndex = Number(router.query.start) || 0

  return (
    <div className="mb-10 flex max-w-lg justify-between text-blue-700">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow cursor-pointer flex-col items-center hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
            <p>Page {startIndex / 10}</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex}`}>
        <div className="flex flex-grow cursor-pointer flex-col items-center hover:underline">
          <DotsCircleHorizontalIcon className="h-5" />
          <p>Current</p>
          <p>Page {startIndex / 10 + 1}</p>
        </div>
      </Link>

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow cursor-pointer flex-col items-center hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
          <p>Page {startIndex / 10 + 2}</p>
        </div>
      </Link>
    </div>
  )
}

export default PaginationButtons
