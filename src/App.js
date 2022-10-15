import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/feedback-form";
import AdminPanel from "./components/admin-panel";
import NotFound from "./components/not-found";
import FormSuccess from "./components/form-success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/success" element={<FormSuccess />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
