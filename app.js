var unirest = require("unirest");

//Question 1 
var req = unirest("GET", "http://localhost:3000/produits?_limit=10");

req.headers({
    "cache-control": "no-cache",
  
});

//Question 2
function filtrer_M(element){
const startsWithM = element.filter((prod)=> prod.nom_produit.toLocaleLowerCase().startsWith("m"));
return startsWithM;
}


 req.end(function (res) {
    if (res.error) throw new Error(res.error);
    //Affichage des dix premiers enregistrements (Question 1 - suite)
    console.log((res.body));
    //Affichage avec la fitration de la question 2
    console.log(filtrer_M(res.body));


}); 
