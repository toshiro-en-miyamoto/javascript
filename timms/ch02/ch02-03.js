/**
 * Chapter 2, Organizing Code
 * Section 3, Build me a prototype
 */

/**
 * Monkey-patching:
 * a practice of altering functionality of
 * any already defined objects.
 */

(function(){
   'use strict';
   let Castle = function(name) {
      this.name = name;
      this.build = function() {
         return this.name;
      };
   };
   const WINTER = 'Winterfell';
   let winter = new Castle(WINTER);
   console.assert(winter.build() == WINTER, winter.build());
   const HARREN = 'Harrenhall';
   let harren = new Castle(HARREN);
   console.assert(harren.build() == HARREN, harren.build());
   // The memory used to hold the function definitions
   // is NOT shared between all instances.
   // You can alter functionality of the winter instance
   // without changing the harren instance:
   // this practice is known as monkey-patching.
   const MOAT = 'Moat Cailin';
   winter.build = function() { return MOAT; };
   console.assert(winter.build() == MOAT, winter.build());
   console.assert(harren.build() == HARREN, harren.build());
})();

(function(){
   'use strict';
   // The same goes to the class.
   class Castle {
      constructor(name) {
         this.name = name;
         this.build = function () {
            return this.name;
         };
      }
   }
   const WINTER = 'Winterfell';
   let winter = new Castle(WINTER);
   console.assert(winter.build() == WINTER, winter.build());
   const HARREN = 'Harrenhall';
   let harren = new Castle(HARREN);
   console.assert(harren.build() == HARREN, harren.build());
   const MOAT = 'Moat Cailin';
   winter.build = function() { return MOAT; };
   console.assert(winter.build() == MOAT, winter.build());
   console.assert(harren.build() == HARREN, harren.build());
})();

/**
 * A prototype language is more powerful than
 * a class-based inheritance model.
 */

(function(){
   'use strict';
   let Castle = function(name) {
      this.name = name;
   };
   Castle.prototype.build = function() {
         return this.name;
   };
   // The advantage to attaching functions to the prototype
   // is that only a single copy of the function is created.
   const WINTER = 'Winterfell';
   let winter = new Castle(WINTER);
   console.assert(winter.build() == WINTER, winter.build());
   const HARREN = 'Harrenhall';
   let harren = new Castle(HARREN);
   console.assert(harren.build() == HARREN, harren.build());
   // You can still alter functionality of the winter instance
   // without changing the harren instance.
   const MOAT = 'Moat Cailin';
   winter.build = function() { return MOAT; };
   console.assert(winter.build() == MOAT, winter.build());
   console.assert(harren.build() == HARREN, harren.build());
})();
