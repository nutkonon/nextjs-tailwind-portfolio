import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import experienceData from '@/data/experienceData'
import Image from '@/components/Image'

const ExperienceCard = ({ title, desc, year, company, companyLink, imgSrc }) => {
  return (
    <div className="flex items-center relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-2xl md:text-3xl font-bold text-gray-300 dark:text-gray-600">
        {year}
      </h1>
      <Image
        alt={title}
        src={imgSrc}
        className="rounded md:h-36 lg:h-48"
        width={100}
        height={100}
      />
      <div className="mx-4">
        <h1 className="font-semibold text-xl">{title}</h1>
        <a href={companyLink} className="text-gray-500">
          {company}
        </a>
        <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
      </div>
    </div>
  )
}

export default function Experience() {
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
                <ExperienceCard
                  key={idx}
                  title={exp.title}
                  desc={exp.desc}
                  year={exp.year}
                  company={exp.company}
                  companyLink={exp.companyLink}
                  imgSrc={exp.imgSrc}
                />
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
    </>
  )
}
