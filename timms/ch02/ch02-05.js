/**
 * Chapter 2, Organizing Code
 * Section 5, Modules
 * 
 * There is no first class support for namespaces
 * but we can isolate functionality to the
 * equivalent of a namespace.
 */

// To start, we simply need to attach an object to
// the global namespace. This object will contain
// our root namespace.

// ReferenceError: Cannot access 'Wester' before initialization
// let Wester = Wester || {};
var Wester = Wester || {};
Wester.Structures = Wester.Structures || {};

(function() {
   'use strict';
   Wester.Structures.Castle1 = function(name) {
      this.name = name;
   };
   Wester.Structures.Castle1.prototype.Build = function() {
      return 'Castle1 built: ' + this.name;
   };

   const WINTER = 'Winterfell';
   let winter = new Wester.Structures.Castle1(WINTER);
   console.assert(winter.Build() == 'Castle1 built: ' + WINTER, winter.Build());
})();

(function() {
   'use strict';
   Wester.Structures.Castle2 = (function() {
      function Castle2(name) {
         this.name = name;
      }
      Castle2.prototype.Build = function() {
         return 'Castle2 built: ' + this.name;
      };
      return Castle2;
   })();

   const WINTER = 'Winterfell';
   let winter = new Wester.Structures.Castle2(WINTER);
   console.assert(winter.Build() == 'Castle2 built: ' + WINTER, winter.Build());
})();

(function() {
   'use strict';
   const __extends = function(derived, base) {
      for (let prop in base) {
         if (base.hasOwnProperty(prop)) {
            derived[prop] = base[prop];
         }
      }
      function __() { this.constructor = derived; }
      __.prototype = base.prototype;
      derived.prototype = new __();
   };
   let BaseStructure;
})();

var Westeros;
console.assert(typeof Westeros == 'undefined', typeof Westeros);

(function(Westeros) {
   'use strict';
   console.assert(typeof Westeros == 'object', typeof Westeros);
   (function (Structures) {
      console.assert(typeof Westeros.Structures == 'object', typeof Westeros.Structures);
      var Castle = (function() {
         function Castle(name) {
            this.name = name;
         }
         Castle.prototype.Build = function() {
            return 'Castle built: ' + this.name;
         };
         return Castle;
      })();
      Structures.Castle = Castle;

      var Wall = (function() {
         function Wall(castle) {
            this.name = castle['name'];
         }
         Wall.prototype.Build = function() {
            return 'Wall built around: ' + this.name;
         };
         return Wall;
      })();
      Structures.Wall = Wall;
   })(Westeros.Structures || (Westeros.Structures = {}));
})(Westeros || (Westeros = {}));

(function() {
   'use strict';
   const WINTER = 'Winterfell';
   let winter = new Westeros.Structures.Castle(WINTER);
   console.assert(winter.Build() == 'Castle built: ' + WINTER, winter.Build());
   let winterWall = new Westeros.Structures.Wall(winter);
   console.assert(winterWall.Build() == 'Wall built around: ' + WINTER, winterWall.Build());
})();
