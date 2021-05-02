import Page from '../components/Page'
import ExtLink from '../components/ext-link'

export default function About() {
  return (
    <Page>
      <h1>This is the About page</h1>
      <div>
        <a href="/contact">a tag, internal</a>
      </div>
      <div>
        <ExtLink href="/contact">
          ext-link, internal
        </ExtLink>
      </div>
      <div>
        <ExtLink href="https://peinan.cc" ga_category="sns" ga_label="about">
          ext-link, outernal
        </ExtLink>
      </div>
    </Page>
  )
}
