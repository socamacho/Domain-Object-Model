let pronoun = ["the ","our "]
let adj = ["great ","big "]
let noun = ["jogger", "racoon"]

function Generator(arrpronoun,arradj,arrnoun){
  let dominiosGenerados=[];
  //recorro el primer array name
  arrpronoun.forEach((elementpronoun)=>{
    //recorro el segundo array tipo
    arradj.forEach((elementoadj)=>{
        arrnoun.forEach ((elementnoun)=>{
      //concateno elementos
      let str = elementpronoun + elementoadj + elementnoun;
      dominiosGenerados.push(str);//adiciono dominios a array
    })    
  })
}) 
  return dominiosGenerados;
}

console.log("Dominios-->",Generator(pronoun,adj,noun));