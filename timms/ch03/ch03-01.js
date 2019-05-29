/**
 * Chapter 3, Creational Patterns
 * Section 1, Abstract Factory
 */

var Westeros;

(function (Westeros) {
   'use strict';
   (function (Ruling) {
      (function (Lannister) {
         const KingJoffery = (function () {
            function KingJoffery() {}
            KingJoffery.prototype.makeDecision = function () {};
            return KingJoffery;
         })();
         Lannister.KingJoffery = KingJoffery;

         Lannister.LordTywin =
         class LordTywin {
               constructor() { }
               makeDecision() { }
         };

         Lannister.LannisterFactory =
         class LannisterFactory {
            constructor() { }
            getKing() {
               return new Westeros.Ruling.Lannister.KingJoffery();
            }
            getHandOfTheKing() {
               return new Westeros.Ruling.Lannister.LordTywin();
            }
         };
      })(Ruling.Lannister || (Ruling.Lannister = {}));
   })(Westeros.Ruling || (Westeros.Ruling = {}));
})(Westeros || (Westeros = {}));

(function() {
   'use strict';
   const factory = new Westeros.Ruling.Lannister.LannisterFactory();
   const king = factory.getKing();
   console.assert(king instanceof Westeros.Ruling.Lannister.KingJoffery, king);
   const hand = factory.getHandOfTheKing();
   console.assert(hand instanceof Westeros.Ruling.Lannister.LordTywin, hand);
})();