import { GithubLink } from './GithubLink'
import { LinkedInLink } from './LinkedInLink'

export function ExternalLinks() {
  return (
    <div className="flex items-center justify-center gap-3">
      <GithubLink />
      <LinkedInLink />
    </div>
  )
}
