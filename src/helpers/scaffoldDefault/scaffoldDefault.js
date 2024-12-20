const scaffoldDefaultFoundry = require("./scaffoldDefaultFoundry");
const {
  scaffoldDefaultHardatJavaScript,
  scaffoldDefaultHardatTypeScript,
} = require("./ScaffoldDefaultHardhat");

const scaffoldDefault = async (projectName, framework, language) => {
  if (framework === "Foundry") {
    await scaffoldDefaultFoundry(projectName);
  } else if (framework === "Hardhat" && language === "JavaScript") {
    scaffoldDefaultHardatJavaScript(projectName);
  } else if (framework === "Hardhat" && language === "TypeScript") {
    scaffoldDefaultHardatTypeScript(projectName);
  }
};

module.exports = scaffoldDefault;
