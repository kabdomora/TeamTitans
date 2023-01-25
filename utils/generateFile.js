function generateFile(data) {
  // function here
  const employees = JSON.parse(data);

  employees.forEach((value, index) => {
    if (index > 0) {
      let title = value.title;

      if (title === "Engineer") {
        console.log("engineer #" + index);
      } else if (title === "Intern") {
        console.log("intern #" + index);
      }
    }
    
  });
  
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
  ${data}
  <body>
      <header>
        <h1 class="text-2xl my-2.5 text-center text-cyan-400">Meet The Team</h1>
      </header>
      
      <main>
        <div class="flex flex-row flex-wrap space-x-2.5 space-y-2.5">
          <section class="card flex flex-col border-dashed border-2 border-stone-400 p-2.5 mx-5 w-28 basis-80">
            <header class="card-header relative border-solid border-stone-400 border rounded-md p-1 font-extrabold text-teal-500">${employees[0].manager_name}</header>
            <h3>Manager</h3>
            <div class="pre bg-gradient-to-t from-cyan-500 to-blue-500 rounded-md text-stone-400">
              <ul>
                <li class="text-stone-400">ID# ${employees[0].manager_id}</li>
                <li class="text-stone-400"><a href="mailto:${employees[0].manager_email}">Email: ${employees[0].manager_email}</a></li>
                <li class="text-stone-400">Office# ${employees[0].manager_office}</li>
              </ul>
            </div>
          </section>
        </div>
        
        <div id="engineers" class="flex flex-row flex-wrap space-x-2.5 space-y-2.5">
          
            // Engineers here
          
        </div>
        <div id="interns" class="flex flex-row flex-wrap space-x-2.5 space-y-2.5">
          
            // Interns here
          
        </div>
      </main>
  </body>
  </html>
  
  
  `;



}

module.exports = generateFile;