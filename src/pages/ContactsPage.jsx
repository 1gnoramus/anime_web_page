import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyD5YmQe7TIsvdX5cIrL82u-DZPEhax_b8k",
  authDomain: "anime-web-page-project.firebaseapp.com",
  projectId: "anime-web-page-project",
  storageBucket: "anime-web-page-project.appspot.com",
  messagingSenderId: "795782511995",
  appId: "1:795782511995:web:a33a2324f17a4c1fb6d1de",
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export function ContactsPage() {
  const [nameForm, setnameForm] = useState("");
  const [emailForm, setemailForm] = useState("");
  const [commForm, setcommForm] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const docRef = await addDoc(collection(firestore, "commentaries"), {
      name: nameForm,
      email: emailForm,
      commentary: commForm,
    });
    alert(`Document was created with ID: ${docRef.id}`);
  }

  return (
    <div className="contacts_page">
      <h1>Contact Us</h1>
      <h3>
        If you have any questions or suggestions, feel free to reach out to me!
      </h3>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          value={nameForm}
          onChange={(e) => {
            setnameForm(e.target.value);
          }}
          type="text"
          placeholder="Your Name"
        />
        <input
          value={emailForm}
          onChange={(e) => {
            setemailForm(e.target.value);
          }}
          type="text"
          placeholder="Your Email"
        />
        <textarea
          value={commForm}
          onChange={(e) => {
            setcommForm(e.target.value);
          }}
          rows="5"
          placeholder="Commentary"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
