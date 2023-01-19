import Image from 'next/image'
import exampleImage from '../public/exampleImage.jpg'

export default function Card({ addHover }) {
  return (
    <div className="card group relative bg-white transition hover:z-[1] hover:shadow-2xl">
      <div className={`relative space-y-8 p-8 ${addHover}`}>
        <Image src={exampleImage} className="w-10" width={512} height={512} alt="Feature icon" />

        <div className="space-y-2">
          <h5 className="group-hover: text-xl font-medium text-gray-800 text-[] transition">First feature</h5>
          <p className="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
        </div>
        <a href="#" className="flex items-center justify-between group-hover:text-yellow-600">
          <span className="text-sm">Read more</span>
          <span className="-translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            &rarr;
          </span>
        </a>
      </div>
    </div>
  )
}
