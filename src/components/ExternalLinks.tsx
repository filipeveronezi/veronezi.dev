import { GithubLink } from './GithubLink'
import { LinkedInLink } from './LinkedInLink'

export function ExternalLinks() {
  return (
    <div className="flex gap-3">
      <GithubLink />
      <LinkedInLink />
    </div>
  )
}
