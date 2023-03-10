import readlineSync from "readline-sync";
import manifest from "./manifest.js";

const userInput = {
  getPassword() {
    console.log(
      `Please enter a password to associate ` +
      `with your Edamame Grafana dashboard & ` +
      `Postgres database account.`
    );
    const password = readlineSync.question("Password: ");
    console.log("Password for PG & Grafana has been set as:");
    console.log(password);
    return password;
  },

  processPassword() {
    const password = this.getPassword();
    manifest.setPgGrafCredentials(password);
  }
};

export default userInput;