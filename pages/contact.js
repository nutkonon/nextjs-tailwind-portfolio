import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
        </div>
        <div className="container py-8">
          <div className="grid grid-cols-6 gap-4">
            <div className="grid justify-items-start col-start-1 col-end-7 sm:col-start-2 sm:col-span-4">
              <div className="grid grid-rows-1 grid-flow-col gap-4">
                <a className="contents" href={`tel:${siteMetadata.phone}`}>
                  <FiPhone className="h-8 w-8 mx-4 my-4" />
                  <h3 className="pt-4 pb-2 sm:text-xl md:text-2xl">{siteMetadata.phone}</h3>
                </a>
              </div>
            </div>
            <div className="grid justify-items-start col-start-1 col-end-7 sm:col-start-2 sm:col-span-4">
              <div className="grid grid-rows-1 grid-flow-col gap-4">
                <a
                  className="contents"
                  href={`mailto:${siteMetadata.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMail className="h-8 w-8 mx-4 my-4" />
                  <h3 className="pt-4 pb-2 sm:text-xl md:text-2xl">{siteMetadata.email}</h3>
                </a>
              </div>
            </div>
            <div className="grid justify-items-start col-start-1 col-end-7 sm:col-start-2 sm:col-span-4">
              <div className="grid grid-rows-1 grid-flow-col gap-4">
                <FiMapPin className="h-8 w-8 mx-4 my-4" />
                <h3 className="pt-4 pb-2 sm:text-xl md:text-2xl">{siteMetadata.location}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
