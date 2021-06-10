document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid') //in-built JS method that looks into the HTML for the query when the variable is called
  let squares = Array.from(document.querySelectorAll('.grid div')) //collect all div's from grid - giving it a specific index number
  const width = 10
  console.log(squares);
})
