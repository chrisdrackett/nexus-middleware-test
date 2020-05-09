import { schema, log } from 'nexus'

schema.middleware((config) => {
  return async (root, args, ctx, info, next) => {
    if (!root) {
      log.info('request', {
        type: config.parentTypeConfig.name,
        field: config.fieldConfig.name,
        args,
      })
    }

    return next(root, args, ctx, info)
  }
})
