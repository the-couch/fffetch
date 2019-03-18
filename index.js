require('now-env')

const router = require('router')
const server = require('connect')()
const bodyParser = require('body-parser')
const scrape = require('scrape-fb-ogcache')

const serverRouter = router()
server.use(bodyParser.json({type: 'application/*'}))

const landing = require('./landing.js')
const privacy = require('./privacy.js')

const { PORT } = process.env

serverRouter.get('/privacy', (req, res) => {
  res.write(privacy)
  res.end()
})

serverRouter.post('/api/fetch', (req, res) => {
  const url = req.body.url
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  scrape(url, process.env.FBTOKEN, function (response) {
    if (response.error) {
      res.write(JSON.stringify({
        error: true,
        msg: response.error.error_user_msg
      }))
      res.end()
    } else {
      res.write(JSON.stringify({
        error: false,
        data: url
      }))
      res.end()
    }
  })
})

serverRouter.get('*', (req, res) => {
  res.write(landing)
  res.end()
})

server.use(serverRouter)

server.listen(PORT || 5001, () => {
  console.log(`internet baby running on ${PORT || 5001}`)
})
