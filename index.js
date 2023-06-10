function introduction(name = "Aki"){
    return "Hi, my name is " + name + "."
}

function introductionWithLanguage(name,language = "inEmber.js"){
    return "Hi, my name is " + name + " and I am learning to program in " + language + "."
}

function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language) {
    if (language === "Python") {
      return `Hi, my name is ${name} and I am learning to program in Python.`;
    }
    return `Hi, my name is ${name} and I am learning to program in JavaScript.`;
  }
  