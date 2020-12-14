export const GTM_ID = 'GTM-WHGBGH6'

function pushToDataLayer (dataLayerObject) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(dataLayerObject)
}

export function createEvent (args) {
  const dataLayerObject = {
    event: args.event,
    ...args
  }

  pushToDataLayer(dataLayerObject)
}

export function gtmPageView (url) {
  const pageEvent = {
    event: 'pageview',
    page: url
  }
  window && window.dataLayer && window.dataLayer.push(pageEvent)
  return pageEvent
}
