import React from "react";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = () => {
  return (
    <div className="container">
      <h1>Editor</h1>
      <div style={{"minHeight": "100%" }}>
        <CKEditor
          editor={ ClassicEditor }
          data="<p>Hello from CKEditor 5!</p>"
        />
      </div>
    </div>

  )
}

export default Editor;
