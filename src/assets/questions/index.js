import config from '../../config';

function loadQuestions(language) {
  if (config.languages.includes(language)) {
    const questions = require(`./questions_${language}.json`);
    return questions;
  } else return [{
      "id": 101,
      "question": `Error : ${language} is not supported. Please select a language from ${config.languages.toString()}.`,
      "answers": [],
      "points": []
  }];
}

function loadTextUtils(language) {
  if (config.languages.includes(language)) {
    const textUtils = require(`./textUtils_${language}.json`);
    return textUtils;
  } else return {
    "error": `Error : ${language} is not supported. Please select a language from ${config.languages.toString()}.`
  };
}
  
export {
    loadQuestions,
    loadTextUtils
};
    