export const renderBooks = (books) =>  {  
  if (localStorage.getItem('myData') !== null){
    books = JSON.parse(localStorage.getItem('myData'))  
   }  

  const parent = document.querySelector('.table')
  while (parent.firstChild){
    parent.firstChild.remove()
  }
  
  books.forEach(book => { 
   const index = books.indexOf(book)
   const tR = document.createElement('tr')
   const selectTR = document.querySelector('.table')
   selectTR.appendChild(tR)  
 
   const tH = document.createElement('th')
   const selectTH = document.querySelectorAll('tr')[index]   
   selectTH.appendChild(tH)  
   tH.innerHTML = `Tytuł: <span>${book.title}</span>`
 
   const autortD = document.createElement('td')
   selectTH.appendChild(autortD)
   autortD.innerHTML = `Autor: <span>${book.author}</span>`  
 
   const prioritytD = document.createElement('td')
   selectTH.appendChild(prioritytD)
   prioritytD.innerHTML = `Priorytet: <span>${book.priority}</span>`

   const categoryD = document.createElement('td')
   selectTH.appendChild(categoryD)
   categoryD.innerHTML = `Kategoria: <span>${book.category}</span>`
  })
}
