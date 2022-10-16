import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/Feedback/feedback-form";
import AdminPanel from "./components/admin-panel";
import NotFound from "./components/not-found";
import FormSuccess from "./components/form-success";
import Layout from "Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Layout(FeedbackForm)} />
        <Route path="/success" element={Layout(FormSuccess)} />
        <Route path="/admin" element={Layout(AdminPanel)} />
        <Route path="*" element={Layout(NotFound)} />
      </Routes>
    </Router>
  );
}

export default App;
