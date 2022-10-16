import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/Feedback/feedback-form";
import AdminPanel from "./components/admin-panel";
import NotFound from "./components/not-found";
import FormSuccess from "./components/form-success";
import Layout from "Layout";
import { isEmpty } from "utils";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || {};
    setData(reviews);
  }, []);

  useEffect(() => {
    if (isEmpty(data)) {
      return;
    }
    localStorage.setItem("reviews", JSON.stringify(data));
  }, [data]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={Layout(FeedbackForm, { data, setData })} />
        <Route path="/success" element={Layout(FormSuccess, { data })} />
        <Route path="/admin" element={Layout(AdminPanel, { data })} />
        <Route path="*" element={Layout(NotFound)} />
      </Routes>
    </Router>
  );
}

export default App;
