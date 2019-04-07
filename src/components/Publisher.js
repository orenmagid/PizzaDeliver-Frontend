import uuidv4 from 'uuid/v4'

export const uuid = () => {
  return uuidv4()
}

class Publisher {
  subscribers = {}

  constructor() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Publisher instance created.', this)
    }
  }

  subscribe = (domEvent, subscriber) => {
    const key = uuid()
    if (domEvent in this.subscribers) {
      if (this.subscribers[domEvent].hasOwnProperty(key)) {
        console.log(
          `Subscription collision detected. '${key}' is already assigned to a subscriber. You must unsubscribe before reassigning.`
        )
        return key
      } else {
        this.subscribers[domEvent][key] = subscriber
        return key
      }
    } else {
      this.subscribers[domEvent] = {}
      this.subscribers[domEvent][key] = subscriber
      return key
    }
  }

  publish = (domEvent, data) => {
    for (var sub in this.subscribers[domEvent]) {
      try {
        this.subscribers[domEvent][sub](data)
      } catch (e) {
        console.log(e)
      }
    }
  }

  unsubscribe = (domEvent, key) => {
    if (
      this.subscribers.hasOwnProperty(domEvent) &&
      key &&
      this.subscribers[domEvent].hasOwnProperty(key)
    ) {
      delete this.subscribers[domEvent][key]
    } else {
      console.log('Subscription not found.')
    }
  }

  unsubscribeAll = () => {
    this.subscribers = {}
  }
}

const RootDOMEventPublisher = new Publisher()

window.addEventListener('click', e => {
  RootDOMEventPublisher.publish('click', e)
})

export default RootDOMEventPublisher
