/**
 * Cafeteria Tray Management Using Stacks
 */

class CafeteriaStack {
  constructor() {
      this.trayStack = [];  // Stack to hold trays
  }

  addTray(trayId) {
      this.trayStack.push(trayId)
      // TODO: Add a new tray to the stack, considering the LIFO principle
  }

  removeTray() {
      // TODO: Remove a tray from the stack following the LIFO principle and return it
      if (this.trayStack.length > 0) {
          return this.trayStack.pop()
      } else {
          return null;  // If stack is empty, nothing to pop
      }
  }
}

// Simulating cafeteria tray management
const cafeteria = new CafeteriaStack();
cafeteria.addTray(101);
cafeteria.addTray(102);
cafeteria.addTray(103);
console.log(cafeteria.removeTray());  // This should print the number of the last tray added
