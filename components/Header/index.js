// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const header = document.createElement('div');

  const date = document.createElement('span');
  date.classList.add('date');
  date.textContent = 'MARCH 28, 2019';

  const heading = document.createElement('h1');
  heading.textContent = `Lambda Times`;

  const temp = document.createElement('span');
  temp.classList.add('temp');
  temp.innerText = `98`;

  header.appendChild(date);
  header.appendChild(heading);
  header.appendChild(temp);

  return header;
}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());
