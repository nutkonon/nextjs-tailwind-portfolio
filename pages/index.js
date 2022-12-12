import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import TechStackComponent from '@/components/TechStack'

const Index = () => {
  return (
    <>
      <PageSEO title={`About - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 xl:col-span-1">
            <Image
              src={siteMetadata.image}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{siteMetadata.bio}</div>
          </div>
          <div className="xl:col-span-2">
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{`Tech Stack`}</h3>
            <div className="flex flex-row flex-wrap mt-8">
              <TechStackComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
