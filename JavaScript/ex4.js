function getAllSubstrings(str, sottostringa) {
    var i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            slice = str.slice(i, j);
            if (slice.length > sottostringa.length ) {
                result.push(slice);
            }
        }
    }
    return result;
  }

  function countOccurrence(sottostringhe){
    const mappa = new Map();
    for (let i = 0; i < sottostringhe.length; i++) {
        for (let index = i + 1; index < sottostringhe.length; index++) {
            //console.log(sottostringhe[i], sottostringhe[index]);
            if (sottostringhe[i] == sottostringhe[index]) {
                if (mappa.has(sottostringhe[i]) == false) {
                    mappa.set(sottostringhe[i], 1);
                } else {
                    let nome = sottostringhe[i]
                    //console.log(sottostringhe[i]);
                    //console.log(mappa.get(nome));
                    let occorrenza = mappa.get(nome) + 1;

                    mappa.set(sottostringhe[i], occorrenza);

                }
            }
        }
    }

    return mappa;
  }
  
  var theString = 'sottosottosotto';
  var sottostringa = 'sotto';

  var sottostringhe = getAllSubstrings(theString, sottostringa);

  var mappa = countOccurrence(sottostringhe);

  //console.log(sottostringhe);
  //console.log(mappa);

  let [firstKey] = mappa.keys();
  //console.log(firstKey)

  lunga = mappa.entries().next().value;

  for (let [key, value] of mappa) {
    //console.log(key + " = " + value);
    valore = mappa.get(firstKey);
    //console.log(valore);
    if (key.length > firstKey.length && value >= valore && value >= 2) {
        //console.log(stringa[0].length, lunga[0].length)
        firstKey = key;
        //console.log(firstKey);
        
    }
    }


  console.log("La sottostringa più lunga è: " + firstKey);
  
