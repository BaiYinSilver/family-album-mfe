import defaultConfig from './default'
import localConfig from './local'
import productionConfig from './production'
import Config from '../types/config'

const getEnvConfig = (env?: string) => {
    switch (env) {
        case 'local': {
            return localConfig()
        }
        default: {
            return productionConfig()
        }
    }
}

export default (): Config => {
    const envConfig = getEnvConfig(process.env.NODE_ENV)
    return { ...defaultConfig, ...envConfig }
}
