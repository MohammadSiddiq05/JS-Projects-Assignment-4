function tempConverter(temp, unit){
    let Celcius;
    let Fahrenheit;
    let Kelvin;

    switch(unit){
        case "C":
            Celcius = temp;
            Fahrenheit = (temp * 9/5) + 32;
            Kelvin = temp + 273.15;
            console.log(`Temperature in Fahrenheit: ${Fahrenheit}`);
            console.log(`Temperature in Kelvin: ${Kelvin}`);
            return { Fahrenheit, Kelvin };

        case "F":
            Fahrenheit = temp;
            Celcius = (temp - 32) * 5/9;
            Kelvin = Celcius + 273.15;
            console.log(`Temperature in Celcius: ${Celcius}`);
            console.log(`Temperature in Kelvin: ${Kelvin}`);
            return { Celcius, Kelvin };

        case "K":
            Kelvin = temp;
            Celcius = temp - 273.15;
            Fahrenheit = (Celcius * 9/5) + 32;
            console.log(`Temperature in Celcius: ${Celcius}`);
            console.log(`Temperature in Fahrenheit: ${Fahrenheit}`);
            return { Celcius, Fahrenheit };

        default:
            console.log("Invalid unit. Use 'C', 'F', or 'K'.");
            break;
    }
}
console.log(tempConverter(12, "C"));
console.log(tempConverter(25, "F"));
console.log(tempConverter(54, "K"));
