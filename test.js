// function pluck(list, propertyName) {
//     var arr = [];
//     for(var i=0; i < list.length; i++){
//         arr.push(list[i][propertyName]);  
//     }
//     return arr;
// };


// // tests
// // ---
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
// console.assert(pluck(stooges, 'name')[0] === 'moe')
// console.assert(pluck(stooges, 'age')[2] === 60)

// // -----------
// // Write a function reject() that does the opposite of filter,
// // if the callback function returns a "truthy" value then that
// // item is **not** inserted into the new collection,
// // otherwise it is.
// // -----------
// function filter(array, callback){
//     var accepted = [];
//     for (var i = 0; i < array.length; i++){
//         if (callback(array[i]))
//             accepted.push(array[i]);
//     }
//         return accepted;
//     }




// function reject(list, predicate) {
//     var result = [];
//     filter(list, function(rejected){
//         return result;
//     });
//         result.push(predicate(rejected));
//     }
        
    

// // tests
// // ---
// var lt10 = [0,1,2,3,4,5,6,7,8,9,10]
// var odds = reject(lt10, function(n){ return n%2 === 0 })
// console.assert(odds[0] === 1)
// console.assert(odds[1] === 3)
// console.assert(odds[4] === 9)

// -----------
// Write a function find() that returns the very first item
// in a collection when the callback function returns true;
// otherwise returns undefined.
// -----------
// function find(list, predicate){
//     filter(list, function(a,b){
//       if (predicate(a,b) === true) {
//         console.log(list[0])
//         return list[0];
//         } 
//         console.log(undefined);
//         return undefined;
//       }
//     // };

// // tests
// // ---
// var people = [
//     {name: "Matt", teaches: "JS"},
//     {name: "Jwo", teaches: "Ruby"},
//     {name: "Dorton", teaches: "life"}
// ]
// var JS = find(people, function(n){ return n.teaches === "JS" })
// console.assert(JS.name === "Matt")


// function find(list, predicate) {
// for(var i=0; i < list.length; i++){
//   if (predicate(list[i])) return list[i];
// }
// };

// // tests
// // ---
// var people = [
//     {name: "Matt", teaches: "JS"},
//     {name: "Jwo", teaches: "Ruby"},
//     {name: "Dorton", teaches: "life"}
// ]
// var JS = find(people, function(n){ return n.teaches === "JS" })
// console.assert(JS.name === "Matt")

// var forEach = function(array, callback){
//     // var newArray = [];
//     for(var i=0; i < array.length; i++){
//         var element = array[i]
//         callback(element)
//     }
// };

// function pluck(list, propertyName){
//     var arr = [];
//     forEach(list, function(element) {
//         arr.push(list[element][propertyName])
//     });
//     return arr;
// }


// // tests
// // ---
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
// console.assert(pluck(stooges, 'name')[0] === 'moe')
// console.assert(pluck(stooges, 'age')[2] === 60)

// var forEach = function(array, callback){
//     for(var i=0; i < array.length; i++){
//         var element = array[i]
//         callback(element)
//     }
// };



// function reject(list, predicate) {
//     var rejected = [];
//     forEach(list, function(itemTested){
//         if(!predicate(itemTested)){
//             rejected.push(itemTested);
//         }
//     });
//     return rejected;
// };


//     // return list.filter(function(v){
//     //     return !properties(v);
//     // });
//     // }

//     // var rejected = [];
//     // for (var i = 0; i < list.length; i++){
//     //     if(predicate(list[i]))
//     //         rejected.push(array[i]);
//     // }
//     // return rejected;
//     // }

// // tests
// // ---
// var lt10 = [0,1,2,3,4,5,6,7,8,9,10]
// var odds = reject(lt10, function(n){ return n%2 === 0 })
// console.assert(odds[0] === 1)
// console.assert(odds[1] === 3)
// console.assert(odds[4] === 9)



// function reject(list, predicate) {
    
//     var rejected = [];
//     list.forEach(function(itemTested){
//         if(!predicate(itemTested)){
//             rejected.push(itemTested);
//         }
//     });
//     return rejected;
// };

// // tests
// // ---
// var lt10 = [0,1,2,3,4,5,6,7,8,9,10]
// var odds = reject(lt10, function(n){ return n%2 === 0 })
// console.assert(odds[0] === 1)
// console.assert(odds[1] === 3)
// console.assert(odds[4] === 9)




// using our own forEach(), map(), reduce(), and filter()
// functions written in js-functions-functional-practice-1


// -----------
// Write a function pluck() that extracts a list of
// values associated with property names.
// -----------
// function pluck(list, propertyName) {
//     var arr = [];
//     list[objA].map(function(objA){
//         arr.push([propertyName]);  
//     }
//     return arr;
// };

// // tests
// // ---
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
// console.assert(pluck(stooges, 'name')[0] === 'moe')
// console.assert(pluck(stooges, 'age')[2] === 60)

// // -----------
// // Write a function reject() that does the opposite of filter,
// // if the callback function returns a "truthy" value then that
// // item is **not** inserted into the new collection,
// // otherwise it is.
// // -----------
// // var forEach = function(array, callback){
// //     for(var i=0; i < array.length; i++){
// //         var element = array[i]
// //         callback(element)
// //     }
// // };

// // list.forEach(function(){})
// // forEach([], function(){})

// function reject(list, predicate) {
    
//     var rejected = [];
//     list.forEach(function(itemTested){
//         if(!predicate(itemTested)){
//             rejected.push(itemTested);
//         }
//     });
//     return rejected;
// };

// // tests
// // ---
// var lt10 = [0,1,2,3,4,5,6,7,8,9,10]
// var odds = reject(lt10, function(n){ return n%2 === 0 })
// console.assert(odds[0] === 1)
// console.assert(odds[1] === 3)
// console.assert(odds[4] === 9)

// // -----------
// // Write a function find() that returns the very first item
// // in a collection when the callback function returns true;
// // otherwise returns undefined.
// // -----------
// function find(list, predicate) {
// for(var i=0; i < list.length; i++){
//   if (predicate(list[i])) return list[i];
// }
// };

// // tests
// // ---
// var people = [
//     {name: "Matt", teaches: "JS"},
//     {name: "Jwo", teaches: "Ruby"},
//     {name: "Dorton", teaches: "life"}
// ]
// var JS = find(people, function(n){ return n.teaches === "JS" })
// console.assert(JS.name === "Matt")

// var forEach = function(array, callback){
//     // var newArray = [];
//     for(var i=0; i < array.length; i++){
//         var element = array[i]
//         callback(element)
//     }
// };

// function map(array, callback){
//    var result = [];
//    forEach(array, function(element) {
//     result.push(callback(element));
//    });
//    return result;
// }

// function filter(array, callback){
//     var accepted = [];
//     for (var i = 0; i < array.length; i++){
//         if (callback(array[i]))
//             accepted.push(array[i]);
//     }
//      return accepted;
//     }

// -----------
// Write a function where() that filters for all the values
// in the properties object.
// 

function where(list, properties) {
    var result = list.filter(function(choice){
        for(var value in properties){
            if (choice[value] !== properties[value]) return false    
        }
        return true;
    });
    return result;
}
            
               
            



    //     return selected;
    // }
 

// tests
// ---
var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

// console.log(plays)
// console.log(where (plays, 'title'));
var sh8spr = where(plays, {author: "Shakespeare"})


console.assert(sh8spr instanceof Array)
console.assert(sh8spr.length === 5)
console.assert(sh8spr[0].title === "Cymbeline")

sh8spr = where(plays, {author: "Shakespeare", year: 1611})

console.assert(sh8spr.length === 0)

sh8spr = where(plays, {author: "Shakespeare", year: 1623})
console.assert(sh8spr.length === 2)

var midcentury = where(plays, {year: 1949})
console.assert(midcentury.length === 2)























// function pluck(list, propertyName) {
//     // var arr = [];
//     // for(var i=0; i < list.length; i++){
//     //     arr.push(list[i][propertyName]);  
//     // }
//     // return arr;
    
//     var a = map(list, function(element){
//         return element[propertyName];
//     })
//     return a;
// };

// var stooges = 
//     [
//         {name: 'moe', age: 40},
//         {name: 'larry', age: 50},
//         {name: 'curly', age: 60}
//     ]

// // console.log(pluck(stooges, 'age'))

// // for (var i = 0; i < arr.length; i++) {
// //     arr[i]
// // };

// // forEach(function(element)){})

// // element === arr[i]

// console.assert(pluck(stooges, 'name')[0] === 'moe')
// console.assert(pluck(stooges, 'age')[2] === 60)
