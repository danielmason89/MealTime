import html from "html-literal";

export default st =>
  html`
    <main>
      <form id="mealTime" method="POST" action="">
        <h2>Choose a Meal</h2>
        <div>
          <label for="meal">Meal:</label>
          <select id="meal" name="meal">
            <option value="">Select a Meal</option>
            <option value="tacos">Tacos</option>
            <option value="pasta">Pasta</option>
          </select>
        </div>
        <div>
          <label for="duration">Time:</label>
          <select id="duration" name="duration">
            <option value="">Select a Time</option>
            <option value="20">20 minutes</option>
            <option value="45">45 minutes</option>
          </select>
        </div>
        <div>
          <label for="dietaryNeeds">Diet:</label>
          <select id="dietaryNeeds" name="dietaryNeeds">
            <option value="">Select a Diet</option>
            <option value="noMilk">Lactose-intolerant</option>
            <option value="noFish">Pescetarian</option>
          </select>
        </div>
        <input type="submit" name="submit" value="Submit Choice" />
      </form>
    </main>
  `;
