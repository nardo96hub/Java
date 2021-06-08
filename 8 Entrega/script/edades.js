let edad1= document.getElementById("Edad1").value 
let edad2= document.getElementById("Edad2").value
let edad3= document.getElementById("Edad3").value




function esMayor()
{
    let edad=document.getElementById("Edad1").value 
    let men;
    if(edad>=18) {men=`La persona tiene ${edad} años por lo que es Mayor de edad` }
    else men=`La persona tiene ${edad} años por lo que es Menor de edad`
    document.getElementById("resultado").innerHTML=men
    alert(men)

}

function Mayores()
{   
    let mens;
    let edad1=parseFloat(document.getElementById("EdaD1").value) ; //edad1=Val(edad1)
    let edad2= parseFloat(document.getElementById("Edad2").value) ; ;//edad2=Val(edad3)
    let edad3= parseFloat(document.getElementById("Edad3").value) ;;//edad3=Val(edad2)

    mens=`Con Edad1=${edad1}-Edad2=${edad2}-Edad3=${edad3}.Tenemos que `
    
    if(edad1>edad2 && edad1>edad3) mens= mens + `el mayor de los 3 es el primero teniendo ${edad1} anos`
    else if (edad2>edad1 && edad2>edad3) mens=mens+`el mayor de los 3 es el segundo teniendo ${edad2} anos`
    else if (edad3>edad1 && edad3>edad2)mens=mens+`el mayor de los 3 es el tercero teniendo ${edad3} anos`

    document.getElementById("resultado").innerHTML= mens
    document.getElementById("resultado").style.backgroundColor= "gray"
    document.getElementById("resultado").style.color="red"
}


