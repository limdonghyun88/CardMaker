import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageInput from "./components/image_input/image_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
