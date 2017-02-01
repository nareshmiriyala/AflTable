/**
 * Created by ncmiriyala on 1/02/2017.
 */
(function() {
  'use strict';
  angular
    .module('alfTableApp')
    .service('playerRatings', playerRatings);
  function playerRatings() {
    var data = [
      {
        "playerRatings": [
          {
            "position": "MIDFIELDER",
            "player": {
              "playerName": {
                "givenName": "Patrick",
                "surname": "Dangerfield"
              }
            },
            "team": {
              "teamName": "Geelong Cats"
            },
            "detailedRatings": [
              {
                "ranking": 1,
                "ratingType": "OVERALL"
              }
            ]
          },
          {
            "position": "MIDFIELDER/FORWARD",
            "player": {
              "playerName": {
                "givenName": "Robbie",
                "surname": "Gray"
              }
            },
            "team": {
              "teamName": "Port Adelaide"
            },
            "detailedRatings": [
              {
                "ranking": 2,
                "ratingType": "OVERALL"
              }
            ]
          },
          {
            "position": "MIDFIELDER",
            "player": {
              "playerName": {
                "givenName": "Josh",
                "surname": "P. Kennedy"
              }
            },
            "team": {
              "teamName": "Sydney Swans"
            },
            "detailedRatings": [
              {
                "ranking": 3,
                "ratingType": "OVERALL"
              }
            ]
          },
          {
            "position": "MIDFIELDER",
            "player": {
              "playerName": {
                "givenName": "Scott",
                "surname": "Pendlebury"
              }
            },
            "team": {
              "teamName": "Collingood"
            },
            "detailedRatings": [
              {
                "ranking": 4,
                "ratingType": "OVERALL"
              }
            ]
          },
          {
            "position": "MIDFIELDER",
            "player": {
              "playerName": {
                "givenName": "Marcus",
                "surname": "Bontempelli"
              }
            },
            "team": {
              "teamName": "Western Bulldogs"
            },
            "detailedRatings": [
              {
                "ranking": 5,
                "ratingType": "OVERALL"
              }
            ]
          }
        ]
      }
    ];

    this.getRatings = ratings;

    function ratings() {
      console.log("called Value is:"+data[0].playerRatings);
      return data[0].playerRatings;
    }
  }
})();
