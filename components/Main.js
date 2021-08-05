import * as views from "./views";
export default st => `${views[st.views](st)}
`;
