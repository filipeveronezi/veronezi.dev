import { GithubLink } from './GithubLink'
import { LinkedInLink } from './LinkedInLink'
import { TwitterLink } from './TwitterLink'

export function ExternalLinks() {
  return (
    <div className="flex items-center justify-center gap-3">
      <TwitterLink />
      <GithubLink />
      <LinkedInLink />
    </div>
  )
}
