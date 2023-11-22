import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Resume from './components/Resume';


function App() {
  return (
  
      <Router>
     
      <div className="App">
       <h1>Welcome</h1>
       
        <Routes>
          <Route path="/"  />
          {/* <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} /> */}
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
       
      </div>
    </Router>
    
    
  );
}

export default App;
