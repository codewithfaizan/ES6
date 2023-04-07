function convertHTML(str) {
    const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };


//   console.log(htmlEntities)
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

let result = convertHTML("Dolce & Gabbana");

console.log(result)