function searchString(str, str1) {
    let result = "";
    let count = 0;
    let matches = 0;
    for (let i = 0; i <= str.length - 1; i++) {
      if (str[i] == str1[count]) {
        // console.log(str1[count], str[i]);
        result += str[i];
        count++;
        if (result == str1) {
          matches++;
        }
      } else if (str[i] !== str[count]) {
        result = "";
        count = 0;
      }
    }
    return matches;
  }
  console.log(searchString("Masum", "um"));
  console.log(searchString("WOWOMGWOMG", "OMG"));
  