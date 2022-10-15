import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/feedback-form";
import AdminPanel from "./components/admin-panel";
import NotFound from "./components/not-found";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
