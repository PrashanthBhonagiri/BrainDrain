import { Authenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import WelcomeMessage from './components/Authentication/WelcomeMessage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';


function App() {
  

  return (
    <Router>
      <Authenticator>
        <Navigation />
        <Routes>
          <Route path="/quiz-generator" element={<WelcomeMessage />} />
        </Routes>
      </Authenticator>

    </Router>
  );
}

export default App;
