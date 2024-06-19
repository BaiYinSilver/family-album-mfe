// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodeEnvironment = require('jest-environment-node').default

class FastifyDecoratorsTestEnvironment extends NodeEnvironment {
  setup() {
    require('reflect-metadata')
    this.global.Reflect = Reflect
    return super.setup()
  }
}

module.exports = FastifyDecoratorsTestEnvironment
