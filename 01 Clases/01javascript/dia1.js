var obj = { "numero" : 1, "nombre" : "Juan", "alumno" : true };

console.log(obj.numero);

var f = function(){
  return {
    "a" : 4,
    "b" : function() { return 3 },
    "c" : "hola"
  }
};

//obtener objetos
console.log(f().a);

//sumar objetos
console.log(f().a + f().b());

var obj2 = [{
		"nombre" : "alex",
		"apellido" : "ramirez",
		"edad" : 21,
		"inscrito" : true
	},
	{
		"nombre" : "julio",
		"apellido" : "martinez",
		"edad" : 28,
		"inscrito" : false
}];

// get edad del primer objeto
console.log(obj2[0].edad);

// get inscrito del sec objeto
console.log(obj2[1].inscrito);

var o= function () {
  return{
    "a" : function(){ return [2,3] },
    "b" : [{ "a" : 1 }, {"a" : 2}, {"a" : 3}],
    "c" : function(){ return 4 + 5 }
  }
};

// save variables
var a = o().a()[0];
var b = o().c();
console.log(a + b);

//acceder a los objetos del arreglo "b"
var a = o().b[0].a;
var b = o().b[1].a;

console.log(a + b);


//Problem:

//Beign a new Uber user, yo have $20 off your first ride.
//You want to make the most out of it and drive in the fanciest
//car you can afford, without spending any out-of-pocket money.
//You know the lenght "l" of your ride in miles and how much
//one mile costs for each. Find the best car you can afford
//Example:
//For l = 30, and (dollars per mile) fares = [0.3, 0.5, 0.7, 1, 1.3],

// var UberX = 0.3;
// var UberXL = 0.5;
// var UberPlus = 0.7;
// var UberBlack = 1;
// var UberSuv = 1.3;

// var l = 30;

var fares = [0.3, 0.5, 0.7, 1, 1.3];

function fancyRide(l,fares){
  var cars=["UberX", "UberXL", "UberPlus", "UberBlack", "UberSuv"];
  var answer;
  for(var i=0;i<5;i++){
      if(l*fares[i] < 20 )
      {
        answer = cars[i];
      }
    }
    return answer;
}

fancyRide(30, fares);


/*
20 DE ABRIL
*/

// SCOPE alcance de variables deontro de un bloque de codigo
var hola = "hola";
function holamundo () {
	var hola = "hoal mundo";
	retunr hola;
}
alert(hola);
alert(holamundo());

// CONTEXTO esta asociado a un objeto 'this'
var obj = {
	foo: function(){
		alert(this === obj);
	}
};
obj.foo();
