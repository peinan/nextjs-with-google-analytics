type ContactEvent = {
  action: 'submit_form'
  category: 'Contact'
  label: string
}

type ClickEvent = {
  action: 'click'
  category: 'other'
  label: string
}

export type Event = ContactEvent | ClickEvent
