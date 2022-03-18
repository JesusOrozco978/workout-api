const express = require('express')
const bodyParser = require('body-parser')
const { getAllWorkouts, getWorkOutsByBody, saveNewWorkout } = require('./controllers/workOuts')
const app = express()



app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/workOuts', getAllWorkouts)
app.get('/workOuts/:id', getWorkOutsByBody)

app.post('/workOuts', bodyParser.json(), saveNewWorkout)

app.get('/', (request, response) => {
  return response.render('index')
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1338, () => {
  console.log('lisenting?') // eslint-disable-line no-console 
})
