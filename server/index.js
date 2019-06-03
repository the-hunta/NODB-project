const express = require('express')
const port = 5050
let mustSee = require('./controllers/MustSeeLocations')
let mightSee = require('./controllers/MightSeeLocations')

const app = express()
app.use(express.json())

//end points go here
//mightSee
app.get('/api/MightSeeLocations', mightSee.read)
app.post('/api/MightSeeLocations', mightSee.create)
app.put('/api/MightSeeLocations/:id', mightSee.update)
app.delete('/api/MightSeeLocations/:id', mightSee.delete)

//mustSee
app.get('/api/MustSeeLocations', mustSee.read)
app.post('/api/MustSeeLocations', mustSee.create)
app.put('/api/MustSeeLocations/:id', mustSee.update)
app.delete('/api/MustSeeLocations/:id', mustSee.delete)


app.listen(port, () => {
    console.log('Listening on port', port)
})