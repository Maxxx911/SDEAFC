import './App.css';
import {
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Editor from './components/editor/Editor';
import FormBuilder from './components/formBuilder/FormBuilder';
import DocumentLayout from './components/documentLayout/DocumentLayout';

const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
     <div className="link-container">
      <Link className='button' to="/">Editor</Link>
      <Link className='button' to="/form-builder">Builder Form</Link>
      <Link className='button' to="/document-layout">Document Layout</Link>
     </div>
      <Routes>
        <Route path='/' element={<Editor />}/>
        <Route path='/form-builder' element={<FormBuilder />} />
        <Route path='/document-layout' element={<DocumentLayout />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
