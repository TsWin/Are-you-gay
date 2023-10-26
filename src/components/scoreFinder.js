import { loadTextUtils } from '../assets/questions/index'

const scoreFinder = (score, language) => {
    const textUtils = loadTextUtils(language);
    if (textUtils?.error) return textUtils.error;
    if (score <= 3) return textUtils["RESULT_LEVEL_1"];
    else if (score <= 7) return textUtils["RESULT_LEVEL_2"];
    else if (score <= 11) return textUtils["RESULT_LEVEL_3"];
    else if (score <= 14) return textUtils["RESULT_LEVEL_4"];
    else if (score <= 17) return textUtils["RESULT_LEVEL_5"];
    else return textUtils["RESULT_LEVEL_6"];
    
    }
export default scoreFinder;