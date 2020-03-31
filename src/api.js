import Chance from 'chance'
import lodash from 'lodash'

class MessageGenerator {
  constructor(options) {
    this.messageCallback = options.messageCallback
    this.stopGeneration = false
    this.chance = new Chance()
  }

  stop() {
    this.stopGeneration = true
  }

  start() {
    this.stopGeneration = false
    this.generate()
  }

  isStarted() {
    return !this.stopGeneration
  }

  /**
     * priority from 1 to 3, 1 = error, 2 = warning, 3 = info
     * */
  generate() {
    if (this.stopGeneration) {
      return
    }
    const message = this.chance.string()
    const priority = lodash.random(1, 3)
    const nextInMS = lodash.random(500, 3000)
    this.messageCallback({
      message,
      priority,
    })
    setTimeout(() => {
      this.generate()
    }, nextInMS)
  }
}

export default MessageGenerator
