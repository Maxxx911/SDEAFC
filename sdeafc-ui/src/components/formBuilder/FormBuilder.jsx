import React from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";


const FormBuilder = () => {
  const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true
  };

  const creator = new SurveyCreator(creatorOptions);

  return (
    <div className="container">

      <h1>Form Builder</h1>
      <SurveyCreatorComponent creator={creator} />
    </div>
  )
}

export default FormBuilder;
