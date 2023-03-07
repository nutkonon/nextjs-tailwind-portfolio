import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import experienceData from '@/data/experienceData'
import Image from '@/components/Image'
import { useState } from 'react'

const ExperienceCard = ({ exp, viewDetail }) => {
  return (
    <div className="flex items-center relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-2xl md:text-3xl font-bold text-gray-300 dark:text-gray-600">
        {exp.year}
      </h1>
      <Image
        alt={exp.title}
        src={exp.imgSrc}
        className="rounded md:h-36 lg:h-48"
        width={100}
        height={100}
      />
      <div className="mx-4">
        <h1 className="font-semibold text-xl">{exp.title}</h1>
        <a href={exp.companyLink} className="text-gray-500">
          {exp.company}
        </a>
        <p className="text-gray-600 dark:text-gray-400 my-2">{exp?.desc}</p>
        {exp.responlity != undefined ? (
          <a
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
            onClick={() => viewDetail(exp)}
          >{`View Responlity`}</a>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const [open, setOpen] = useState('hidden')
  const [detail, setDetail] = useState(undefined)
  const viewDetail = (val) => {
    setOpen('')
    setDetail(val)
  }

  return (
    <>
      <PageSEO
        title={`Experience - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Experience
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
            {experienceData.map((exp, idx) => (
              <div key={idx}>
                <ExperienceCard key={idx} exp={exp} viewDetail={viewDetail} />
                {idx === experienceData.length - 1 ? null : (
                  <div className="divider-container flex flex-col items-center -mt-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                      <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                    </div>
                    <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Overlay element --> */}
      <div
        id="overlay"
        className={`fixed ${open} z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60`}
      ></div>

      {/* <!-- The dialog --> */}
      <div
        id="dialog"
        className={`${open} fixed z-50 md:top-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit bg-white dark:bg-gray-800 rounded-md px-8 py-6 space-y-5 drop-shadow-lg`}
      >
        <p className="font-semibold text-xl">{detail?.title}</p>
        <p className="font-semibold text-l text-gray-500">{detail?.company}</p>
        <div className="py-5 border-t border-b border-gray-300">
          <ul className="px-5 list-disc">
            {detail?.responlity?.map((val, index) => {
              return <li key={index}>{val}</li>
            })}
          </ul>
        </div>
        <div className="flex justify-end">
          {/* <!-- This button is used to close the dialog --> */}
          <button
            id="close"
            className="px-5 py-2 bg-red-500 hover:bg-red-700 text-white cursor-pointer rounded-md"
            onClick={() => setOpen('hidden')}
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}
