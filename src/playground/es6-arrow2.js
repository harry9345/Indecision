//argument no longer buond
 const add =(a,b)=> a + b;
 console.log(add(55,1));


// this -- no longer bound
const user ={
    name: "harry",
    cityes : ["sydney","mel","tall"],
    printP(){
       return this.cityes.map((city)=> this.mame +" has live in  "+ city + "!"); 
    }
}
console.log(user.printP());

//chalane
const multy = {
  adad: [2,4,6],
  yekio : 6,
  zarb(){
      return this.adad.map((hala)=> hala * this.yekio)
  }

}
console.log(multy.zarb())