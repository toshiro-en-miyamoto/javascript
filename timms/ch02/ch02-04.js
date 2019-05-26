/**
 * Chapter 2, Organizing Code
 * Section 4, Inheritance
 * 
 * There is no inheritance in JavaScript
 * because of its prototype nature.
 * However, you can combine functions
 * from one prototype into another.
 */

(function(){
   'use strict';
   let Castle = function() {};
   Castle.prototype.build = function() {
      return 'Castle built';
   };
   // want Winterfell inherit from Castle
   let Winterfell = function() {};
   Winterfell.prototype.build = Castle.prototype.build;
   // now Winterfell inherits from Castle
   let winter = new Winterfell();
   console.assert(winter.build() == 'Castle built', winter.build());
   // how about altering the build() in Castle?
   Castle.prototype.build = function() {
      return 'new Castle built';
   };
   // Winterfell holds the copy of the old function.
   console.assert(winter.build() == 'Castle built', winter.build());
})();

