// const init = () => {
//   const form = document.querySelector('form');
//   form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       // console.log(e.target)
//       const formInput = document.querySelector("#searchByID")
//       // console.log(formInput)
//       // console.log(formInput.value)

//       // --------------FETCH REQUEST--------------
//       fetch(`http://localhost:3000/movies/${formInput.value}`)
//       .then((response) => response.json())
//       .then(data => {
//         // console.log(data)
//         const title = document.querySelector('section#movieDetails h4')
//         console.log(title)
//         const summary = document.querySelector('section#movieDetails p')
//         title.textContent = data.title;
//         summary.textContent = data.summary;
//       })
//   })
// }

// document.addEventListener('DOMContentLoaded', init);



// ----------- MY OWN SOLUTION BELOW -----------

const init = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      // console.log(e.target)
      const formInput = document.querySelector("#searchByID")
      // console.log(formInput)
      // console.log(formInput.value)

      // --------------FETCH REQUEST--------------
      return fetch('http://localhost:3000/movies')
      .then((response) => response.json())
      .then(data => {
        // console.log(data)
        // console.log(formInput.value)
        // console.log(data[0])
        const h4 = document.querySelector('h4')
        // console.log(h4)
        const p = document.querySelector('p')
        // console.log(p)
        if (formInput.value === '1') {
          console.log(data[0]);
          p.textContent = data[0].summary
          h4.textContent = data[0].title
        } else if (formInput.value === '2') {
          console.log(data[1]);
          p.textContent = data[1].summary
          h4.textContent = data[1].title
        } else if (formInput.value === '3') {
          console.log(data[2]);
          p.textContent = data[2].summary
          h4.textContent = data[2].title
        }
      })
  })
}

document.addEventListener('DOMContentLoaded', init);
