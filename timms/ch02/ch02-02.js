/**
 * Chapter 2, Organizing Code
 * Section 2, Objects in JavaScript
 */

/**
 * JavaScript has five primitive types:
 * - Undefined
 * - Null
 * - Boolean
 * - String
 * - Number
 */

(function(){
   'use strict';
   let x;
   console.assert(typeof x == 'undefined', 'undefined');
   console.assert(typeof y == 'undefined', 'undefined');
   console.assert(typeof null == 'object', 'null is an object');
   console.assert(typeof true == 'boolean', 'boolean');
   console.assert(typeof 'js' == 'string', 'string');
   console.assert(typeof 1010 == 'number', 'number');
})();

/**
 * Creating objects in JavaScript is trivial.
 * Because JavaScript is a dynamic language,
 * adding properties to objects is also quite easy.
 */

(function(){
   'use strict';
   let obj1 = {};
   console.assert(typeof obj1 == 'object', obj1);
   obj1 = { value: 'Four' };
   obj1.name = 'Gang';
   obj1.tell = function() {
      return this.name + ' of ' + this.value;
   };
   console.assert(obj1.tell() == 'Gang of Four', obj1);
   obj1 = {
      value: 'Four',
      name:  'Gang',
      tell: function() {
         return this.name + ' of ' + this.value;
      },
      llet: function() {
         return this.tell().split('').reverse().join('');
      }
   };
   console.assert(obj1.tell() == 'Gang of Four', obj1.tell());
   console.assert(obj1.llet() == 'ruoF fo gnaG', obj1.llet());
})();

/**
 * Constructors without return values are
 * functions that are called as an object is created.
 */

(function(){
   'use strict';
   let ThingDoer = function(greeting) {
      this.greeting = greeting;
      this.doThings = function() {
         return this.greeting;
      }
   };
   let doer = new ThingDoer('hello');
   console.assert(doer.doThings() == 'hello', doer.doThings());
})();

(function(){
   'use strict';
   class ThingDoer {
      constructor(greeting) {
         this.greeting = greeting;
         this.doThings = function () {
            return this.greeting;
         };
      }
   }
   let doer = new ThingDoer('hello');
   console.assert(doer.doThings() == 'hello', doer.doThings());
})();

/**
 * The ECMAScript (2018) language types are:
 * - Undefined,
 * - Null,
 * - Boolean,
 * - String,
 * - Symbol,
 * - Number, and
 * - Object.
 */

(function(){
   'use strict';
   const FOO = Symbol();
   let obj1 = {
      name: 'Hello',
      [FOO]() {
         return 'bar';
      }
   };
   console.assert(typeof obj1 == 'object', obj1);
   console.assert(typeof FOO  == 'symbol', FOO);
})();

/**
 * Iterability in ECMAScript 6 using
 * a well-known symbol Symbol.iterator.
 */

(function(){
   'use strict';
   let obj1 = {
      data: [ 'Hello', ', ', 'World' ],
      [Symbol.iterator]() {
         const self = this;
         let index = 0;
         return {
            next() {
               if (index < self.data.length) {
                  return {
                     value: self.data[index++]
                  };
               } else {
                  return { done: true };
               }
            }
        };
      } 
   };
   let s = '';
   for (let x of obj1) {
      s += x;
   }
   console.assert(s == 'Hello, World', s);
})();
