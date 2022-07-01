import { createConfiguration, hooks } from '@midwayjs/hooks'
import * as koa from '@midwayjs/koa'

import { DefaultConfig, LocalConfig, ProdConfig } from './config'

export default createConfiguration({
  imports: [koa, hooks()],
  importConfigs: [
    {
      default: DefaultConfig,
      local: LocalConfig,
      prod: ProdConfig
    }
  ]
})
