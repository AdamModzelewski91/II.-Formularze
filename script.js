import { renderBooks } from "./rednerBooks.js"
import { saveBook } from "./saveBook.js" 

const table = document.createElement('table')
document.querySelector('.wrapper').appendChild(table).classList.add('table')

 const books = [  
   {
   title: 'Droga Szamana',
   author: 'Wasilij Machanienko',
   priority: '5',
   category: 'Fantasy',
 },
   {
   title: 'Nocny Patrol',
   author: 'Siergiej Łukjanienko',
   priority: '5',
   category: 'Fantasy',
 },
]

document.onvisibilitychange = renderBooks(books)

const newElement = document.getElementById('myForm')  

newElement.addEventListener('submit', e => { 
  e.preventDefault()
  let formData = new FormData(newElement)
  let valiTitle = formData.get('title') 
  let valiAuthor = formData.get('author')
  let valiPriority = formData.get('priority')
  let valiCategory = formData.get('category') 

  if (valiTitle.length < 1 || valiAuthor.length < 3 || valiPriority < 1 || valiPriority > 5 || !valiCategory ){
    if (valiTitle.length < 1) {    
      document.getElementById('title').placeholder = 'Za krótki tytuł. Conajmniej 1 znak'    
    } 
     if (valiAuthor.length < 3) {
      document.getElementById('author').placeholder = 'Za krótki author. Conajmniej 3 znaki' 
    } 
     if (valiPriority < 1 || valiPriority > 5) {
      document.getElementById('priority').type = 'text'  
      document.getElementById('priority').value = ''  
      document.getElementById('priority').placeholder = `Za ${Number(valiPriority) < 1 ? 'mała' : 'duża'} liczba`
      document.getElementById('priority').type = 'number'
    } 
    if (!valiCategory) {    
      document.getElementById('category').style.color = 'red'
      document.getElementById('select').innerHTML = 'Wybierz kategorie'        
      } 
    if (valiCategory) {
        document.getElementById('category').style.color = 'black';
      } 
     return false
  }
  
  books.push({title: valiTitle, author: valiAuthor, priority: valiPriority, category: valiCategory})
  
  saveBook(books)
  renderBooks(books)
  
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('priority').value = ''
  document.getElementById('category').value = ''
  document.getElementById('title').placeholder = ''
  document.getElementById('author').placeholder = ''
  document.getElementById('priority').placeholder = ''
  document.getElementById('category').placeholder = ''
  document.getElementById('select').innerHTML = 'Select'
  document.getElementById('category').style.color = 'black';  
})
