/**
 * Chapter 3, Creational Patterns
 * Section 3, Factory Method
 */

var Religion;

(function(Religion) {
   'use strict';
   function validate(thing) {
      console.assert(thing !== undefined && thing !== null, thing);
   }

   Religion.WateryGod = class WateryGod {
      constructor() {}
      prayTo() { return 'Watery!'; }
   };
   Religion.AncientGod = class AncientGod {
      constructor() {}
      prayTo() { return 'Ancient!'; }
   };
   Religion.DefaultGod = class DefaultGod {
      constructor() {}
      prayTo() { return 'God!'; }
   };

   Religion.GodDetermint = class GodDetermint {
      constructor(religionName) {
         validate(religionName);
         this.religionName = religionName;
      }
   };
   Religion.GodFactory = class GodFactory {
      constructor() {}

      // the factory method
      build(determint) {
         validate(determint);
         validate(determint.religionName);
         let god;
         switch (determint.religionName) {
         case 'watery':
            god = new Religion.WateryGod();
            break;
         case 'ancient':
            god = new Religion.AncientGod();
            break;
         default:
            god = new Religion.DefaultGod();
         }
         validate(god);
         return god;
      }
   };

   Religion.Prayer = class Prayer {
      constructor(religion) {
         validate(religion);

         this.religion = religion;
         this.determint = new Religion.GodDetermint(religion);
         validate(this.determint);

         this.god = (new Religion.GodFactory()).build(this.determint);
         validate(this.god);
      }
      pray() {
         validate(this.god);
         return this.god.prayTo();
      }
   };

})(Religion || (Religion = {}));

(function() {
   'use strict';
   function validate(thing) {
      console.assert(thing !== undefined && thing !== null, thing);
   }

   // unit testing
   const god1 = new Religion.AncientGod();
   console.assert(god1.prayTo() == 'Ancient!', god1);

   const determint = new Religion.GodDetermint('ancient');
   console.assert(determint.religionName == 'ancient', determint);

   const factory = new Religion.GodFactory();
   validate(factory);
   const god2 = factory.build(determint);
   validate(god2);
   console.assert(god2 instanceof Religion.AncientGod, god2);
})();

(function() {
   'use strict';
   // true usage
   const prayer = new Religion.Prayer('ancient');
   console.assert(prayer.pray() == 'Ancient!', prayer);
})();
