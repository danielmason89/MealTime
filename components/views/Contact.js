import html from "html-literal";

export default () => html`
  <main>
    <section id="contact">
      <div class="form-header">
        <h2>Stay in Touch.</h2>
      </div>
      <form action="https://formspree.io/f/xwkangwe" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label for="email">Email</label>
        <input type="email" name="_replyto" id="email" required />
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  </main>
`;
