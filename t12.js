const ratings = document.querySelectorAll(".rating");
const button = document.querySelector("button");
const feedback = document.querySelector(".feedback");

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach((r) => r.classList.remove("active"));

    rating.classList.add("active");

    button.disabled = false;
    
  });
});

button.addEventListener("click", () => {
  const selected = document.querySelector(".rating.active");
  const text = selected.querySelector("p").textContent;

  feedback.innerHTML = `
      <h2>Thank you!</h2>
      <p>Feedback: <em>${text}</em></p>
      <p>We appreciate you taking the time to help us improve.</p>
   `;
});
