import { Fragment } from "react";
import Card from "./Components/Card/Card";
import FormwithObjectApproach from "./Components/ContactFormUsingObjectApproch/FormwithObjectApproach";
// import ContactForm from "./Components/ContactForm/ContactForm";

const App = (props) => {
  return (
    <Fragment>
      <Card>
        {/* <ContactForm />  */}
        <FormwithObjectApproach />
      </Card>
    </Fragment>
  );
};

export default App;

