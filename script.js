 const btn = document.querySelector('.submitBTN')
 const newBooks = document.querySelector('.newBooks')

 const books = [
   {
   title: 'Droga Szamana',
   author: 'Wasilij Machanienko',
   piority: '5',
   category: 'Fantasy',
 },
   {
   title: 'Nocny Patrol',
   author: 'Siergiej Łukjanienko',
   piority: '5',
   category: 'Fantasy',
 },
]

function save() {  
  let oldBooks
  if(localStorage.getItem('newdata') === null){
    localStorage.setItem('newdata', JSON.stringify(books));
    oldBooks = JSON.parse(localStorage.getItem('newdata')); 
  } else {
    oldBooks = JSON.parse(localStorage.getItem('newdata')); 
    oldBooks.push(books[books.length -1]);
  } 
  localStorage.setItem('newdata', JSON.stringify(oldBooks))
}

const generateBook = () =>  { 
  let storagebooks = books
  if (localStorage.getItem('newdata') !== null){
   storagebooks = JSON.parse(localStorage.getItem('newdata'))  
   }  

  const parent = document.querySelector('table')
  while (parent.firstChild){
    parent.firstChild.remove()
  }
  
  storagebooks.forEach(book => {    
   const index = storagebooks.indexOf(book)
   const tR = document.createElement('tr')
   const selectTR = document.querySelector('table')
   selectTR.appendChild(tR)  
 
   const tH = document.createElement('th')
   const selectTH = document.querySelectorAll('tr')[index]   
   selectTH.appendChild(tH)  
   tH.innerHTML = `Tytuł: <span>${book.title}</span>`
 
   const autortD = document.createElement('td')
   selectTH.appendChild(autortD)
   autortD.innerHTML = `Autor: <span>${book.author}</span>`  
 
   const pioritytD = document.createElement('td')
   selectTH.appendChild(pioritytD)
   pioritytD.innerHTML = `Piorytet: <span>${book.piority}</span>`
 })
}

generateBook()
 
 const addBook = (e) => {
  e.preventDefault()
  let ftitle = document.getElementById('title').value
  let fauthor = document.getElementById('author').value
  let fpiority = document.getElementById('piority').value
  let fcategory = document.getElementById('category').value
   
  if (ftitle.length < 1) {
    alert('Za krótki tytuł. Conajmniej 1 znak')
    return addBook
  } else if (fauthor.length < 3) {
    alert('Za krótki author. Conajmniej 3 znaki')  
    return addBook
  } else if (fpiority < 1 || piority > 5) {
    alert(`Za ${piority < 1 ? 'mała' : 'duża'} liczba`)
    return addBook
  } else if (!fcategory) {
    alert('Wybierz kategorie')
    return addBook
  }

  books.push({title: ftitle, author: fauthor, piority: fpiority, category: fcategory})
  
  generateBook()
  save()
  
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('piority').value = ''
  document.getElementById('category').value = ''
 }

 btn.addEventListener('click', addBook)