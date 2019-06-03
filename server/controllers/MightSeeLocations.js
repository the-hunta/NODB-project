let id=  1
let MightSeeLocations =[
{
    id: id++,
    country: 'United States',
    state_provence: 'Washinton',
    city: 'Seattle',
    imageUrl: 'https://s3.amazonaws.com/fjwp/blog/wp-content/uploads/2015/10/11-Great-Flexible-Jobs-in-Seattle-Washington-Hiring-Now.jpg'
},
{
    id: id++,
    country: 'Japan',
    state_provence: '',
    city: 'Tokyo',
    imageUrl:'https://www.kevinandamanda.com/whatsnew/wp-content/uploads/2018/02/best-things-to-do-tokyo-japan-01.jpg'
},
{
    id: id++,
    country: 'Canada',
    state_provence: 'Nova Scotia',
    city: 'Halifax',
    imageUrl:'https://www.g4s.com/en-ca/-/media/g4s/canada/images/modules/header/herowide/1200x420_halifax.ashx'
},
]

module.exports = {
    read: (req, res) => res.send(MightSeeLocations),
    create: (req, res) => {
        let newLocation = req.body
        newLocation.id = id++
        MightSeeLocations.push(newLocation)

        res.status(200).send(MightSeeLocations)
    },
    delete: (req, res) => {
        let { id } = req.params
        
        let index = MightSeeLocations.findIndex(location => +location.id === +id)
        MightSeeLocations.splice(index, 1)
        res.send(MightSeeLocations)
    },
    update: (req, res) => {
        let {id} = req.params
        let updateLocation = req.body
        updateLocation.id = id

        let index = MightSeeLocations.findIndex(location => +location.id === +id)

        MightSeeLocations.splice(index, 1, updateLocation)
        res.send(MightSeeLocations)
    }

    
}