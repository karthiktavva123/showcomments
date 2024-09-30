// Function to toggle the visibility of the comments section and change button text
function toggleComments() {
    const commentSection = document.getElementById('comments-section');
    const button = document.getElementById('show-comments-btn');
    
    if (commentSection.style.display === 'none' || commentSection.style.display === '') {
        commentSection.style.display = 'flex';
        button.textContent = 'Hide Comments'; // Change button text to 'Hide Comments'
        loadComments();
    } else {
        commentSection.style.display = 'none';
        button.textContent = 'Show Comments'; // Change button text back to 'Show Comments'
    }
}

// Function to submit a comment
function submitComment() {
    const input = document.getElementById('chat-input');
    const comment = input.value.trim();
    if (comment) {
        saveComment(comment);
        input.value = ''; // Clear the input
        loadComments(); // Refresh the comment box
    }
}

// Function to save the comment to local storage
function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Function to load and display comments
function loadComments() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = ''; // Clear previous comments
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.textContent = comment;
        chatBox.appendChild(commentDiv);
    });
}

// Ensure comments are loaded and set the correct button text when the page is refreshed or revisited
document.addEventListener('DOMContentLoaded', () => {
    const commentSection = document.getElementById('comments-section');
    const button = document.getElementById('show-comments-btn');
    
    // Set the initial state of the button based on the visibility of the comments section
    if (commentSection.style.display === 'none' || commentSection.style.display === '') {
        button.textContent = 'Show Comments';
    } else {
        button.textContent = 'Hide Comments';
    }

    loadComments();
});
