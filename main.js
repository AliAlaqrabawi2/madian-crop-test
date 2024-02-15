import { userComponent } from './user/index.js';

async function initializeApp() {
  const userListHtml = userComponent();

  const appElement = document.getElementById('app');
  appElement.innerHTML = userListHtml;
}

// Initialize the app
initializeApp();
