import * as gtag from '../lib/gtag'

const ExtLink = (props) => {
  const handleClick = (props) => {
    console.log(`Accessing external link: "${props.target.innerText}" ${props.target.href}`)
    gtag.event({
      action: 'click',
      category: 'other',
      label: JSON.stringify(
        {
          text: props.target.innerText,
          url: props.target.href
        }
      )
    })
  }

  return (
    <a {...props} rel="noopener" target={props.target || '_blank'} onClick={handleClick}/>
  )
}

export default ExtLink
