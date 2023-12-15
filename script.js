// script.js
const profileSection = document.getElementById('profile-section');
const postsContainer = document.getElementById('posts-container');
const messagesContainer = document.getElementById('messages-container');
const conversationList = document.getElementById('conversation-list');
const currentConversation = document.getElementById('current-conversation');

function showHome() {
  postsContainer.style.display = 'block';
  messagesContainer.style.display = 'none';
}

function showMessages() {
  postsContainer.style.display = 'none';
  messagesContainer.style.display = 'block';
}

function editProfile() {
  const newProfileName = prompt('Enter your new profile name:');
  if (newProfileName) {
    document.querySelector('.user-profile h2').textContent = newProfileName;
  }
}

function loadConversations() {
  conversationList.innerHTML = ''; // Clear previous conversations

  // Simulated conversations (you can replace this with real data)
  const conversations = ['User1', 'User2', 'User3', 'User4'];

  conversations.forEach((user) => {
    const conversationItem = createConversationItem(user);
    conversationList.appendChild(conversationItem);
  });
}

function createConversationItem(user) {
  const conversationItem = document.createElement('div');
  conversationItem.textContent = user;
  conversationItem.addEventListener('click', () => showConversation(user));
  return conversationItem;
}

function showConversation(user) {
  currentConversation.innerHTML = `<h3>Conversation with ${user}</h3><ul id="message-list"></ul>`;

  // Simulated messages (you can replace this with real data)
  const messages = [
    { sender: user, content: 'Hello there!' },
    { sender: 'You', content: 'Hi! How are you?' },
    { sender: user, content: 'I am good, thanks!' }
  ];

  const messageList = document.getElementById('message-list');
  messages.forEach((message) => {
    const messageItem = createMessageItem(message);
    messageList.appendChild(messageItem);
  });

  conversationList.style.display = 'none';
  currentConversation.style.display = 'block';
}

function createMessageItem(message) {
  const messageItem = document.createElement('li');
  messageItem.textContent = `${message.sender}: ${message.content}`;
  return messageItem;
}

function loadFriendSuggestions() {
  const suggestedFriendsList = document.getElementById('suggestedFriendsList');
  suggestedFriendsList.innerHTML = ''; // Clear previous suggestions

  // Simulated friend suggestions (you can replace this with real data)
  const friendSuggestions = ['User1', 'User2', 'User3', 'User4'];

  friendSuggestions.forEach((friend) => {
    const listItem = createFriendSuggestionItem(friend);
    suggestedFriendsList.appendChild(listItem);
  });
}

function createFriendSuggestionItem(friend) {
  const listItem = document.createElement('li');
  listItem.textContent = friend;

  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  addButton.addEventListener('click', () => sendFriendRequest(friend));

  listItem.appendChild(addButton);
  return listItem;
}

function sendFriendRequest(friend) {
  alert(`Friend request sent to ${friend}`);
}

// Load friend suggestions and conversations when the page is loaded
loadFriendSuggestions();
loadConversations();
showHome();  // Show home by default

// script.js
// ...

function postUpdate() {
  const postInput = document.getElementById('postInput');
  const postContent = postInput.value.trim();

  if (postContent !== '') {
    const post = {
      content: postContent,
      author: 'You',
      date: getCurrentDate(),
      likes: 0,
      comments: [],
    };

    displayPost(post);
    clearPostInput();
  }
}

function getCurrentDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  return new Date().toLocaleDateString('en-US', options);
}

function displayPost(post) {
  const postsContainer = document.getElementById('posts-container');

  const postElement = document.createElement('div');
  postElement.className = 'post';

  const postHeader = document.createElement('div');
  postHeader.className = 'post-header';
  postHeader.textContent = `${post.author} - ${post.date}`;

  const postContent = document.createElement('p');
  postContent.textContent = post.content;

  const postFooter = document.createElement('div');
  postFooter.className = 'post-footer';

  const likeButton = document.createElement('button');
  likeButton.textContent = 'Like';
  likeButton.addEventListener('click', () => likePost(post));

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comment';
  commentButton.addEventListener('click', () => commentOnPost(post));

  const likesCount = document.createElement('span');
  likesCount.textContent = `${post.likes} likes`;

  const commentsList = document.createElement('ul');
  commentsList.className = 'comments-list';

  postFooter.appendChild(likeButton);
  postFooter.appendChild(commentButton);
  postFooter.appendChild(likesCount);
  postFooter.appendChild(commentsList);

  postElement.appendChild(postHeader);
  postElement.appendChild(postContent);
  postElement.appendChild(postFooter);

  postsContainer.insertBefore(postElement, postsContainer.firstChild);
}

function likePost(post) {
  post.likes += 1;
  const likesCount = document.querySelector(`.post:contains("${post.content}") .post-footer span`);
  likesCount.textContent = `${post.likes} likes`;
}

function commentOnPost(post) {
  const commentInput = prompt('Enter your comment:');
  if (commentInput) {
    const comment = {
      author: 'You',
      content: commentInput,
    };
    post.comments.push(comment);
    displayComments(post);
  }
}

function displayComments(post) {
  const commentsList = document.querySelector(`.post:contains("${post.content}") .post-footer .comments-list`);
  commentsList.innerHTML = '';

  post.comments.forEach((comment) => {
    const commentItem = document.createElement('li');
    commentItem.textContent = `${comment.author}: ${comment.content}`;
    commentsList.appendChild(commentItem);
  });
}

function clearPostInput() {
  document.getElementById('postInput').value = '';
}

// ...
function loadUserProfile() {
    // Simulated user data (replace with actual data from your system)
    const userProfile = {
      username: 'User123',
      status: 'Online',
      friends: ['Friend1', 'Friend2', 'Friend3'],
    };
  
    displayUserProfile(userProfile);
    loadUserPosts();
    loadFriends(userProfile.friends);
  }
  
  function displayUserProfile(userProfile) {
    const profileDetails = document.querySelector('.user-profile .profile-details');
    profileDetails.innerHTML = `
      <h2>${userProfile.username}'s Profile</h2>
      <p>Status: ${userProfile.status}</p>
      <button onclick="editProfile()">Edit Profile</button>
    `;
  }
  
  function loadUserPosts() {
    // Simulated user posts (replace with actual data from your system)
    const userPosts = [
      { content: 'This is my first post!', date: '2023-01-15', likes: 5, comments: [] },
      { content: 'Feeling great today!', date: '2023-01-16', likes: 8, comments: [] },
    ];
  
    userPosts.forEach((post) => displayPost(post));
  }
  
  function loadFriends(friendsList) {
    const friendList = document.getElementById('friendList');
    friendList.innerHTML = ''; // Clear previous friend list
  
    friendsList.forEach((friend) => {
      const listItem = createFriendListItem(friend);
      friendList.appendChild(listItem);
    });
  }
  
  function createFriendListItem(friend) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="https://via.placeholder.com/50" alt="${friend}'s Profile Picture">
      <span>${friend}</span>
      <button onclick="sendFriendRequest('${friend}')">Add Friend</button>
    `;
    return listItem;
  }
  
  function sendFriendRequest(friend) {
    alert(`Friend request sent to ${friend}`);
  }
  