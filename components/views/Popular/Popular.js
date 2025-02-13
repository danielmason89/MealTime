class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      appVersion: "",
    };
  }

  render() {
    <>
      <h2>Hello Friend! Welcome back</h2>;
    </>;
  }
}

// export const getPopular = async () => {
//   const api = await fetch(
//     "`https://api.spoonacular.com/recipes/random?apiKey=${process.env.RECIPES_API_KEY}&number=10`"
//   );
//   const data = await api.json();
//   console.log(data);
// };
