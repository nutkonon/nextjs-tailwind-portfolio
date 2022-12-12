import {
  SiJavascript,
  SiCsharp,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiMysql,
  SiOracle,
  SiMongodb,
  SiTypescript,
  SiJquery,
  SiGithub,
  SiGitlab,
  SiJira,
  SiJenkins,
  SiDocker,
  SiApachekafka,
  SiReact,
  SiMaterialui,
  SiAntdesign,
  SiNextdotjs,
  SiTailwindcss,
  SiKubernetes,
} from 'react-icons/si'
import { FaBootstrap, FaGitAlt, FaNode } from 'react-icons/fa'

const TechStack = [
  { skill: <SiCsharp className="h-20 w-20 mx-4 my-4" />, name: 'C#' },
  { skill: <SiDotnet className="h-20 w-20 mx-4 my-4" />, name: 'Dotnet' },
  { skill: <SiMicrosoftsqlserver className="h-20 w-20 mx-4 my-4" />, name: 'SQL Server' },
  { skill: <SiMysql className="h-20 w-20 mx-4 my-4" />, name: 'MySQL' },
  { skill: <SiOracle className="h-20 w-20 mx-4 my-4" />, name: 'Oracle DB' },
  { skill: <SiMongodb className="h-20 w-20 mx-4 my-4" />, name: 'MongoDB' },
  { skill: <FaNode className="h-20 w-20 mx-4 my-4" />, name: 'Node.js' },
  { skill: <SiJavascript className="h-20 w-20 mx-4 my-4" />, name: 'JavaScript' },
  { skill: <SiTypescript className="h-20 w-20 mx-4 my-4" />, name: 'TypeScript' },
  { skill: <SiReact className="h-20 w-20 mx-4 my-4" />, name: 'React' },
  { skill: <SiNextdotjs className="h-20 w-20 mx-4 my-4" />, name: 'Next.js' },
  { skill: <SiMaterialui className="h-20 w-20 mx-4 my-4" />, name: 'MUI' },
  { skill: <SiAntdesign className="h-20 w-20 mx-4 my-4" />, name: 'Antd' },
  { skill: <SiTailwindcss className="h-20 w-20 mx-4 my-4" />, name: 'Tailwindcss' },
  { skill: <FaBootstrap className="h-20 w-20 mx-4 my-4" />, name: 'Bootstrap' },
  { skill: <SiJquery className="h-20 w-20 mx-4 my-4" />, name: 'Jquery' },
  { skill: <FaGitAlt className="h-20 w-20 mx-4 my-4" />, name: 'Git' },
  { skill: <SiGithub className="h-20 w-20 mx-4 my-4" />, name: 'GitHub' },
  { skill: <SiGitlab className="h-20 w-20 mx-4 my-4" />, name: 'Gitlab' },
  { skill: <SiJira className="h-20 w-20 mx-4 my-4" />, name: 'Jira' },
  { skill: <SiJenkins className="h-20 w-20 mx-4 my-4" />, name: 'Jenkins' },
  { skill: <SiDocker className="h-20 w-20 mx-4 my-4" />, name: 'Docker' },
  { skill: <SiKubernetes className="h-20 w-20 mx-4 my-4" />, name: 'Kubernetes' },
  { skill: <SiApachekafka className="h-20 w-20 mx-4 my-4" />, name: 'Kafka' },
]

const TechStackComponent = () => {
  return (
    <>
      {TechStack.map((skills, idx) => {
        return (
          <figure key={idx}>
            {skills.skill}
            <figcaption className="text-center">{skills.name}</figcaption>
          </figure>
        )
      })}
    </>
  )
}

export default TechStackComponent
