export const saveBook = (books) => {   
  if(localStorage.getItem('myData') === null){
    localStorage.setItem('myData', JSON.stringify(books));     
  } else {
    const oldBooks = JSON.parse(localStorage.getItem('myData')); 
    oldBooks.push(books[books.length - 1]); 
  }
  localStorage.setItem('myData', JSON.stringify(books))
}