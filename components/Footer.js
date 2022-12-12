import siteMetadata from '@/data/siteMetadata'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noopener noreferrer" href={`mailto:${siteMetadata.email}`}>
            <FiMail className={`hover:text-blue-500 h-6 w-6`} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={siteMetadata.github}>
            <FaGithub className={`hover:text-blue-500 h-6 w-6`} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={siteMetadata.linkedin}>
            <FaLinkedin className={`hover:text-blue-500 h-6 w-6`} />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </div>
      </div>
    </footer>
  )
}
