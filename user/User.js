export const User = ({ fname, lname, category }) => {
  const avatarText = `${fname.charAt(0)}${lname.charAt(0)}`.toUpperCase();

  return `
    <div class="user-list-item my-1">
      <div class="user-avatar">${avatarText}</div>
      <div class="user-details">
        <strong>${fname} ${lname}</strong> 
        <br/>
        ${category}
      </div>
    </div>
  `;
};
