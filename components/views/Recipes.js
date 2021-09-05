import html from "html-literal";

export default st =>
  html`
    <main>
      <section id="recipes">
        <div class="form-header">
          <h2>Choose a Meal.</h2>
        </div>
        <form class="form-wrapper" method="POST" action="" id="myForm">
          <div class="meal-form">
            <label class="label" for="meal">Meal</label>
            <select class="input" id="meal" name="meal">
              <option value="">Select a Meal</option>
              <option value="tacos">Taco</option>
              <option value="pasta">Pasta</option>
            </select>
          </div>
          <div class="time-form">
            <label class="label" for="time">Time</label>
            <select class="input" id="time" name="time">
              <option value="">Select a Time</option>
              <option value="20">20 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
              <option value="80">80 minutes</option>
            </select>
          </div>
          <div class="diet-form">
            <label class="label" for="diet">Diet</label>
            <select class="input" id="diet" name="diet">
              <option value="">Select a Diet</option>
              <option value="">Lactose-intolerant</option>
              <option value="">Ketogenic</option>
              <option value="">Pescetarian</option>
            </select>
          </div>
          <button class="form-wrapper button" type="submit" name="submit">
            Send
          </button>
        </form>
      </section>
    </main>
  `;
