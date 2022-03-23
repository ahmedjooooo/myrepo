const express = require('express')
const app = express()
const produits = require('./db.json')
//middleware
app.use(express.json())

app.get('/produits',(req,res)=>{
    res.status(200).json(produits)
})
app.get('/produits/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const produit =produits.find(produit => produit.id_produit === id)
    res.status(200).json(produit)
})
app.post('/produits',(req,res)=>{
    produits.push(req.body)
    res.status(200).json(produits)
})
app.put('/produits/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let produit = produits.find(produit => produit.id_produit === id)
            produit.categorie = req.body.categorie,
            produit.nom_produit =req.body.nom_produit,
            produit.marque=req.body.marque,
            produit.couleur=req.body.couleur,
            produit.systeme_exploitation=req.body.systeme_exploitation,
            produit.marque_processeur=req.body.marque_processeur,
            produit.type_processeur=req.body.type_processeur,
            produit.vitesse_processeur=req.body.vitesse_processeur,
            produit.nombre_coeurs=req.body.nombre_coeurs,
            produit.taille_memoire_vive=req.body.taille_memoire_vive,
            produit.taille_disque_dur=req.body.taille_disque_dur,
            produit.taille_ecran=req.body.taille_ecran,
            produit.resolution=req.body.resolution,
            produit.type_batterie=req.body.type_batterie,
            produit.images=req.body.images,
            produit.disponibilite=req.body.disponibilite,
            produit.prix=req.body.prix,
            produit.description=req.body.description,

    
    res.status(200).json(produit)
})
app.delete('/produits/:id', (req,res) => {
    const id = parseInt(req.params.id_produit)
    let produit = produits.find(produit => produit.id_produit === id)
    produits.splice(produits.indexOf(produit),1)
    res.status(200).json(produits)
})

app.listen(8080, ()=>{
    console.log('serveur a l écoute')
   
})