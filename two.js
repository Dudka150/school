function DeepCopy(obj) {
    const clonedObjects = [];
  
    function copy(obj) {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }
  
      const found = clonedObjects.find(item => item.original === obj);
      if (found) {
        return found.copy;
      }
  
      const clone = Array.isArray(obj) ? [] : {};
  
      clonedObjects.push({ original: obj, copy: clone });
  
      for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          clone[key] = copy(obj[key]);
        }
      }
  
      return clone;
    }
  
    return copy(obj);
  }

