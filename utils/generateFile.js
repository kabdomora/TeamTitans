function generateFile(data) {
  // function here
  const employees = JSON.parse(data);
  return `${employees[0].manager_name}`;

}

module.exports = generateFile;