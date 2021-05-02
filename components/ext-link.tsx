import * as gtag from '../lib/gtag'

const ExtLink = (props) => {
  const handleClick = (e) => {
    console.log(props)
    console.log(e)
    console.log(`Accessing external link: "${e.target.innerText}" ${props.href}`)
    gtag.event({
      action: 'click',
      category: `ExtLink - ${props.ga_category}`,
      label: `${props.ga_label} - ${e.target.innerText}`,
    })
  }

  return (
    <a {...props} rel="noopener" target={props.target || '_blank'} onClick={handleClick}/>
  )
}

export default ExtLink
