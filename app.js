class CPersona{
    constructor(nombre="",fechaNacimiento ="",dni,genero="",peso=0,altura=0){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura
    }
    calcularIMC(){
        let pesoIdeal = this.peso/(Math.pow(this.altura,2));
        if(pesoIdeal < 20){
            return -1;
        }else if(pesoIdeal >= 20 && pesoIdeal <=25){
            return 0;
        }else if(pesoIdeal > 25){
            return 1;
        }
    }
    esMayorDeEdad(){
        let fechaAct = new Date();
        if(Math.abs((fechaAct.getTime() - this.fechaNacimiento.getTime())/1000/60/60/24/365) >= 18){
            return true;
        }
    }
    ComprobarGenero(){
        let gener = this.genero.toUpperCase();
        if(gener == "MASCULINO" || gener == "FEMENINO" || gener == "NO BINARIO"){
            return true;
        }else{
            return false;
        }
    }
}




document.querySelector("button").addEventListener("click",()=>{
    event.preventDefault();
    let inputs = document.querySelectorAll("input");
    console.log(inputs[1].value)
    let fechaNacimiento = new Date(inputs[1].value)
    let persona = new CPersona(inputs[0].value,fechaNacimiento,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value)
    let p = document.getElementById("res");
    p.innerHTML = "Resultados:";
    switch(persona.calcularIMC()){
        case -1:
            p.innerHTML += "Esta por debajo de su peso ideal<br>";
        break;
        case 0:
            p.innerHTML += "Esta en su peso ideal<br>";
        break;
        case 1:
            p.innerHTML+="Esta por encima de su peso ideal<br>"
        break;
    }
    if(persona.esMayorDeEdad()){
        p.innerHTML += "Es mayor de edad. <br>";
    }else{
        p.innerHTML += "Es menor de edad. <br>";

    }
    if(persona.ComprobarGenero()){
        p.innerHTML += "Genero valido. <br>";

    }else{
        p.innerHTML += "Genero invalido(H). <br>";

    }
})