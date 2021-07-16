import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {Container} from "design-react-kit";

const Form = () => (
  <Layout>
    {/* eslint-disable-next-line*/}
    <SEO title="form" />
    <Container>
          <form name="contact" action="/success" method="POST" data-netlify="true">
          <input type="hidden" name="bot-field" />
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    <br/>
    <form name="dogPictures" action="/success" method="POST" data-netlify="true">
  <p>
    <label>Dog’s Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Dog’s Picture: <input type="file" name="picture" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

    </Container>




  </Layout>
);

export default Form;
