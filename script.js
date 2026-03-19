document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('userEmail').value;
    const rating = document.getElementById('userRating').value;
    const text = document.getElementById('userText').value;
    const grid = document.getElementById('reviewsGrid');

    const now = new Date();
    const dateString = now.toLocaleDateString(); 
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += (i < rating) ? "★" : "☆";
    }

    const newCard = document.createElement('div');
    newCard.className = 'review-card';
    
    newCard.innerHTML = `
        <div class="profile-icon"></div>
        <span class="email">${email}</span>
        <div class="stars">${stars}</div>
        <p class="review-text">${text}</p>
        <div class="card-footer">
            <span class="timestamp">${dateString} ${timeString}</span>
        </div>
    `;

    grid.prepend(newCard);
    this.reset();
});