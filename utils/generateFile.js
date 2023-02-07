function generateFile(data) {
  // function here
  const employees = JSON.parse(data);

  const engineers = [];
  const interns = [];

  function renderEmployees(employees) {
    for(var i=0; i < employees.length; i++) {
      if (employees[i].title === "Engineer") {
        const eperson =  `
        <section class="card flex flex-col border-dashed border-2 border-stone-400 p-2.5 mx-5 w-28 basis-80 p-8">
          <header class="card-header relative border-solid border-stone-400 border rounded-md p-1 font-extrabold text-teal-500">${employees[i].engineer_name}</header>
          <h3>${employees[i].title}</h3>
          <div class="pre bg-gradient-to-t from-cyan-500 to-blue-500 rounded-md text-stone-400">
            <ul>
              <li class="text-stone-400">ID# ${employees[i].engineer_id}</li>
              <li class="text-stone-400"><a href="mailto:${employees[i].engineer_email}">Email: ${employees[i].engineer_email}</a></li>
              <li class="text-stone-400"><a href="https://github.com/${employees[i].github}">${employees[i].github}</a></li>
            </ul>
          </div>
        </section>
        `   

        engineers.push(eperson);
      } else if (employees[i].title === "Intern") {
        const iperson = `
        <section class="card flex flex-col border-dashed border-2 border-stone-400 p-2.5 mx-5 w-28 basis-80 p-8">
          <header class="card-header relative border-solid border-stone-400 border rounded-md p-1 font-extrabold text-teal-500">${employees[i].intern_name}</header>
          <h3>${employees[i].title}</h3>
          <div class="pre bg-gradient-to-t from-cyan-500 to-blue-500 rounded-md text-stone-400">
            <ul>
              <li class="text-stone-400">ID# ${employees[i].intern_id}</li>
              <li class="text-stone-400"><a href="mailto:${employees[i].intern_email}">Email: ${employees[i].intern_email}</a></li>
              <li class="text-stone-400">Current School: ${employees[i].school}</li>
            </ul>
          </div>
        </section>
        `

        interns.push(iperson);
      }
    }

    const allEngineers = engineers.join('');
    const allInterns = interns.join('');

    return `
    <div class="p-8 grid grid-cols-4">
      <div class="col-span-1">
        <h2 class="text-2xl my-2.5 text-left text-cyan-400">Engineers</h2>
      </div>

      <div class="col-span-3">
        <div id="engineers" class="flex flex-row flex-wrap space-x-2.5 space-y-2.5">              
        ${allEngineers}      
        </div>
      </div>
    </div>

    <div class="p-8 grid grid-cols-4">
      <div class="col-span-1">
        <h2 class="text-2xl my-2.5 text-left text-cyan-400">Interns</h2>
      </div>

      <div class="col-span-3">
        <div id="interns" class="flex flex-row flex-wrap space-x-2.5 space-y-2.5">              
        ${allInterns}      
        </div>
      </div>
    </div>
    `


  }

  
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
      <header>
        <h1 class="text-2xl my-2.5 text-center text-cyan-400">Meet The Team</h1>
      </header>
      
      <main>
        <div class="p-8 grid grid-cols-4">
          <div class="col-span-1">
            <h2 class="text-2xl my-2.5 text-left text-cyan-400">Team Manager</h2>
          </div>

          <div class="col-span-3">
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
          </div>
        </div>
        
        ${renderEmployees(employees)}

      </main>
  </body>
  </html>
  
  
  `;



}

module.exports = generateFile;