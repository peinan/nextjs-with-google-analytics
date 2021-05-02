type ContactEvent = {
  action: 'submit_form'
  category: 'Contact'
  label: string
}

type ExtLinkEvent = {
  action: 'click'
  category: string
  label: string
}

export type Event = ContactEvent | ExtLinkEvent
