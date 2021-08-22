import html from "html-literal";

export default () => html`
  <main>
    <section id="contact">
      <div class="form-header">
        <h2>Stay in Touch.</h2>
      </div>
      <form
        class="form-wrapper"
        action="https://formspree.io/f/xwkangwe"
        method="POST"
      >
        <div class="name-form">
          <label class="label" for="name">Name</label>
          <input class="input" type="text" name="name" id="name" required />
        </div>
        <div class="email-form">
          <label class="label" for="email">Email</label>
          <input
            class="input"
            type="email"
            name="_replyto"
            id="email"
            required
          />
        </div>
        <div class="message-form">
          <label class="label" for="message">Message</label>
          <textarea name="message" id="message" cols="100" rows="5"></textarea>
        </div>

        <button class="form-wrapper button" type="submit">Send</button>
      </form>
    </section>
  </main>
`;
