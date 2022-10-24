//to make a new empty map
// Map<String, String> map = new;
// HashMap<String, String>();

const map = Object.create(null); // has _proto_ property?
const map1 = {}; //doesnt have any properties
const map2 = {String, String};

//map.get(key) - retrieves stored value for a key, or null if that key is not present in the map
//map.put(key, value) - stores a new key/value pair in the map. overwrites any existing value for that key.
//map.containsKey(key) - returns true if the key is in the map, false otherwise
//map.remove(key) - removes the key/value pair for this key if present. does nothing if the key is not present.


/**MAP 1 */

{//map share
    if (map.containsKey('a')) {
        var tmp = map.get('a'); //have to use var?
        map.put('b', tmp); //.put replaces first element with second element
    }
    map.remove('c'); // .removes removes element from array
    return map;
}


{//map bully
    if (map.containsKey('a') ){
        var tmp = map.get('a');
        map.put('b', tmp);
        map.put('a', '')
    }
    return map;
}

{//map ab
    if (map.containsKey('a') && map.containsKey('b')) {
        var ab = map.get('a') + map.get('b');
        map.put('ab', ab)
    }
}



