import './style.css'

class MyHashSet {
    constructor() {
      this.map = new Map();
    }
  
    add(key) {
      this.map.set(key, true);
    }
  
    contains(key) {
      return this.map.has(key);
    }
  
    remove(key) {
      this.map.delete(key);
    }
  }


const myHashSet1 = new MyHashSet();
const commands = ["add", "add", "contains", "contains", "add", "contains", "remove", "contains"];
const values = [[1], [2], [1], [3], [2], [2], [2], [2]];

function executeOperations(myHashSet, commands, values) {
    const results = [];
  
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      const value = values[i][0]; // Assuming each value array has only one element
  
      if (command === "add") {
        myHashSet.add(value);
        results.push(null);
      } else if (command === "contains") {
        results.push(myHashSet.contains(value));
      } else if (command === "remove") {
        myHashSet.remove(value);
        results.push(null);
      }
    }
  
    return results;
  }


console.log(executeOperations(myHashSet1, commands, values));
