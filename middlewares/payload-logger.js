const payloadLogger = (req, res, next) => {
  console.table({
    path: req.originalUrl,
    parameters: req.params,
    query: req.query,
  })
  next()
}

export default payloadLogger
