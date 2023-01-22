function generateFile(data) {
  // function here
  const employees = JSON.parse(data);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Us 📧</title>
      <link rel="stylesheet" href="./assets/css/style.css" />
      <script src="https://cdn.tailwindcss.com?plugins=typography,line-clamp"></script>
  </head>
  <body>
      <section>
        // Team manager info here: ${employees[0].manager_name}
      </section>
      <section>
        // Employees here
      </section>
  </body>
  </html>
  
  
  `;

}

module.exports = generateFile;