

const loadQuestions = (language) => {
  // require the data from the file corresponding to the language
  const data = require(`./questions_${language}.json`);
  // return the data
  return data;
}
  
export default loadQuestions;
    