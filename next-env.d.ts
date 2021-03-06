interface Window {
    // for pageview
    gtag(type: 'config', googleAnalyticsId: string, { page_path: string })
    // for event
    gtag(
      type: 'event',
      eventAction: string,
      fieldObject: {
        event_label: string
        event_category: string
        value?: string
      }
    )
  }
