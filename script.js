let aboutMe = { 
    nome: "Rafael",
    idade: 26,
    estado: "Pará"}
 console.log(aboutMe)
 
 aboutMe.telefone = 93984224902
 console.log(aboutMe)
 
 delete aboutMe.idade
 console.log(aboutMe)
 
 let cadastro = [
     { nome:'Vinicius',
         idade:24,
         telefone: 93991919191,
             amigos:['João','Marcos','Alexandre','Rafael']
     },
     {nome: 'Daniel',
         idade:23,
         telefone: 93992929292,
             amigos: ['Rafael','Léo','Italo','Fernando'],
 
     },
     {nome: 'Léo',
         idade: 23,
         telefone: 93993939393,
             amigos:['Agata','Rafael', 'Daniel','Lene'],
 
     },
     {nome: 'João Alberto',
         idade: 18,
         telefone: 93994949494,
             amigos:['Rafael','Luck','Liza','Dudu'],
 
     },
     {nome:'Carol',
         idade: 29,
         telefone: 93994949494,
             amigos:['Karen','Rafael','Cris','Marcela'],
 
     },
 ]
 console.log(cadastro[0].amigos[0])
 console.log(cadastro[1].amigos[0])
 console.log(cadastro[2].amigos[0])
 console.log(cadastro[3].amigos[0])
 console.log(cadastro[4].amigos[0])