import express from 'express'
import axios from 'axios'
const app = express()
const PORT = 3001 

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get('/api/supervisors',(req,res) => {
   axios.get('https://609aae2c0f5a13001721bb02.mockapi.io/lightfeather/managers/')
  .then(resp =>{
    const supervisor = resp.data
     
    const filSup = supervisor.filter((i)=>!'0123456789'.includes(i.jurisdiction))
    const sortJur =filSup.sort((a,b)=> {
        return a.jurisdiction.localeCompare(b.jurisdiction) || a.lastName.localeCompare(b.lastName) 
        || a.firstName.localeCompare(b.firstName)

    })

     console.log(sortJur)
    res.json(sortJur)
})

})

app.post('/api/submit', (req, res)=>{
  const person = req.body
  console.log(person)


})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })