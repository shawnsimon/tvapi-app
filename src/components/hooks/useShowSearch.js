import { useState, useEffect } from "react";

const SearchAPI = {
  value: "",
  letMeKnow() {
    // fire an event
    console.log(`The variable has changed to ${this.testVar}`);
  },
  get testVar() {
    return this.value;
  },
  set testVar(value) {
    this.value = value;
    this.letMeKnow();
  },

  subscribeToTermChange(term, callback) {
    // add an event
    return this.value;
  },
};

//   console.log(obj.testVar)

//   obj.testVar = 5;
//   console.log(obj.testVar)

//   obj.testVar = 15;
//   console.log(obj.testVar)

function useShowSearch(term) {
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    function handleTermChange(term) {
      setSearchTerm(term);
    }

    SearchAPI.subscribeToTermChange(term, handleTermChange);
    // return () => {
    //   SearchAPI.unsubscribeToTermChange(term, handleTermChange);
    // };
  });

  return searchTerm;
}
