/**
 * Created by nmiriyal on 2/02/2017.
 */
(function () {
    'use strict';
    angular.module('playerRatingsMock', ['ngMockE2E']).run(function ($httpBackend) {
        var ratings = [
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
        var ratingsUrl = '/api/ratings';
        $httpBackend.whenGET(ratingsUrl).respond(ratings);
        $httpBackend.whenGET(/app/).passThrough()
    });
}());