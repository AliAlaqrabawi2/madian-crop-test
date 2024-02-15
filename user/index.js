import { UserList } from './UserList';
import ApiService from '../core/config/ApiService';
import { States } from './constants';
import './style.css';

const fetchUserByCategory = async (category) => {
  try {
    return await ApiService.get(
      `?rows=10&fname={firstName}&lname={lastName}&category=${category}`
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

let users = [];

async function fetchAllUser() {
  try {
    users = await ApiService.get(
      `?rows=10&fname={firstName}&lname={lastName}&category=${JSON.stringify(
        States
      )}`
    );
    renderUserList(users);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const filterUser = async (category = '') => {
  if (category !== '') {
    const filteredUsers = await fetchUserByCategory(category);
    renderUserList(filteredUsers);
  } else {
    fetchAllUser();
  }
};

export const userComponent = () => {
  const filterButtons = States.map(
    (state) =>
      `<button 
       class="filter-button" data-state="${state}">${state}</button>`
  ).join('');
  return `
    <div>
      <div id="filterButtons" class="filter-buttons">
        ${filterButtons}
        <button  data-state="all" class="show-all-button">Show All Users</button>
      </div>
      <div id="user-list">
        ${UserList(users)}
      </div>
    </div>
  `;
};

function renderUserList(updatedUsers) {
  document.getElementById('user-list').innerHTML = UserList(updatedUsers);
}

document.addEventListener('DOMContentLoaded', () => {
  const filterButtonsContainer = document.getElementById('filterButtons');
  filterButtonsContainer.addEventListener('click', async (event) => {
    if (event.target.tagName === 'BUTTON') {
      const category = event.target.dataset.state;
      if (category === undefined) {
        fetchAllUser();
      } else {
        await filterUser(category);
      }
    }
  });
});
fetchAllUser();
