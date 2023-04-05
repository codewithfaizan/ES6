function titleCase(str) {
    const strSp = str.split(" ");
     const Store = [];
     for (let st in strSp) {
       Store[st] = strSp[st][0].toUpperCase() + strSp[st].slice(1).toLowerCase();
     }
     return Store.join(" ");
   }
   
   let result = titleCase("dil badal de");
   console.log(result)