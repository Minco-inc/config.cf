const fs = require("fs");
const config = require("./config");

function wildTest(wildcard, str) {
      let w = wildcard.replace(/[.+^${}()|[\]\\]/g, '\\$&'); // regexp escape 
      const re = new RegExp(`^${w.replace(/\*/g,'.*').replace(/\?/g,'.')}$`,'i');
      return re.test(str); // remove last 'i' above to have case sensitive
}
