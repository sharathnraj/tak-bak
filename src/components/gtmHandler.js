const WINDOW = typeof window !== "undefined" && window

const gtmHandler = ({
  event,
  eventType,
  category = "",
  action = "",
  additionalProps = {}
}) => {
  if (WINDOW) {
    if (!WINDOW.dataLayer) WINDOW.dataLayer = []

    const newData = {
      event: event || "reactjs.event",
      eventType,
      category,
      action,
      ...additionalProps
    }

    WINDOW.dataLayer.push(newData)
  }
}

export default gtmHandler
