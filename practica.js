nombre= prompt("Coloca aqui tu nombre :",)
alert("Bienvenido/a al cuestionario sobre las Olimpíadas")

res1=prompt("¿Cuándo se realizará la inauguración de las Olimpiadas?\nA:Lunes 02 de octubre\nB:Viernes 29 de setiembre\nC:Jueves 28 de setiembre")
if (res1=="A"){
    res1=0
}
else if(res1=="B"){
    res1=25
}
else if(res1=="C"){
    res1=0
}
else{
alert("Recuerda que solo se puede poner A, B o C en las respuestas")
}

res2=prompt("¿De qué color es la prompoción de 2do de secundaria?\nA:Celeste o Turquesa\nB:Rojo\nC:Morado")
if (res2=="A"){
    res2=25
}
else if(res2=="B"){
    res2=0
}
else if(res2=="C"){
    res2=0
}
else{
alert("Recuerda que solo se puede poner A, B o C en las respuestas")
}

res3=prompt("¿Cual es el nuevo deporte incluido este año?\nA:Futsal femenino\nB:Balonmano\nC:Marcha atlética")
if (res3=="A"){
    res3=0
}
else if(res3=="B"){
    res3=0
}
else if(res3=="C"){
    res3=25
}
else{
alert("Recuerda que solo se puede poner A, B o C en las respuestas")
}

total= res1 + res2 + res3
if (total>= 25){
    document.write("Lo has hecho bien ", nombre)
}
else {
    document.write("Puedes hacerlo mejor ", nombre)
}