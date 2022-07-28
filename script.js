
const data = [
  {
    item: 'šroub',
    unitPrice: 14,
    quantity: 100
  },
  {
    item: 'matice',
    unitPrice: 7,
    quantity: 35
  },
  {
    item: 'vrut',
    unitPrice: 12,
    quantity: 20
  },
  {
    item: 'vrták',
    unitPrice: 50,
    quantity: 11,
  },
]
// appendChild = přídá element pod element
let celkovySoucet = 0
let mena =" ,-kč"
console.log(mena)

// element.aadEventListener = přidáme posluchače nějakou událost

  // vytvoření tabulky
const tabulka = document.createElement("table") /*vytvoří element v HTML(tabulka) */
const container = document.querySelector(".container") // vyhledání konkrétního elementu
container.appendChild(tabulka)
console.log(tabulka)

// Hlavička tabulky
const tableHead = document.createElement("thead") // vztvoření elementu v HTML
tabulka.appendChild(tableHead)
const headRow = document.createElement("tr")
tableHead.appendChild(headRow)

// nadpisy tabulky
const nadpisy = ["Produkt", "Cena", "Množství","Celkem"]
nadpisy.forEach(function(nadpis) { // forEach iterace(opakující)prvku pole
  const newTh = document.createElement("th")
  newTh.textContent = nadpis
  headRow.appendChild(newTh)
})


//Tělo tabulky
const tableBody = document.createElement("tbody")
tabulka.appendChild(tableBody)

// Nadefinováni Buňek a vložení do tabulky
data.forEach(function(vec) {
  const radek = document.createElement("tr")

  const produktu = document.createElement("td")
  
  produktu.textContent = vec.item // přídává text (textovy obsah)
  radek.appendChild(produktu)
  const cena = document.createElement("td")
  cena.textContent = vec.unitPrice+mena
  radek.appendChild(cena)
  const mnozstvi = document.createElement("td")
  mnozstvi.textContent = vec.quantity 
  radek.appendChild(mnozstvi)

  const celkem = document.createElement("td")
  let celkemMnozstviCena = vec.unitPrice * vec.quantity
  celkem.textContent = celkemMnozstviCena + mena
  radek.appendChild(celkem)
  
  tableBody.appendChild(radek)
  
  celkovySoucet += celkemMnozstviCena
})

// tabulka pro soucet 
const tableFoot = document.createElement("tfoot")
tabulka.appendChild(tableFoot)
const footRow = document.createElement("tr")
tableFoot.appendChild(footRow)

// podnadpis pro soucet
const paticky = ["Celkem","","",celkovySoucet + mena]
paticky.forEach(function(paticka) {
  const newTf = document.createElement("td")
  newTf.textContent = paticka
  footRow.appendChild(newTf)
})

console.log(celkovySoucet)