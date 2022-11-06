import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
     setupNodeEvents(on, config) {
      // implement node event listeners here
     },
      //setupNodeEvents(on, config) {
        // implement node event listeners here
      "baseUrl":"http://localhost:3000/",
      "env":{
        "apiUrl":"http://localhost:3000/",
        "username": "user@yopmail.com",
        "Password": "123456"  
      },
      //specPattern:'cypress/BDS'
      },
    
 
});
