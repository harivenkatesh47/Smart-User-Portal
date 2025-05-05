// Sample user data
const users = [
    { id: 101, name: 'John Doe', email: 'john@example.com', status: 'Active', spend: 500 },
    { id: 102, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', spend: 300 },
    { id: 103, name: 'Raj Patel', email: 'raj@example.com', status: 'Active', spend: 700 },
    { id: 104, name: 'Emily Rose', email: 'emily@example.com', status: 'Active', spend: 900 }
  ];
  
  // Generator for user IDs
  function* userIdGenerator(startId) {
    let id = startId;
    while (true) {
      yield id++;
    }
  }
  const idGen = userIdGenerator(105);
  
  // DOM elements
  const userList = document.querySelector('.user-list');
  const totalUsersEl = document.getElementById('total-users');
  const totalSpendEl = document.getElementById('total-spend');
  const avgSpendEl = document.getElementById('avg-spend');
  const nextIdEl = document.getElementById('next-id');
  
  // Render users to the DOM
  function renderUsers(filteredUsers) {
    userList.innerHTML = '';
    filteredUsers.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';
      card.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Status:</strong> ${user.status}</p>
        <p><strong>Spend:</strong> ₹${user.spend}</p>
      <button class="expand-btn">Expand</button>
      <div class="expandable-content" style="display: none;">
        <p><strong>Recent Activity:</strong> Purchased item X, Y, Z.</p>
        <p><strong>Transaction History:</strong> ₹2000, ₹500, ₹300.</p>
      </div>
    `;

    // Add event listener to the expand button
    const expandBtn = card.querySelector('.expand-btn');
    const expandableContent = card.querySelector('.expandable-content');
    expandBtn.addEventListener('click', () => {
      // Toggle the visibility of extra content
      const isVisible = expandableContent.style.display === 'block';
      expandableContent.style.display = isVisible ? 'none' : 'block';
      expandBtn.textContent = isVisible ? 'Expand' : 'Collapse'; // Change button text
    });

      userList.appendChild(card);
    });
  }
  
  // Summary data
  function updateSummary(filteredUsers) {
    const total = filteredUsers.length;
    const spend = filteredUsers.reduce((sum, u) => sum + u.spend, 0);
    const avg = total > 0 ? (spend / total).toFixed(2) : 0;
  
    totalUsersEl.textContent = total;
    totalSpendEl.textContent = spend;
    avgSpendEl.textContent = avg;
  }
  
  // Show next user ID
  function updateNextId() {
    nextIdEl.textContent = `#${idGen.next().value}`;
  }
  
  // Filters
  document.querySelectorAll('.sidebar button').forEach(button => {
    button.addEventListener('click', () => {
      let filtered = [...users];
      if (button.textContent === 'Active Users') {
        filtered = filtered.filter(u => u.status === 'Active');
      }
      if (button.textContent === 'Sort by Spend') {
        filtered = filtered.sort((a, b) => b.spend - a.spend);
      }
      renderUsers(filtered);
      updateSummary(filtered);
      updateNextId();
    });
  });
  
  // Initial render
  renderUsers(users);
  updateSummary(users);
  updateNextId();
  
