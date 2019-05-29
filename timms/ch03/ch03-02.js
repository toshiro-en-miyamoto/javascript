/**
 * Chapter 3, Creational Patterns
 * Section 2, Builder
 */

var Westeros;

(function(Westeros) {
   'use strict';
   Westeros.Event = class Event {
      constructor(name) {
         this.name = name;
      }
      identify() {
         return this.name;
      }
   };

   Westeros.Prize = class Prize {
      constructor(name) {
         this.name = name;
      }
      identify() {
         return this.name;
      }
   };

   Westeros.Attendee = class Attendee {
      constructor(name) {
         this.name = name;
      }
      identify() {
         return this.name;
      }
   };

   Westeros.Tournament = class Tournament {
      constructor() {
         this.events = [];
         this.prizes = [];
         this.attendees = [];
      }
   };

   Westeros.LannisterTournamentBuilder
   = class LannisterTournamentBuilder {
      constructor(){}
      build() {
          const tournament = new Westeros.Tournament();
          tournament.events.push(new Westeros.Event('Melee'));
          tournament.events.push(new Westeros.Event('Joust'));
          tournament.attendees.push(new Westeros.Attendee('Jamie'));
          tournament.prizes.push(new Westeros.Prize('Gold'));
          tournament.prizes.push(new Westeros.Prize('Silver'));
          return tournament;
      }
   };

   Westeros.BaratheonTournamentBuilder
   = class BaratheonTournamentBuilder {
      constructor(){}
      build() {
         const tournament = new Westeros.Tournament();
         tournament.events.push(new Westeros.Event('Melee'));
         tournament.events.push(new Westeros.Event('Joust'));
         tournament.attendees.push(new Westeros.Attendee('Stannis'));
         tournament.attendees.push(new Westeros.Attendee('Robert'));
         return tournament;
      }
   };

   Westeros.TournamentBuilder
   = class TournamentBuilder {
      constructor(builder) {
         this.builder = builder;
      }
      build() {
         return this.builder.build();
      }
   };

})(Westeros || (Westeros = {}));

(function() {
   'use strict';
   const event = new Westeros.Event('john');
   console.assert(event.identify() == 'john', event);
   const prize = new Westeros.Prize('gold');
   console.assert(prize.identify() == 'gold', prize);
   const attendee = new Westeros.Attendee('jane');
   console.assert(attendee.identify() == 'jane', attendee);

   const concrete = new Westeros.LannisterTournamentBuilder();
   console.assert(concrete.build().attendees[0].identify() == 'Jamie');

   const builder = new Westeros.TournamentBuilder(concrete);
   const tournament = builder.build();
   console.assert(tournament instanceof Westeros.Tournament);
   console.assert(tournament.attendees[0].identify() == 'Jamie');
})();
