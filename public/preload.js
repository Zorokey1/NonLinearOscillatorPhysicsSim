// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge } = require("electron");
const { execFile } = require('node:child_process');
const path = require("path");
// As an example, here we use the exposeInMainWorld API to expose the browsers
// and node versions to the main window.
// They'll be accessible at "window.versions".
process.once("loaded", () => {
  contextBridge.exposeInMainWorld("versions", process.versions);
});

window.addEventListener("DOMContentLoaded", (err, output) => {
  
  var child = execFile(path.join(__dirname,"app.exe"), (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
      // log and return if we encounter an error
      console.error("could not execute command: ", err)
      return
    }
  })

  
});