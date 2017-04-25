var a = prompt("Podaj długość podstawy trójkąta"),
	h = prompt("Podaj wysokość trójkąta"),
	triangleArea = a*h /2,
	wynik = "Pole trójkąta o podstawie a: " +a+ " i wysokości h: " +h+ " wynosi: "+triangleArea;
console.log(wynik);
document.getElementById("wynik").innerHTML = wynik;