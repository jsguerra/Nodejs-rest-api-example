"use strict"

const form = document.getElementById('test-form')

const addBook = async (e) => {
  e.preventDefault()

  const doc = {
    title: form.title.value,
    pages: form.pages.value,
    authorid: form.authorid.value,
    extension: form.extension.value,
    path: form.path.value
  }

  console.log(doc)

  try {
    const response = await fetch('http://localhost:3000/api/v1/books', {
      method: 'POST',
      body: JSON.stringify(doc),
      headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) {
      const errorMsg = `An error has occured: ${response.status}`;
      throw new Error(errorMsg);
    }
  
    const result = await response.json()
    console.log(result.message)
  } catch (error) {
    console.error(error)
  }
}

form.addEventListener('submit', addBook)