import { Fragment } from "react";
import Card from "./Components/Card/Card";
import ContactForm from "./Components/ContactForm/ContactForm";

const App = (props) => {
  return (
    <Fragment>
      <Card>
        <ContactForm />
      </Card>
    </Fragment>
  );
}

export default App;
