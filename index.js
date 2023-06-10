let name = Aki
function introduction(name){
    return "Hi, my name is " + name + "."
}

let language = inEmber.js
function introductionWithLanguage(name,language){
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
  