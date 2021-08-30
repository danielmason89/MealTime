import html from "html-literal";

export default st =>
  html`
    <main>
      <section id="recipes">
        <div class="form-header">
          <h2>Choose a Meal.</h2>
        </div>
        <form class="form-wrapper" method="POST" action="">
          <div class="meal-form">
            <label class="label" for="meal">Meal${st.post}</label>
            <select class="input" id="meal" name="meal">
              <option value="">Select a Meal</option>
              <option value="tacos">Tacos</option>
              <option value="pasta">Pasta</option>
            </select>
          </div>
          <div class="time-form">
            <label class="label" for="duration">Time</label>
            <select class="input" id="duration" name="duration">
              <option value="">Select a Time</option>
              <option value="20">20 minutes</option>
              <option value="45">45 minutes</option>
            </select>
          </div>
          <div class="diet-form">
            <label class="label" for="dietaryNeeds">Diet</label>
            <select class="input" id="dietaryNeeds" name="dietaryNeeds">
              <option value="">Select a Diet</option>
              <option value="noMilk">Lactose-intolerant</option>
              <option value="noFish">Pescetarian</option>
            </select>
          </div>
          <button href="https://www.foodista.com/recipe/2TTY2HPQ/kks-fish-tacos" class="form-wrapper button" type="submit"
            name="submit">
            Send
          </button>
        </form>
      </section>
    </main>
  `;
