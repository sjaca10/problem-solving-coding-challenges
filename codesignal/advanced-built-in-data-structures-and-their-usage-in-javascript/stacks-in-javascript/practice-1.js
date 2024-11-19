/** 
 * Fixing the Cafeteria Tray Stack
 */

class CafeteriaStack {
  constructor() {
      this.stack = [];
  }

  addTray(trayId) {
      this.stack.push(trayId);
  }

  removeTray() {
      if (this.stack.length === 0) {  // Simplified check for an empty stack
          console.log("No more trays!")
      } else {
          return this.stack.pop();
      }
  }
}

// Sample usage
const cafeteria = new CafeteriaStack();
cafeteria.addTray("Tray_4");  // Adding a tray to the stack
console.log(cafeteria.removeTray());  // This should print "Tray_4"
console.log(cafeteria.removeTray());  // Prints: "No more trays!"
