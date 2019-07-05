module.exports = {
getInventory: (req, res) => {
    const dbInstance = req.app.get('db'); 

    
    dbInstance.get_inventory()
    .then( products => res.status(200).send( products ))
    .catch(err => {
        res.status(500).send({ errorMessage: 'something went wrong with get_inventory'}); 
        console.log(err)
    }); 
},

create: (req, res) => {
    const dbInstance = req.app.get('db'); 
    const{ name, url, price, id} = req.body; 
    console.log(res.data + "res"); 
    dbInstance.create_product([name, url, price, id])
    .then( () => res.sendStatus(200))
    .catch( err => {
        res.status(500).send({ errorMessage: 'Something went wrong'})
        console.log(err)
    }); 
    console.log('hit create')
}

}