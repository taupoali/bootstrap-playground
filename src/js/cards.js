document.addEventListener('DOMContentLoaded', () => {
  // Select the button that will trigger the creation of a new card
  const addCardButton = document.getElementById('addCardButton');

  // Add an event listener to the button
  addCardButton.addEventListener('click', () => {
      // Create a new div element for the card
      const newCard = document.createElement('div');
      newCard.className = 'card';
      newCard.style.width = '18rem';
      newCard.classList.add('mt-3'); // Add margin-top for spacing

      // Set the innerHTML for the new card
      newCard.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">New Card</h5>
              <p class="card-text">This card was added dynamically!</p>
              <button class="btn btn-primary">Another Button</button>
          </div>
      `;

      // Append the new card to the container
      document.getElementById('newCardsContainer').appendChild(newCard);
  });
});
