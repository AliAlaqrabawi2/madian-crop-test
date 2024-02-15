export default function setupCounter(element) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    const textNode = document.createTextNode(`count is ${counter}`);

    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    element.appendChild(textNode);
  };

  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
