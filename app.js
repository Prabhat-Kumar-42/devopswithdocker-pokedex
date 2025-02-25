import express from 'express'
import process from 'process'

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send(1)
})

app.get('/version', (req, res) => {
  res.send(1)
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  // if (true) throw('error...  ')
  res.send('ok')
})

app.listen(PORT, () => {
  //eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})

// comment to run PR ci-cd workflow
