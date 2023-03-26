const apiOptionsData =
    {
        apiInterface : [
            {
                name : "ISteamUserStats",
                methods : [
                    {
                        name : "GetUserStatsForGame",
                        version : "0002",
                        arguments : [
                            {
                                name : "steamid",
                                description: "64 bit Steam ID to return friend list for.",
                                required : true
                            },
                            {
                                name : "appid",
                                description : "The ID for the game you're requesting.",
                                required : true
                            },
                            {
                                name : "l",
                                description: "Language."
                            }
                        ]
                    }
                ]
            },
            {
                name : "ISteamUser",
                methods : [
                    {
                        name : "GetGlobalAchievementPercentagesForApp",
                        version : "0002",
                        arguments : [
                            {
                                name : "gameid",
                                description : "AppID of the game you want the news of.",
                                required : true
                            },
                            {
                                name : "format",
                                description: "Output format. json (default), xml or vdf."
                            }
                        ]
                    },
                    {
                        name : "GetPlayerSummaries",
                        version : "0002",
                        arguments : [
                            {
                                name : "steamids",
                                description : "Comma-delimited list of 64 bit Steam IDs to return profile information for. Up to 100 Steam IDs can be requested.",
                                required : true
                            },
                            {
                                name : "format",
                                description: "Output format. json (default), xml or vdf."
                            }
                        ]
                    },
                    {
                        name : "GetPlayerBans",
                        version : "1",
                        arguments : [
                            {
                                name : "steamids",
                                description : "Comma-delimited list of 64 bit Steam IDs to return profile information for. Up to 100 Steam IDs can be requested.",
                                required : true
                            }
                        ]
                    },
                    {
                        name : "ResolveVanityURL",
                        version : "1",
                        arguments : [
                            {
                                name : "vanityurl",
                                description : "Comma-delimited list of 64 bit Steam IDs to return profile information for. Up to 100 Steam IDs can be requested.",
                                required : true
                            },
                            {
                                name : "url_type",
                                description: "The type of vanity URL. 1 (default): Individual profile, 2: Group, 3: Official game group"
                            }
                        ]
                    }
                ]
            },
            {
                name : "ISteamNews"
            }
        ]
    };


const test = {
    'apiInterface': [{
        'name': 'IClientStats_1046930',
        'methods': [{'name': 'ReportEvent', 'version': '0001', 'arguments': []}]
    }, {
        'name': 'ICSGOPlayers_730',
        'methods': [{
            'name': 'GetNextMatchSharingCode',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The SteamID of the user'
            }, {
                'name': 'steamidkey',
                'type': 'string',
                'required': 'true',
                'description': 'Authentication obtained from the SteamID'
            }, {
                'name': 'knowncode',
                'type': 'string',
                'required': 'true',
                'description': 'Previously known match sharing code obtained from the SteamID'
            }]
        }]
    }, {
        'name': 'ICSGOServers_730',
        'methods': [{
            'name': 'GetGameMapsPlaytime',
            'version': '0001',
            'arguments': [{
                'name': 'interval',
                'type': 'string',
                'required': 'true',
                'description': 'What recent interval is requested, possible values: day, week, month'
            }, {
                'name': 'gamemode',
                'type': 'string',
                'required': 'true',
                'description': 'What game mode is requested, possible values: competitive, casual'
            }, {
                'name': 'mapgroup',
                'type': 'string',
                'required': 'true',
                'description': 'What maps are requested, possible values: operation'
            }]
        }, {'name': 'GetGameServersStatus', 'version': '0001', 'arguments': []}]
    }, {
        'name': 'ICSGOTournaments_730',
        'methods': [{
            'name': 'GetTournamentFantasyLineup',
            'version': '0001',
            'arguments': [{
                'name': 'event',
                'type': 'uint32',
                'required': 'true',
                'description': 'The event ID'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The SteamID of the user inventory'
            }, {
                'name': 'steamidkey',
                'type': 'string',
                'required': 'true',
                'description': 'Authentication obtained from the SteamID'
            }]
        }, {
            'name': 'GetTournamentItems',
            'version': '0001',
            'arguments': [{
                'name': 'event',
                'type': 'uint32',
                'required': 'true',
                'description': 'The event ID'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The SteamID of the user inventory'
            }, {
                'name': 'steamidkey',
                'type': 'string',
                'required': 'true',
                'description': 'Authentication obtained from the SteamID'
            }]
        }, {
            'name': 'GetTournamentLayout',
            'version': '0001',
            'arguments': [{'name': 'event', 'type': 'uint32', 'required': 'true', 'description': 'The event ID'}]
        }, {
            'name': 'GetTournamentPredictions',
            'version': '0001',
            'arguments': [{
                'name': 'event',
                'type': 'uint32',
                'required': 'true',
                'description': 'The event ID'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The SteamID of the user inventory'
            }, {
                'name': 'steamidkey',
                'type': 'string',
                'required': 'true',
                'description': 'Authentication obtained from the SteamID'
            }]
        }, {
            'name': 'UploadTournamentFantasyLineup',
            'version': '0001',
            'arguments': [{
                'name': 'event',
                'type': 'uint32',
                'required': 'true',
                'description': 'The event ID'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The SteamID of the user inventory'
            }, {
                'name': 'steamidkey',
                'type': 'string',
                'required': 'true',
                'description': 'Authentication obtained from the SteamID'
            }, {
                'name': 'sectionid',
                'type': 'uint32',
                'required': 'true',
                'description': 'Event section id'
            }, {
                'name': 'pickid0',
                'type': 'uint32',
                'required': 'true',
                'description': 'PickID to select for the slot'
            }, {
                'name': 'itemid0',
                'type': 'uint64',
                'required': 'true',
                'description': 'ItemID to lock in for the pick'
            }, {
                'name': 'pickid1',
                'type': 'uint32',
                'required': 'true',
                'description': 'PickID to select for the slot'
            }, {
                'name': 'itemid1',
                'type': 'uint64',
                'required': 'true',
                'description': 'ItemID to lock in for the pick'
            }, {
                'name': 'pickid2',
                'type': 'uint32',
                'required': 'true',
                'description': 'PickID to select for the slot'
            }, {
                'name': 'itemid2',
                'type': 'uint64',
                'required': 'true',
                'description': 'ItemID to lock in for the pick'
            }, {
                'name': 'pickid3',
                'type': 'uint32',
                'required': 'true',
                'description': 'PickID to select for the slot'
            }, {
                'name': 'itemid3',
                'type': 'uint64',
                'required': 'true',
                'description': 'ItemID to lock in for the pick'
            }, {
                'name': 'pickid4',
                'type': 'uint32',
                'required': 'true',
                'description': 'PickID to select for the slot'
            }, {
                'name': 'itemid4',
                'type': 'uint64',
                'required': 'true',
                'description': 'ItemID to lock in for the pick'
            }]
        }, {
            'name': 'UploadTournamentPredictions',
            'version': '0001',
            'arguments': [{
                'name': 'event',
                'type': 'uint32',
                'required': 'true',
                'description': 'The event ID'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The SteamID of the user inventory'
            }, {
                'name': 'steamidkey',
                'type': 'string',
                'required': 'true',
                'description': 'Authentication obtained from the SteamID'
            }, {
                'name': 'sectionid',
                'type': 'uint32',
                'required': 'true',
                'description': 'Event section id'
            }, {
                'name': 'groupid',
                'type': 'uint32',
                'required': 'true',
                'description': 'Event group id'
            }, {
                'name': 'index',
                'type': 'uint32',
                'required': 'true',
                'description': 'Index in group'
            }, {
                'name': 'pickid',
                'type': 'uint32',
                'required': 'true',
                'description': 'Pick ID to select'
            }, {
                'name': 'itemid',
                'type': 'uint64',
                'required': 'true',
                'description': 'ItemID to lock in for the pick'
            }]
        }]
    }, {
        'name': 'IDOTA2MatchStats_205790',
        'methods': [{
            'name': 'GetRealtimeStats',
            'version': '0001',
            'arguments': [{
                'name': 'server_steam_id',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }]
    }, {
        'name': 'IDOTA2MatchStats_570',
        'methods': [{
            'name': 'GetRealtimeStats',
            'version': '0001',
            'arguments': [{
                'name': 'server_steam_id',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }]
    }, {
        'name': 'IDOTA2Match_205790',
        'methods': [{
            'name': 'GetLiveLeagueGames',
            'version': '0001',
            'arguments': [{
                'name': 'league_id',
                'type': 'uint32',
                'required': 'False',
                'description': 'Only show matches of the specified league id'
            }, {
                'name': 'match_id',
                'type': 'uint64',
                'required': 'False',
                'description': 'Only show matches of the specified match id'
            }, {
                'name': 'dpc',
                'type': 'bool',
                'required': 'False',
                'description': 'Only show matches that are part of the DPC'
            }]
        }, {
            'name': 'GetMatchDetails',
            'version': '0001',
            'arguments': [{
                'name': 'match_id',
                'type': 'uint64',
                'required': 'true',
                'description': 'Match id'
            }, {
                'name': 'include_persona_names',
                'type': 'bool',
                'required': 'False',
                'description': 'Include persona names as part of the response'
            }]
        }, {
            'name': 'GetMatchHistory',
            'version': '0001',
            'arguments': [{
                'name': 'hero_id',
                'type': 'uint32',
                'required': 'False',
                'description': 'The ID of the hero that must be in the matches being queried'
            }, {
                'name': 'game_mode',
                'type': 'uint32',
                'required': 'False',
                'description': 'Which game mode to return matches for'
            }, {
                'name': 'skill',
                'type': 'uint32',
                'required': 'False',
                'description': 'The average skill range of the match, these can be [1-3] with lower numbers being lower skill. Ignored if an account ID is specified'
            }, {
                'name': 'min_players',
                'type': 'string',
                'required': 'False',
                'description': 'Minimum number of human players that must be in a match for it to be returned'
            }, {
                'name': 'account_id',
                'type': 'string',
                'required': 'False',
                'description': 'An account ID to get matches from. This will fail if the user has their match history hidden'
            }, {
                'name': 'league_id',
                'type': 'string',
                'required': 'False',
                'description': 'The league ID to return games from'
            }, {
                'name': 'start_at_match_id',
                'type': 'uint64',
                'required': 'False',
                'description': 'The minimum match ID to start from'
            }, {
                'name': 'matches_requested',
                'type': 'string',
                'required': 'False',
                'description': 'The number of requested matches to return'
            }]
        }, {
            'name': 'GetMatchHistoryBySequenceNum',
            'version': '0001',
            'arguments': [{
                'name': 'start_at_match_seq_num',
                'type': 'uint64',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'matches_requested',
                'type': 'uint32',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'GetTeamInfoByTeamID',
            'version': '0001',
            'arguments': [{
                'name': 'start_at_team_id',
                'type': 'uint64',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'teams_requested',
                'type': 'uint32',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'GetTopLiveEventGame',
            'version': '0001',
            'arguments': [{
                'name': 'partner',
                'type': 'int32',
                'required': 'true',
                'description': "Which partner's games to use."
            }]
        }, {
            'name': 'GetTopLiveGame',
            'version': '0001',
            'arguments': [{
                'name': 'partner',
                'type': 'int32',
                'required': 'true',
                'description': "Which partner's games to use."
            }]
        }, {
            'name': 'GetTopWeekendTourneyGames',
            'version': '0001',
            'arguments': [{
                'name': 'partner',
                'type': 'int32',
                'required': 'true',
                'description': "Which partner's games to use."
            }, {
                'name': 'home_division',
                'type': 'int32',
                'required': 'False',
                'description': 'Prefer matches from this division.'
            }]
        }, {
            'name': 'GetTournamentPlayerStats',
            'version': '0001',
            'arguments': [{
                'name': 'account_id',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'league_id',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'hero_id',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'time_frame',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'match_id',
                'type': 'uint64',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'GetTournamentPlayerStats',
            'version': '0002',
            'arguments': [{
                'name': 'account_id',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'league_id',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'hero_id',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'time_frame',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'match_id',
                'type': 'uint64',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'phase_id',
                'type': 'uint32',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }]
        }]
    }, {
        'name': 'IDOTA2Match_570',
        'methods': [{
            'name': 'GetLiveLeagueGames',
            'version': '0001',
            'arguments': [{
                'name': 'league_id',
                'type': 'uint32',
                'required': 'False',
                'description': 'Only show matches of the specified league id'
            }, {
                'name': 'match_id',
                'type': 'uint64',
                'required': 'False',
                'description': 'Only show matches of the specified match id'
            }, {
                'name': 'dpc',
                'type': 'bool',
                'required': 'False',
                'description': 'Only show matches that are part of the DPC'
            }]
        }, {
            'name': 'GetMatchDetails',
            'version': '0001',
            'arguments': [{
                'name': 'match_id',
                'type': 'uint64',
                'required': 'true',
                'description': 'Match id'
            }, {
                'name': 'include_persona_names',
                'type': 'bool',
                'required': 'False',
                'description': 'Include persona names as part of the response'
            }]
        }, {
            'name': 'GetMatchHistory',
            'version': '0001',
            'arguments': [{
                'name': 'hero_id',
                'type': 'uint32',
                'required': 'False',
                'description': 'The ID of the hero that must be in the matches being queried'
            }, {
                'name': 'game_mode',
                'type': 'uint32',
                'required': 'False',
                'description': 'Which game mode to return matches for'
            }, {
                'name': 'skill',
                'type': 'uint32',
                'required': 'False',
                'description': 'The average skill range of the match, these can be [1-3] with lower numbers being lower skill. Ignored if an account ID is specified'
            }, {
                'name': 'min_players',
                'type': 'string',
                'required': 'False',
                'description': 'Minimum number of human players that must be in a match for it to be returned'
            }, {
                'name': 'account_id',
                'type': 'string',
                'required': 'False',
                'description': 'An account ID to get matches from. This will fail if the user has their match history hidden'
            }, {
                'name': 'league_id',
                'type': 'string',
                'required': 'False',
                'description': 'The league ID to return games from'
            }, {
                'name': 'start_at_match_id',
                'type': 'uint64',
                'required': 'False',
                'description': 'The minimum match ID to start from'
            }, {
                'name': 'matches_requested',
                'type': 'string',
                'required': 'False',
                'description': 'The number of requested matches to return'
            }]
        }, {
            'name': 'GetMatchHistoryBySequenceNum',
            'version': '0001',
            'arguments': [{
                'name': 'start_at_match_seq_num',
                'type': 'uint64',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'matches_requested',
                'type': 'uint32',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'GetTeamInfoByTeamID',
            'version': '0001',
            'arguments': [{
                'name': 'start_at_team_id',
                'type': 'uint64',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'teams_requested',
                'type': 'uint32',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'GetTopLiveEventGame',
            'version': '0001',
            'arguments': [{
                'name': 'partner',
                'type': 'int32',
                'required': 'true',
                'description': "Which partner's games to use."
            }]
        }, {
            'name': 'GetTopLiveGame',
            'version': '0001',
            'arguments': [{
                'name': 'partner',
                'type': 'int32',
                'required': 'true',
                'description': "Which partner's games to use."
            }]
        }, {
            'name': 'GetTopWeekendTourneyGames',
            'version': '0001',
            'arguments': [{
                'name': 'partner',
                'type': 'int32',
                'required': 'true',
                'description': "Which partner's games to use."
            }, {
                'name': 'home_division',
                'type': 'int32',
                'required': 'False',
                'description': 'Prefer matches from this division.'
            }]
        }, {
            'name': 'GetTournamentPlayerStats',
            'version': '0001',
            'arguments': [{
                'name': 'account_id',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'league_id',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'hero_id',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'time_frame',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'match_id',
                'type': 'uint64',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'GetTournamentPlayerStats',
            'version': '0002',
            'arguments': [{
                'name': 'account_id',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'league_id',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'hero_id',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'time_frame',
                'type': 'string',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'match_id',
                'type': 'uint64',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'phase_id',
                'type': 'uint32',
                'required': 'False',
                'description': 'This parameter has no listed description.'
            }]
        }]
    }, {
        'name': 'IDOTA2StreamSystem_205790',
        'methods': [{
            'name': 'GetBroadcasterInfo',
            'version': '0001',
            'arguments': [{
                'name': 'broadcaster_steam_id',
                'type': 'uint64',
                'required': 'true',
                'description': '64-bit Steam ID of the broadcaster'
            }, {
                'name': 'league_id',
                'type': 'uint32',
                'required': 'False',
                'description': "LeagueID to use if we aren't in a lobby"
            }]
        }]
    }, {
        'name': 'IDOTA2StreamSystem_570',
        'methods': [{
            'name': 'GetBroadcasterInfo',
            'version': '0001',
            'arguments': [{
                'name': 'broadcaster_steam_id',
                'type': 'uint64',
                'required': 'true',
                'description': '64-bit Steam ID of the broadcaster'
            }, {
                'name': 'league_id',
                'type': 'uint32',
                'required': 'False',
                'description': "LeagueID to use if we aren't in a lobby"
            }]
        }]
    }, {
        'name': 'IDOTA2Ticket_205790',
        'methods': [{
            'name': 'GetSteamIDForBadgeID',
            'version': '0001',
            'arguments': [{'name': 'BadgeID', 'type': 'string', 'required': 'true', 'description': 'The badge ID'}]
        }, {
            'name': 'SetSteamAccountPurchased',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The 64-bit Steam ID'
            }, {'name': 'BadgeType', 'type': 'uint32', 'required': 'true', 'description': 'Badge Type'}]
        }, {
            'name': 'SteamAccountValidForBadgeType',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The 64-bit Steam ID'
            }, {
                'name': 'ValidBadgeType1',
                'type': 'uint32',
                'required': 'true',
                'description': 'Valid Badge Type 1'
            }, {
                'name': 'ValidBadgeType2',
                'type': 'uint32',
                'required': 'true',
                'description': 'Valid Badge Type 2'
            }, {
                'name': 'ValidBadgeType3',
                'type': 'uint32',
                'required': 'true',
                'description': 'Valid Badge Type 3'
            }, {'name': 'ValidBadgeType4', 'type': 'uint32', 'required': 'False', 'description': 'Valid Badge Type 4'}]
        }]
    }, {
        'name': 'IDOTA2Ticket_570',
        'methods': [{
            'name': 'GetSteamIDForBadgeID',
            'version': '0001',
            'arguments': [{'name': 'BadgeID', 'type': 'string', 'required': 'true', 'description': 'The badge ID'}]
        }, {
            'name': 'SetSteamAccountPurchased',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The 64-bit Steam ID'
            }, {'name': 'BadgeType', 'type': 'uint32', 'required': 'true', 'description': 'Badge Type'}]
        }, {
            'name': 'SteamAccountValidForBadgeType',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The 64-bit Steam ID'
            }, {
                'name': 'ValidBadgeType1',
                'type': 'uint32',
                'required': 'true',
                'description': 'Valid Badge Type 1'
            }, {
                'name': 'ValidBadgeType2',
                'type': 'uint32',
                'required': 'true',
                'description': 'Valid Badge Type 2'
            }, {
                'name': 'ValidBadgeType3',
                'type': 'uint32',
                'required': 'true',
                'description': 'Valid Badge Type 3'
            }, {'name': 'ValidBadgeType4', 'type': 'uint32', 'required': 'False', 'description': 'Valid Badge Type 4'}]
        }]
    }, {
        'name': 'IEconDOTA2_205790',
        'methods': [{
            'name': 'GetEventStatsForAccount',
            'version': '0001',
            'arguments': [{
                'name': 'eventid',
                'type': 'uint32',
                'required': 'true',
                'description': "The Event ID of the event you're looking for."
            }, {
                'name': 'accountid',
                'type': 'uint32',
                'required': 'true',
                'description': 'The account ID to look up.'
            }, {
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to provide hero names in.'
            }]
        }, {
            'name': 'GetGameItems',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to provide item names in.'
            }]
        }, {
            'name': 'GetHeroes',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to provide hero names in.'
            }, {
                'name': 'itemizedonly',
                'type': 'bool',
                'required': 'False',
                'description': 'Return a list of itemized heroes only.'
            }]
        }, {
            'name': 'GetItemCreators',
            'version': '0001',
            'arguments': [{
                'name': 'itemdef',
                'type': 'uint32',
                'required': 'true',
                'description': 'The item definition to get creator information for.'
            }]
        }, {
            'name': 'GetItemWorkshopPublishedFileIDs',
            'version': '0001',
            'arguments': [{
                'name': 'itemdef',
                'type': 'uint32',
                'required': 'true',
                'description': 'The item definition to get published file ids for.'
            }]
        }, {
            'name': 'GetRarities',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to provide rarity names in.'
            }]
        }, {
            'name': 'GetTournamentPrizePool',
            'version': '0001',
            'arguments': [{
                'name': 'leagueid',
                'type': 'uint32',
                'required': 'False',
                'description': 'The ID of the league to get the prize pool of'
            }]
        }]
    }, {
        'name': 'IEconDOTA2_570',
        'methods': [{
            'name': 'GetEventStatsForAccount',
            'version': '0001',
            'arguments': [{
                'name': 'eventid',
                'type': 'uint32',
                'required': 'true',
                'description': "The Event ID of the event you're looking for."
            }, {
                'name': 'accountid',
                'type': 'uint32',
                'required': 'true',
                'description': 'The account ID to look up.'
            }, {
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to provide hero names in.'
            }]
        }, {
            'name': 'GetHeroes',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to provide hero names in.'
            }, {
                'name': 'itemizedonly',
                'type': 'bool',
                'required': 'False',
                'description': 'Return a list of itemized heroes only.'
            }]
        }, {
            'name': 'GetItemCreators',
            'version': '0001',
            'arguments': [{
                'name': 'itemdef',
                'type': 'uint32',
                'required': 'true',
                'description': 'The item definition to get creator information for.'
            }]
        }, {
            'name': 'GetItemWorkshopPublishedFileIDs',
            'version': '0001',
            'arguments': [{
                'name': 'itemdef',
                'type': 'uint32',
                'required': 'true',
                'description': 'The item definition to get published file ids for.'
            }]
        }, {
            'name': 'GetRarities',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to provide rarity names in.'
            }]
        }, {
            'name': 'GetTournamentPrizePool',
            'version': '0001',
            'arguments': [{
                'name': 'leagueid',
                'type': 'uint32',
                'required': 'False',
                'description': 'The ID of the league to get the prize pool of'
            }]
        }]
    }, {
        'name': 'IEconItems_1046930',
        'methods': [{
            'name': 'GetPlayerItems',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }]
        }]
    }, {
        'name': 'IEconItems_1269260',
        'methods': [{
            'name': 'GetEquippedPlayerItems',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }, {
                'name': 'class_id',
                'type': 'uint32',
                'required': 'true',
                'description': 'Return items equipped for this class id'
            }]
        }]
    }, {
        'name': 'IEconItems_205790',
        'methods': [{
            'name': 'GetEquippedPlayerItems',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }, {
                'name': 'class_id',
                'type': 'uint32',
                'required': 'true',
                'description': 'Return items equipped for this class id'
            }]
        }, {
            'name': 'GetPlayerItems',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }]
        }, {
            'name': 'GetStoreMetaData',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to results in.'
            }]
        }]
    }, {
        'name': 'IEconItems_221540',
        'methods': [{
            'name': 'GetPlayerItems',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }]
        }]
    }, {
        'name': 'IEconItems_238460',
        'methods': [{
            'name': 'GetPlayerItems',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }]
        }]
    }, {
        'name': 'IEconItems_440',
        'methods': [{
            'name': 'GetPlayerItems',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }]
        }, {
            'name': 'GetSchema',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to return the names in. Defaults to returning string keys.'
            }]
        }, {
            'name': 'GetSchemaItems',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to return the names in. Defaults to returning string keys.'
            }, {
                'name': 'start',
                'type': 'int32',
                'required': 'False',
                'description': 'The first item id to return. Defaults to 0. Response will indicate next value to query if applicable.'
            }]
        }, {
            'name': 'GetSchemaOverview',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to return the names in. Defaults to returning string keys.'
            }]
        }, {'name': 'GetSchemaURL', 'version': '0001', 'arguments': []}, {
            'name': 'GetStoreMetaData',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to results in.'
            }]
        }, {'name': 'GetStoreStatus', 'version': '0001', 'arguments': []}]
    }, {
        'name': 'IEconItems_570',
        'methods': [{
            'name': 'GetPlayerItems',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }]
        }, {
            'name': 'GetStoreMetaData',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to results in.'
            }]
        }]
    }, {
        'name': 'IEconItems_583950',
        'methods': [{
            'name': 'GetEquippedPlayerItems',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }, {
                'name': 'class_id',
                'type': 'uint32',
                'required': 'true',
                'description': 'Return items equipped for this class id'
            }]
        }]
    }, {
        'name': 'IEconItems_620',
        'methods': [{
            'name': 'GetPlayerItems',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }]
        }, {
            'name': 'GetSchema',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to return the names in. Defaults to returning string keys.'
            }]
        }]
    }, {
        'name': 'IEconItems_730',
        'methods': [{
            'name': 'GetPlayerItems',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }]
        }, {
            'name': 'GetSchema',
            'version': '0002',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to return the names in. Defaults to returning string keys.'
            }]
        }, {'name': 'GetSchemaURL', 'version': '0002', 'arguments': []}, {
            'name': 'GetStoreMetaData',
            'version': '0001',
            'arguments': [{
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': 'The language to results in.'
            }]
        }]
    }, {
        'name': 'IGCVersion_1046930',
        'methods': [{'name': 'GetClientVersion', 'version': '0001', 'arguments': []}, {
            'name': 'GetServerVersion',
            'version': '0001',
            'arguments': []
        }]
    }, {
        'name': 'IGCVersion_1269260',
        'methods': [{'name': 'GetClientVersion', 'version': '0001', 'arguments': []}, {
            'name': 'GetServerVersion',
            'version': '0001',
            'arguments': []
        }]
    }, {
        'name': 'IGCVersion_205790',
        'methods': [{'name': 'GetClientVersion', 'version': '0001', 'arguments': []}, {
            'name': 'GetServerVersion',
            'version': '0001',
            'arguments': []
        }]
    }, {
        'name': 'IGCVersion_440',
        'methods': [{'name': 'GetClientVersion', 'version': '0001', 'arguments': []}, {
            'name': 'GetServerVersion',
            'version': '0001',
            'arguments': []
        }]
    }, {
        'name': 'IGCVersion_570',
        'methods': [{'name': 'GetClientVersion', 'version': '0001', 'arguments': []}, {
            'name': 'GetServerVersion',
            'version': '0001',
            'arguments': []
        }]
    }, {
        'name': 'IGCVersion_583950',
        'methods': [{'name': 'GetClientVersion', 'version': '0001', 'arguments': []}, {
            'name': 'GetServerVersion',
            'version': '0001',
            'arguments': []
        }]
    }, {
        'name': 'IGCVersion_730',
        'methods': [{'name': 'GetServerVersion', 'version': '0001', 'arguments': []}]
    }, {
        'name': 'IPortal2Leaderboards_620',
        'methods': [{
            'name': 'GetBucketizedData',
            'version': '0001',
            'arguments': [{
                'name': 'leaderboardName',
                'type': 'string',
                'required': 'true',
                'description': 'The leaderboard name to fetch data for.'
            }]
        }]
    }, {
        'name': 'ISteamApps',
        'methods': [{'name': 'GetAppList', 'version': '0001', 'arguments': []}, {
            'name': 'GetAppList',
            'version': '0002',
            'arguments': []
        }, {
            'name': 'GetSDRConfig',
            'version': '0001',
            'arguments': [{'name': 'appid', 'type': 'uint32', 'required': 'true', 'description': 'AppID of game'}]
        }, {
            'name': 'GetSDRConfig',
            'version': '0002',
            'arguments': [{'name': 'appid', 'type': 'uint32', 'required': 'true', 'description': 'AppID of game'}]
        }, {
            'name': 'GetSDRConfigLegacy',
            'version': '0001',
            'arguments': [{'name': 'appid', 'type': 'uint32', 'required': 'true', 'description': 'AppID of game'}]
        }, {
            'name': 'GetServersAtAddress',
            'version': '0001',
            'arguments': [{
                'name': 'addr',
                'type': 'string',
                'required': 'true',
                'description': 'IP or IP:queryport to list'
            }]
        }, {
            'name': 'UpToDateCheck',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'AppID of game'
            }, {
                'name': 'version',
                'type': 'uint32',
                'required': 'true',
                'description': 'The installed version of the game'
            }]
        }]
    }, {
        'name': 'ISteamBroadcast',
        'methods': [{
            'name': 'ViewerHeartbeat',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'Steam ID of the broadcaster'
            }, {
                'name': 'sessionid',
                'type': 'uint64',
                'required': 'true',
                'description': 'Broadcast Session ID'
            }, {
                'name': 'token',
                'type': 'uint64',
                'required': 'true',
                'description': 'Viewer token'
            }, {
                'name': 'stream',
                'type': 'int32',
                'required': 'False',
                'description': 'video stream representation watching'
            }]
        }]
    }, {
        'name': 'ISteamCDN',
        'methods': [{
            'name': 'SetClientFilters',
            'version': '0001',
            'arguments': [{
                'name': 'cdnname',
                'type': 'string',
                'required': 'true',
                'description': 'Steam name of CDN property'
            }, {
                'name': 'allowedipblocks',
                'type': 'string',
                'required': 'False',
                'description': 'comma-separated list of allowed IP address blocks in CIDR format - blank for not used'
            }, {
                'name': 'allowedasns',
                'type': 'string',
                'required': 'False',
                'description': 'comma-separated list of allowed client network AS numbers - blank for not used'
            }, {
                'name': 'allowedipcountries',
                'type': 'string',
                'required': 'False',
                'description': 'comma-separated list of allowed client IP country codes in ISO 3166-1 format - blank for not used'
            }]
        }, {
            'name': 'SetPerformanceStats',
            'version': '0001',
            'arguments': [{
                'name': 'cdnname',
                'type': 'string',
                'required': 'true',
                'description': 'Steam name of CDN property'
            }, {
                'name': 'mbps_sent',
                'type': 'uint32',
                'required': 'False',
                'description': 'Outgoing network traffic in Mbps'
            }, {
                'name': 'mbps_recv',
                'type': 'uint32',
                'required': 'False',
                'description': 'Incoming network traffic in Mbps'
            }, {
                'name': 'cpu_percent',
                'type': 'uint32',
                'required': 'False',
                'description': 'Percent CPU load'
            }, {
                'name': 'cache_hit_percent',
                'type': 'uint32',
                'required': 'False',
                'description': 'Percent cache hits'
            }]
        }]
    }, {
        'name': 'ISteamDirectory',
        'methods': [{
            'name': 'GetCMList',
            'version': '0001',
            'arguments': [{
                'name': 'cellid',
                'type': 'uint32',
                'required': 'true',
                'description': "Client's Steam cell ID"
            }, {
                'name': 'maxcount',
                'type': 'uint32',
                'required': 'False',
                'description': 'Max number of servers to return'
            }]
        }, {
            'name': 'GetCMListForConnect',
            'version': '0001',
            'arguments': [{
                'name': 'cellid',
                'type': 'uint32',
                'required': 'False',
                'description': "Client's Steam cell ID, uses IP location if blank"
            }, {
                'name': 'cmtype',
                'type': 'string',
                'required': 'False',
                'description': 'Optional CM type filter'
            }, {
                'name': 'realm',
                'type': 'string',
                'required': 'False',
                'description': 'Optional Steam Realm filter'
            }, {
                'name': 'maxcount',
                'type': 'uint32',
                'required': 'False',
                'description': 'Max number of servers to return'
            }]
        }, {'name': 'GetSteamPipeDomains', 'version': '0001', 'arguments': []}]
    }, {
        'name': 'ISteamEconomy',
        'methods': [{
            'name': 'GetAssetClassInfo',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'Must be a steam economy app.'
            }, {
                'name': 'language',
                'type': 'string',
                'required': 'False',
                'description': "The user's local language"
            }, {
                'name': 'class_count',
                'type': 'uint32',
                'required': 'true',
                'description': 'Number of classes requested. Must be at least one.'
            }, {
                'name': 'classid0',
                'type': 'uint64',
                'required': 'true',
                'description': 'Class ID of the nth class.'
            }, {
                'name': 'instanceid0',
                'type': 'uint64',
                'required': 'False',
                'description': 'Instance ID of the nth class.'
            }]
        }, {
            'name': 'GetAssetPrices',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'Must be a steam economy app.'
            }, {
                'name': 'currency',
                'type': 'string',
                'required': 'False',
                'description': 'The currency to filter for'
            }, {'name': 'language', 'type': 'string', 'required': 'False', 'description': "The user's local language"}]
        }]
    }, {
        'name': 'ISteamNews',
        'methods': [{
            'name': 'GetNewsForApp',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'AppID to retrieve news for'
            }, {
                'name': 'maxlength',
                'type': 'uint32',
                'required': 'False',
                'description': "Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit."
            }, {
                'name': 'enddate',
                'type': 'uint32',
                'required': 'False',
                'description': 'Retrieve posts earlier than this date (unix epoch timestamp)'
            }, {
                'name': 'count',
                'type': 'uint32',
                'required': 'False',
                'description': '# of posts to retrieve (default 20)'
            }, {
                'name': 'tags',
                'type': 'string',
                'required': 'False',
                'description': "Comma-separated list of tags to filter by (e.g. 'patchnodes')"
            }]
        }, {
            'name': 'GetNewsForApp',
            'version': '0002',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'AppID to retrieve news for'
            }, {
                'name': 'maxlength',
                'type': 'uint32',
                'required': 'False',
                'description': "Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit."
            }, {
                'name': 'enddate',
                'type': 'uint32',
                'required': 'False',
                'description': 'Retrieve posts earlier than this date (unix epoch timestamp)'
            }, {
                'name': 'count',
                'type': 'uint32',
                'required': 'False',
                'description': '# of posts to retrieve (default 20)'
            }, {
                'name': 'feeds',
                'type': 'string',
                'required': 'False',
                'description': 'Comma-separated list of feed names to return news for'
            }, {
                'name': 'tags',
                'type': 'string',
                'required': 'False',
                'description': "Comma-separated list of tags to filter by (e.g. 'patchnodes')"
            }]
        }]
    }, {
        'name': 'ISteamRemoteStorage',
        'methods': [{
            'name': 'GetCollectionDetails',
            'version': '0001',
            'arguments': [{
                'name': 'collectioncount',
                'type': 'uint32',
                'required': 'true',
                'description': 'Number of collections being requested'
            }, {
                'name': 'publishedfileids[0]',
                'type': 'uint64',
                'required': 'true',
                'description': 'collection ids to get the details for'
            }]
        }, {
            'name': 'GetPublishedFileDetails',
            'version': '0001',
            'arguments': [{
                'name': 'itemcount',
                'type': 'uint32',
                'required': 'true',
                'description': 'Number of items being requested'
            }, {
                'name': 'publishedfileids[0]',
                'type': 'uint64',
                'required': 'true',
                'description': 'published file id to look up'
            }]
        }, {
            'name': 'GetUGCFileDetails',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'False',
                'description': 'If specified, only returns details if the file is owned by the SteamID specified'
            }, {
                'name': 'ugcid',
                'type': 'uint64',
                'required': 'true',
                'description': 'ID of UGC file to get info for'
            }, {'name': 'appid', 'type': 'uint32', 'required': 'true', 'description': 'appID of product'}]
        }]
    }, {
        'name': 'ISteamUser',
        'methods': [{
            'name': 'GetFriendList',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'SteamID of user'
            }, {
                'name': 'relationship',
                'type': 'string',
                'required': 'False',
                'description': 'relationship type (ex: friend)'
            }]
        }, {
            'name': 'GetPlayerBans',
            'version': '0001',
            'arguments': [{
                'name': 'steamids',
                'type': 'string',
                'required': 'true',
                'description': 'Comma-delimited list of SteamIDs'
            }]
        }, {
            'name': 'GetPlayerSummaries',
            'version': '0001',
            'arguments': [{
                'name': 'steamids',
                'type': 'string',
                'required': 'true',
                'description': 'Comma-delimited list of SteamIDs'
            }]
        }, {
            'name': 'GetPlayerSummaries',
            'version': '0002',
            'arguments': [{
                'name': 'steamids',
                'type': 'string',
                'required': 'true',
                'description': 'Comma-delimited list of SteamIDs (max: 100)'
            }]
        }, {
            'name': 'GetUserGroupList',
            'version': '0001',
            'arguments': [{'name': 'steamid', 'type': 'uint64', 'required': 'true', 'description': 'SteamID of user'}]
        }, {
            'name': 'ResolveVanityURL',
            'version': '0001',
            'arguments': [{
                'name': 'vanityurl',
                'type': 'string',
                'required': 'true',
                'description': 'The vanity URL to get a SteamID for'
            }, {
                'name': 'url_type',
                'type': 'int32',
                'required': 'False',
                'description': 'The type of vanity URL. 1 (default): Individual profile, 2: Group, 3: Official game group'
            }]
        }]
    }, {
        'name': 'ISteamUserAuth',
        'methods': [{
            'name': 'AuthenticateUser',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'Should be the users steamid, unencrypted.'
            }, {
                'name': 'sessionkey',
                'type': 'rawbinary',
                'required': 'true',
                'description': "Should be a 32 byte random blob of data, which is then encrypted with RSA using the Steam system's public key.Randomness is important here for security."
            }, {
                'name': 'encrypted_loginkey',
                'type': 'rawbinary',
                'required': 'true',
                'description': 'Should be the users hashed loginkey, AES encrypted with the sessionkey.'
            }]
        }, {
            'name': 'AuthenticateUserTicket',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'appid of game'
            }, {
                'name': 'ticket',
                'type': 'string',
                'required': 'true',
                'description': 'Ticket from GetAuthSessionTicket.'
            }]
        }]
    }, {
        'name': 'ISteamUserOAuth',
        'methods': [{
            'name': 'GetTokenDetails',
            'version': '0001',
            'arguments': [{
                'name': 'access_token',
                'type': 'string',
                'required': 'true',
                'description': 'OAuth2 token for which to return details'
            }]
        }]
    }, {
        'name': 'ISteamUserStats',
        'methods': [{
            'name': 'GetGlobalAchievementPercentagesForApp',
            'version': '0001',
            'arguments': [{
                'name': 'gameid',
                'type': 'uint64',
                'required': 'true',
                'description': 'GameID to retrieve the achievement percentages for'
            }]
        }, {
            'name': 'GetGlobalAchievementPercentagesForApp',
            'version': '0002',
            'arguments': [{
                'name': 'gameid',
                'type': 'uint64',
                'required': 'true',
                'description': 'GameID to retrieve the achievement percentages for'
            }]
        }, {
            'name': 'GetGlobalStatsForGame',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': "AppID that we're getting global stats for"
            }, {
                'name': 'count',
                'type': 'uint32',
                'required': 'true',
                'description': 'Number of stats get data for'
            }, {
                'name': 'name[0]',
                'type': 'string',
                'required': 'true',
                'description': 'Names of stat to get data for'
            }, {
                'name': 'startdate',
                'type': 'uint32',
                'required': 'False',
                'description': 'Start date for daily totals (unix epoch timestamp)'
            }, {
                'name': 'enddate',
                'type': 'uint32',
                'required': 'False',
                'description': 'End date for daily totals (unix epoch timestamp)'
            }]
        }, {
            'name': 'GetNumberOfCurrentPlayers',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': "AppID that we're getting user count for"
            }]
        }, {
            'name': 'GetPlayerAchievements',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'SteamID of user'
            }, {
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'AppID to get achievements for'
            }, {'name': 'l', 'type': 'string', 'required': 'False', 'description': 'Language to return strings for'}]
        }, {
            'name': 'GetSchemaForGame',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'appid of game'
            }, {
                'name': 'l',
                'type': 'string',
                'required': 'False',
                'description': 'localized langauge to return (english, french, etc.)'
            }]
        }, {
            'name': 'GetSchemaForGame',
            'version': '0002',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'appid of game'
            }, {
                'name': 'l',
                'type': 'string',
                'required': 'False',
                'description': 'localized language to return (english, french, etc.)'
            }]
        }, {
            'name': 'GetUserStatsForGame',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'SteamID of user'
            }, {'name': 'appid', 'type': 'uint32', 'required': 'true', 'description': 'appid of game'}]
        }, {
            'name': 'GetUserStatsForGame',
            'version': '0002',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'SteamID of user'
            }, {'name': 'appid', 'type': 'uint32', 'required': 'true', 'description': 'appid of game'}]
        }]
    }, {
        'name': 'ISteamWebAPIUtil',
        'methods': [{'name': 'GetServerInfo', 'version': '0001', 'arguments': []}, {
            'name': 'GetSupportedAPIList',
            'version': '0001',
            'arguments': []
        }]
    }, {
        'name': 'ISteamWebUserPresenceOAuth',
        'methods': [{
            'name': 'PollStatus',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'string',
                'required': 'true',
                'description': 'Steam ID of the user'
            }, {
                'name': 'umqid',
                'type': 'uint64',
                'required': 'true',
                'description': 'UMQ Session ID'
            }, {
                'name': 'message',
                'type': 'uint32',
                'required': 'true',
                'description': 'Message that was last known to the user'
            }, {
                'name': 'pollid',
                'type': 'uint32',
                'required': 'False',
                'description': 'Caller-specific poll id'
            }, {
                'name': 'sectimeout',
                'type': 'uint32',
                'required': 'False',
                'description': 'Long-poll timeout in seconds'
            }, {
                'name': 'secidletime',
                'type': 'uint32',
                'required': 'False',
                'description': 'How many seconds is client considering itself idle, e.g. screen is off'
            }, {
                'name': 'use_accountids',
                'type': 'uint32',
                'required': 'False',
                'description': 'Boolean, 0 (default): return steamid_from in output, 1: return accountid_from'
            }]
        }]
    }, {
        'name': 'ITFItems_440',
        'methods': [{'name': 'GetGoldenWrenches', 'version': '0001', 'arguments': []}, {
            'name': 'GetGoldenWrenches',
            'version': '0002',
            'arguments': []
        }]
    }, {
        'name': 'ITFPromos_440',
        'methods': [{
            'name': 'GetItemID',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }, {
                'name': 'promoid',
                'type': 'uint32',
                'required': 'true',
                'description': 'The promo ID to grant an item for'
            }]
        }, {
            'name': 'GrantItem',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }, {
                'name': 'promoid',
                'type': 'uint32',
                'required': 'true',
                'description': 'The promo ID to grant an item for'
            }]
        }]
    }, {
        'name': 'ITFPromos_620',
        'methods': [{
            'name': 'GetItemID',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }, {
                'name': 'PromoID',
                'type': 'uint32',
                'required': 'true',
                'description': 'The promo ID to grant an item for'
            }]
        }, {
            'name': 'GrantItem',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The Steam ID to fetch items for'
            }, {
                'name': 'PromoID',
                'type': 'uint32',
                'required': 'true',
                'description': 'The promo ID to grant an item for'
            }]
        }]
    }, {'name': 'ITFSystem_440', 'methods': [{'name': 'GetWorldStatus', 'version': '0001', 'arguments': []}]}, {
        'name': 'IGameServersService',
        'methods': [{'name': 'GetAccountList', 'version': '0001', 'arguments': []}, {
            'name': 'CreateAccount',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'The app to use the account for'
            }, {
                'name': 'memo',
                'type': 'string',
                'required': 'true',
                'description': 'The memo to set on the new account'
            }]
        }, {
            'name': 'SetMemo',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The SteamID of the game server to set the memo on'
            }, {
                'name': 'memo',
                'type': 'string',
                'required': 'true',
                'description': 'The memo to set on the new account'
            }]
        }, {
            'name': 'ResetLoginToken',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The SteamID of the game server to reset the login token of'
            }]
        }, {
            'name': 'DeleteAccount',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The SteamID of the game server account to delete'
            }]
        }, {
            'name': 'GetAccountPublicInfo',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The SteamID of the game server to get info on'
            }]
        }, {
            'name': 'QueryLoginToken',
            'version': '0001',
            'arguments': [{
                'name': 'login_token',
                'type': 'string',
                'required': 'true',
                'description': 'Login token to query'
            }]
        }, {
            'name': 'GetServerSteamIDsByIP',
            'version': '0001',
            'arguments': [{
                'name': 'server_ips',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'GetServerIPsBySteamID',
            'version': '0001',
            'arguments': [{
                'name': 'server_steamids',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'QueryByFakeIP',
            'version': '0001',
            'arguments': [{
                'name': 'fake_ip',
                'type': 'uint32',
                'required': 'true',
                'description': 'FakeIP of server to query.'
            }, {
                'name': 'fake_port',
                'type': 'uint32',
                'required': 'true',
                'description': 'Fake port of server to query.'
            }, {
                'name': 'app_id',
                'type': 'uint32',
                'required': 'true',
                'description': 'AppID to use.Each AppID has its own FakeIP address.'
            }, {'name': 'query_type', 'type': '{enum}', 'required': 'true', 'description': 'What type of query?'}]
        }]
    }, {
        'name': 'IPlayerService',
        'methods': [{
            'name': 'IsPlayingSharedGame',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': "The player we're asking about"
            }, {
                'name': 'appid_playing',
                'type': 'uint32',
                'required': 'true',
                'description': 'The game player is currently playing'
            }]
        }, {
            'name': 'RecordOfflinePlaytime',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'ticket',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'play_sessions',
                'type': '{message}',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'GetRecentlyPlayedGames',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': "The player we're asking about"
            }, {
                'name': 'count',
                'type': 'uint32',
                'required': 'true',
                'description': 'The number of games to return (0/unset: all)'
            }]
        }, {
            'name': 'GetOwnedGames',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': "The player we're asking about"
            }, {
                'name': 'include_appinfo',
                'type': 'bool',
                'required': 'true',
                'description': 'true if we want additional details (name, icon) about each game'
            }, {
                'name': 'include_played_free_games',
                'type': 'bool',
                'required': 'true',
                'description': 'Free games are excluded by default.If this is set, free games the user has played will be returned.'
            }, {
                'name': 'appids_filter',
                'type': 'uint32',
                'required': 'true',
                'description': 'if set, restricts result set to the passed in apps'
            }, {
                'name': 'include_free_sub',
                'type': 'bool',
                'required': 'true',
                'description': 'Some games are in the free sub, which are excluded by default.'
            }, {
                'name': 'skip_unvetted_apps',
                'type': 'bool',
                'required': 'False',
                'description': 'if set, skip unvetted store apps'
            }, {
                'name': 'language',
                'type': 'string',
                'required': 'true',
                'description': 'Will return appinfo in this language'
            }, {
                'name': 'include_extended_appinfo',
                'type': 'bool',
                'required': 'true',
                'description': 'true if we want even more details (capsule, sortas, and capabilities) about each game.include_appinfo must also be true.'
            }]
        }, {
            'name': 'GetSteamLevel',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': "The player we're asking about"
            }]
        }, {
            'name': 'GetBadges',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': "The player we're asking about"
            }]
        }, {
            'name': 'GetCommunityBadgeProgress',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': "The player we're asking about"
            }, {'name': 'badgeid', 'type': 'int32', 'required': 'true', 'description': "The badge we're asking about"}]
        }]
    }, {
        'name': 'IAuthenticationService',
        'methods': [{
            'name': 'PollAuthSessionStatus',
            'version': '0001',
            'arguments': [{
                'name': 'client_id',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'request_id',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'token_to_revoke',
                'type': 'uint64',
                'required': 'true',
                'description': 'If this is set to a token owned by this user, that token will be retired'
            }]
        }, {
            'name': 'GetAuthSessionInfo',
            'version': '0001',
            'arguments': [{
                'name': 'client_id',
                'type': 'uint64',
                'required': 'true',
                'description': 'client ID from scanned QR Code, used for routing'
            }]
        }, {
            'name': 'GetPasswordRSAPublicKey',
            'version': '0001',
            'arguments': [{
                'name': 'account_name',
                'type': 'string',
                'required': 'true',
                'description': 'user-provided account name to get an RSA key for'
            }]
        }, {
            'name': 'BeginAuthSessionViaCredentials',
            'version': '0001',
            'arguments': [{
                'name': 'device_friendly_name',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'account_name',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'encrypted_password',
                'type': 'string',
                'required': 'true',
                'description': 'password, RSA encrypted client side'
            }, {
                'name': 'encryption_timestamp',
                'type': 'uint64',
                'required': 'true',
                'description': 'timestamp to map to a key - STime'
            }, {
                'name': 'remember_login',
                'type': 'bool',
                'required': 'true',
                'description': 'deprecated'
            }, {
                'name': 'platform_type',
                'type': '{enum}',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'persistence',
                'type': '{enum}',
                'required': 'False',
                'description': 'whether we are requesting a persistent or an ephemeral session'
            }, {
                'name': 'website_id',
                'type': 'string',
                'required': 'False',
                'description': '(EMachineAuthWebDomain) identifier of client requesting auth'
            }, {
                'name': 'device_details',
                'type': '{message}',
                'required': 'true',
                'description': 'User-supplied details about the device attempting to sign in'
            }, {
                'name': 'guard_data',
                'type': 'string',
                'required': 'true',
                'description': 'steam guard data for client login'
            }, {
                'name': 'language',
                'type': 'uint32',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'qos_level',
                'type': 'int32',
                'required': 'False',
                'description': '[ENetQOSLevel] client-specified priority for this auth attempt'
            }]
        }, {
            'name': 'UpdateAuthSessionWithSteamGuardCode',
            'version': '0001',
            'arguments': [{
                'name': 'client_id',
                'type': 'uint64',
                'required': 'true',
                'description': 'pending client ID, from initialized session'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'user who wants to login'
            }, {
                'name': 'code',
                'type': 'string',
                'required': 'true',
                'description': 'confirmation code'
            }, {'name': 'code_type', 'type': '{enum}', 'required': 'true', 'description': 'type of confirmation code'}]
        }, {
            'name': 'BeginAuthSessionViaQR',
            'version': '0001',
            'arguments': [{
                'name': 'device_friendly_name',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'platform_type',
                'type': '{enum}',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'device_details',
                'type': '{message}',
                'required': 'true',
                'description': 'User-supplied details about the device attempting to sign in'
            }, {
                'name': 'website_id',
                'type': 'string',
                'required': 'False',
                'description': '(EMachineAuthWebDomain) identifier of client requesting auth'
            }]
        }, {
            'name': 'UpdateAuthSessionWithMobileConfirmation',
            'version': '0001',
            'arguments': [{
                'name': 'version',
                'type': 'int32',
                'required': 'true',
                'description': 'version field'
            }, {
                'name': 'client_id',
                'type': 'uint64',
                'required': 'true',
                'description': 'pending client ID, from scanned QR Code'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'user who wants to login'
            }, {
                'name': 'signature',
                'type': 'string',
                'required': 'true',
                'description': "HMAC digest over {version,client_id,steamid} via user's private key"
            }, {
                'name': 'confirm',
                'type': 'bool',
                'required': 'False',
                'description': 'Whether to confirm the login (true) or deny the login (false)'
            }, {
                'name': 'persistence',
                'type': '{enum}',
                'required': 'False',
                'description': 'whether we are requesting a persistent or an ephemeral session'
            }]
        }]
    }, {
        'name': 'IBroadcastService',
        'methods': [{
            'name': 'PostGameDataFrameRTMP',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'AppID of the game being broadcasted'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'Broadcasters SteamID'
            }, {
                'name': 'rtmp_token',
                'type': 'string',
                'required': 'true',
                'description': 'Valid RTMP token for the Broadcaster'
            }, {
                'name': 'frame_data',
                'type': 'string',
                'required': 'true',
                'description': 'game data frame expressing current state of game (string, zipped, whatever)'
            }]
        }]
    }, {
        'name': 'IContentServerConfigService',
        'methods': [{
            'name': 'SetSteamCacheClientFilters',
            'version': '0001',
            'arguments': [{
                'name': 'cache_id',
                'type': 'uint32',
                'required': 'true',
                'description': 'Unique ID number'
            }, {
                'name': 'cache_key',
                'type': 'string',
                'required': 'true',
                'description': 'Valid current cache API key'
            }, {
                'name': 'change_notes',
                'type': 'string',
                'required': 'true',
                'description': 'Notes'
            }, {
                'name': 'allowed_ip_blocks',
                'type': 'string',
                'required': 'true',
                'description': 'comma-separated list of allowed IP address blocks in CIDR format - blank to clear unfilter'
            }]
        }, {
            'name': 'GetSteamCacheNodeParams',
            'version': '0001',
            'arguments': [{
                'name': 'cache_id',
                'type': 'uint32',
                'required': 'true',
                'description': 'Unique ID number'
            }, {
                'name': 'cache_key',
                'type': 'string',
                'required': 'true',
                'description': 'Valid current cache API key'
            }]
        }, {
            'name': 'SetSteamCachePerformanceStats',
            'version': '0001',
            'arguments': [{
                'name': 'cache_id',
                'type': 'uint32',
                'required': 'true',
                'description': 'Unique ID number'
            }, {
                'name': 'cache_key',
                'type': 'string',
                'required': 'true',
                'description': 'Valid current cache API key'
            }, {
                'name': 'mbps_sent',
                'type': 'uint32',
                'required': 'true',
                'description': 'Outgoing network traffic in Mbps'
            }, {
                'name': 'mbps_recv',
                'type': 'uint32',
                'required': 'true',
                'description': 'Incoming network traffic in Mbps'
            }, {
                'name': 'cpu_percent',
                'type': 'uint32',
                'required': 'true',
                'description': 'Percent CPU load'
            }, {
                'name': 'cache_hit_percent',
                'type': 'uint32',
                'required': 'true',
                'description': 'Percent cache hits'
            }, {
                'name': 'num_connected_ips',
                'type': 'uint32',
                'required': 'true',
                'description': 'Number of unique connected IP addresses'
            }, {
                'name': 'upstream_egress_utilization',
                'type': 'uint32',
                'required': 'true',
                'description': 'What is the percent utilization of the busiest datacenter egress link?'
            }]
        }]
    }, {
        'name': 'IContentServerDirectoryService',
        'methods': [{
            'name': 'GetServersForSteamPipe',
            'version': '0001',
            'arguments': [{
                'name': 'cell_id',
                'type': 'uint32',
                'required': 'true',
                'description': 'client Cell ID'
            }, {
                'name': 'max_servers',
                'type': 'uint32',
                'required': 'False',
                'description': 'max servers in response list'
            }, {
                'name': 'ip_override',
                'type': 'string',
                'required': 'False',
                'description': 'client IP address'
            }, {
                'name': 'launcher_type',
                'type': 'int32',
                'required': 'False',
                'description': 'launcher type'
            }, {
                'name': 'ipv6_public',
                'type': 'string',
                'required': 'False',
                'description': 'client public ipv6 address if it knows it'
            }]
        }, {
            'name': 'GetClientUpdateHosts',
            'version': '0001',
            'arguments': [{
                'name': 'cached_signature',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'GetDepotPatchInfo',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'depotid',
                'type': 'uint32',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'source_manifestid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'target_manifestid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }]
    }, {
        'name': 'IPublishedFileService',
        'methods': [{
            'name': 'GetUserVoteSummary',
            'version': '0001',
            'arguments': [{
                'name': 'publishedfileids',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'QueryFiles',
            'version': '0001',
            'arguments': [{
                'name': 'query_type',
                'type': 'uint32',
                'required': 'true',
                'description': 'enumeration EPublishedFileQueryType in clientenums.h'
            }, {'name': 'page', 'type': 'uint32', 'required': 'true', 'description': 'Current page'}, {
                'name': 'cursor',
                'type': 'string',
                'required': 'true',
                'description': "Cursor to paginate through the results (set to '*' for the first request).Prefer this over using the page parameter, as it will allow you to do deep pagination.When used, the page parameter will be ignored."
            }, {
                'name': 'numperpage',
                'type': 'uint32',
                'required': 'False',
                'description': '(Optional) The number of results, per page to return.'
            }, {
                'name': 'creator_appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'App that created the files'
            }, {
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'App that consumes the files'
            }, {
                'name': 'requiredtags',
                'type': 'string',
                'required': 'true',
                'description': 'Tags to match on. See match_all_tags parameter below'
            }, {
                'name': 'excludedtags',
                'type': 'string',
                'required': 'true',
                'description': '(Optional) Tags that must NOT be present on a published file to satisfy the query.'
            }, {
                'name': 'match_all_tags',
                'type': 'bool',
                'required': 'False',
                'description': 'If true, then items must have all the tags specified, otherwise they must have at least one of the tags.'
            }, {
                'name': 'required_flags',
                'type': 'string',
                'required': 'true',
                'description': 'Required flags that must be set on any returned items'
            }, {
                'name': 'omitted_flags',
                'type': 'string',
                'required': 'true',
                'description': 'Flags that must not be set on any returned items'
            }, {
                'name': 'search_text',
                'type': 'string',
                'required': 'true',
                'description': "Text to match in the item's title or description"
            }, {
                'name': 'filetype',
                'type': 'uint32',
                'required': 'true',
                'description': 'EPublishedFileInfoMatchingFileType'
            }, {
                'name': 'child_publishedfileid',
                'type': 'uint64',
                'required': 'true',
                'description': 'Find all items that reference the given item.'
            }, {
                'name': 'days',
                'type': 'uint32',
                'required': 'true',
                'description': 'If query_type is k_PublishedFileQueryType_RankedByTrend, then this is the number of days to get votes for [1,7].'
            }, {
                'name': 'include_recent_votes_only',
                'type': 'bool',
                'required': 'true',
                'description': 'If query_type is k_PublishedFileQueryType_RankedByTrend, then limit result set just to items that have votes within the day range given'
            }, {
                'name': 'cache_max_age_seconds',
                'type': 'uint32',
                'required': 'False',
                'description': 'Allow stale data to be returned for the specified number of seconds.'
            }, {
                'name': 'language',
                'type': 'int32',
                'required': 'False',
                'description': 'Language to search in and also what gets returned. Defaults to English.'
            }, {
                'name': 'required_kv_tags',
                'type': '{message}',
                'required': 'true',
                'description': 'Required key-value tags to match on.'
            }, {
                'name': 'taggroups',
                'type': '{message}',
                'required': 'true',
                'description': '(Optional) At least one of the tags must be present on a published file to satisfy the query.'
            }, {
                'name': 'date_range_created',
                'type': '{message}',
                'required': 'true',
                'description': '(Optional) Filter to items created within this range.'
            }, {
                'name': 'date_range_updated',
                'type': '{message}',
                'required': 'true',
                'description': '(Optional) Filter to items updated within this range.'
            }, {
                'name': 'excluded_content_descriptors',
                'type': '{enum}',
                'required': 'true',
                'description': '(Optional) Filter out items that have these content descriptors.'
            }, {
                'name': 'totalonly',
                'type': 'bool',
                'required': 'true',
                'description': '(Optional) If true, only return the total number of files that satisfy this query.'
            }, {
                'name': 'ids_only',
                'type': 'bool',
                'required': 'true',
                'description': '(Optional) If true, only return the published file ids of files that satisfy this query.'
            }, {
                'name': 'return_vote_data',
                'type': 'bool',
                'required': 'true',
                'description': 'Return vote data'
            }, {
                'name': 'return_tags',
                'type': 'bool',
                'required': 'true',
                'description': 'Return tags in the file details'
            }, {
                'name': 'return_kv_tags',
                'type': 'bool',
                'required': 'true',
                'description': 'Return key-value tags in the file details'
            }, {
                'name': 'return_previews',
                'type': 'bool',
                'required': 'true',
                'description': 'Return preview image and video details in the file details'
            }, {
                'name': 'return_children',
                'type': 'bool',
                'required': 'true',
                'description': 'Return child item ids in the file details'
            }, {
                'name': 'return_short_description',
                'type': 'bool',
                'required': 'true',
                'description': 'Populate the short_description field instead of file_description'
            }, {
                'name': 'return_for_sale_data',
                'type': 'bool',
                'required': 'true',
                'description': 'Return pricing information, if applicable'
            }, {
                'name': 'return_metadata',
                'type': 'bool',
                'required': 'False',
                'description': 'Populate the metadata'
            }, {
                'name': 'return_playtime_stats',
                'type': 'uint32',
                'required': 'true',
                'description': 'Return playtime stats for the specified number of days before today.'
            }, {
                'name': 'return_details',
                'type': 'bool',
                'required': 'true',
                'description': "By default, if none of the other 'return_*' fields are set, only some voting details are returned. Set this to true to return the default set of details."
            }, {
                'name': 'strip_description_bbcode',
                'type': 'bool',
                'required': 'true',
                'description': 'Strips BBCode from descriptions.'
            }, {
                'name': 'desired_revision',
                'type': '{enum}',
                'required': 'False',
                'description': 'Return the data for the specified revision.'
            }, {
                'name': 'return_reactions',
                'type': 'bool',
                'required': 'False',
                'description': 'If true, then reactions to items will be returned.'
            }]
        }, {
            'name': 'GetSubSectionData',
            'version': '0001',
            'arguments': [{
                'name': 'publishedfileid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'for_table_of_contents',
                'type': 'bool',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'specific_sectionid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'desired_revision',
                'type': '{enum}',
                'required': 'False',
                'description': 'Return the data for the specified revision.'
            }]
        }, {
            'name': 'GetDetails',
            'version': '0001',
            'arguments': [{
                'name': 'publishedfileids',
                'type': 'uint64',
                'required': 'true',
                'description': 'Set of published file Ids to retrieve details for.'
            }, {
                'name': 'includetags',
                'type': 'bool',
                'required': 'true',
                'description': 'If true, return tag information in the returned details.'
            }, {
                'name': 'includeadditionalpreviews',
                'type': 'bool',
                'required': 'true',
                'description': 'If true, return preview information in the returned details.'
            }, {
                'name': 'includechildren',
                'type': 'bool',
                'required': 'true',
                'description': 'If true, return children in the returned details.'
            }, {
                'name': 'includekvtags',
                'type': 'bool',
                'required': 'true',
                'description': 'If true, return key value tags in the returned details.'
            }, {
                'name': 'includevotes',
                'type': 'bool',
                'required': 'true',
                'description': 'If true, return vote data in the returned details.'
            }, {
                'name': 'short_description',
                'type': 'bool',
                'required': 'true',
                'description': 'If true, return a short description instead of the full description.'
            }, {
                'name': 'includeforsaledata',
                'type': 'bool',
                'required': 'true',
                'description': 'If true, return pricing data, if applicable.'
            }, {
                'name': 'includemetadata',
                'type': 'bool',
                'required': 'true',
                'description': 'If true, populate the metadata field.'
            }, {
                'name': 'language',
                'type': 'int32',
                'required': 'False',
                'description': 'Specifies the localized text to return. Defaults to English.'
            }, {
                'name': 'return_playtime_stats',
                'type': 'uint32',
                'required': 'true',
                'description': 'Return playtime stats for the specified number of days before today.'
            }, {
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'strip_description_bbcode',
                'type': 'bool',
                'required': 'true',
                'description': 'Strips BBCode from descriptions.'
            }, {
                'name': 'desired_revision',
                'type': '{enum}',
                'required': 'False',
                'description': 'Return the data for the specified revision.'
            }, {
                'name': 'includereactions',
                'type': 'bool',
                'required': 'False',
                'description': 'If true, then reactions to items will be returned.'
            }]
        }, {
            'name': 'GetUserFiles',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'Steam ID of the user whose files are being requested.'
            }, {
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'App Id of the app that the files were published to.'
            }, {
                'name': 'page',
                'type': 'uint32',
                'required': 'False',
                'description': '(Optional) Starting page for results.'
            }, {
                'name': 'numperpage',
                'type': 'uint32',
                'required': 'False',
                'description': '(Optional) The number of results, per page to return.'
            }, {
                'name': 'type',
                'type': 'string',
                'required': 'False',
                'description': '(Optional) Type of files to be returned.'
            }, {
                'name': 'sortmethod',
                'type': 'string',
                'required': 'False',
                'description': '(Optional) Sorting method to use on returned values.'
            }, {
                'name': 'privacy',
                'type': 'uint32',
                'required': 'true',
                'description': '(optional) Filter by privacy settings.'
            }, {
                'name': 'requiredtags',
                'type': 'string',
                'required': 'true',
                'description': '(Optional) Tags that must be present on a published file to satisfy the query.'
            }, {
                'name': 'excludedtags',
                'type': 'string',
                'required': 'true',
                'description': '(Optional) Tags that must NOT be present on a published file to satisfy the query.'
            }, {
                'name': 'required_kv_tags',
                'type': '{message}',
                'required': 'true',
                'description': 'Required key-value tags to match on.'
            }, {
                'name': 'filetype',
                'type': 'uint32',
                'required': 'true',
                'description': '(Optional) File type to match files to.'
            }, {
                'name': 'creator_appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'App Id of the app that published the files, only matched if specified.'
            }, {
                'name': 'match_cloud_filename',
                'type': 'string',
                'required': 'true',
                'description': 'Match this cloud filename if specified.'
            }, {
                'name': 'cache_max_age_seconds',
                'type': 'uint32',
                'required': 'False',
                'description': 'Allow stale data to be returned for the specified number of seconds.'
            }, {
                'name': 'language',
                'type': 'int32',
                'required': 'False',
                'description': 'Specifies the localized text to return. Defaults to English.'
            }, {
                'name': 'taggroups',
                'type': '{message}',
                'required': 'true',
                'description': '(Optional) At least one of the tags must be present on a published file to satisfy the query.'
            }, {
                'name': 'excluded_content_descriptors',
                'type': '{enum}',
                'required': 'true',
                'description': '(Optional) Filter out items that have these content descriptors.'
            }, {
                'name': 'totalonly',
                'type': 'bool',
                'required': 'true',
                'description': '(Optional) If true, only return the total number of files that satisfy this query.'
            }, {
                'name': 'ids_only',
                'type': 'bool',
                'required': 'true',
                'description': '(Optional) If true, only return the published file ids of files that satisfy this query.'
            }, {
                'name': 'return_vote_data',
                'type': 'bool',
                'required': 'False',
                'description': 'Return vote data'
            }, {
                'name': 'return_tags',
                'type': 'bool',
                'required': 'true',
                'description': 'Return tags in the file details'
            }, {
                'name': 'return_kv_tags',
                'type': 'bool',
                'required': 'False',
                'description': 'Return key-value tags in the file details'
            }, {
                'name': 'return_previews',
                'type': 'bool',
                'required': 'true',
                'description': 'Return preview image and video details in the file details'
            }, {
                'name': 'return_children',
                'type': 'bool',
                'required': 'true',
                'description': 'Return child item ids in the file details'
            }, {
                'name': 'return_short_description',
                'type': 'bool',
                'required': 'False',
                'description': 'Populate the short_description field instead of file_description'
            }, {
                'name': 'return_for_sale_data',
                'type': 'bool',
                'required': 'true',
                'description': 'Return pricing information, if applicable'
            }, {
                'name': 'return_metadata',
                'type': 'bool',
                'required': 'False',
                'description': 'Populate the metadata field'
            }, {
                'name': 'return_playtime_stats',
                'type': 'uint32',
                'required': 'true',
                'description': 'Return playtime stats for the specified number of days before today.'
            }, {
                'name': 'strip_description_bbcode',
                'type': 'bool',
                'required': 'true',
                'description': 'Strips BBCode from descriptions.'
            }, {
                'name': 'return_reactions',
                'type': 'bool',
                'required': 'False',
                'description': 'If true, then reactions to items will be returned.'
            }, {
                'name': 'startindex_override',
                'type': 'uint32',
                'required': 'true',
                'description': 'Backwards compatible for the client.'
            }, {
                'name': 'desired_revision',
                'type': '{enum}',
                'required': 'False',
                'description': 'Return the data for the specified revision.'
            }, {
                'name': 'return_apps',
                'type': 'bool',
                'required': 'true',
                'description': 'Return list of apps the items belong to'
            }]
        }, {
            'name': 'GetUserFileCount',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'Steam ID of the user whose files are being requested.'
            }, {
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'App Id of the app that the files were published to.'
            }, {
                'name': 'page',
                'type': 'uint32',
                'required': 'False',
                'description': '(Optional) Starting page for results.'
            }, {
                'name': 'numperpage',
                'type': 'uint32',
                'required': 'False',
                'description': '(Optional) The number of results, per page to return.'
            }, {
                'name': 'type',
                'type': 'string',
                'required': 'False',
                'description': '(Optional) Type of files to be returned.'
            }, {
                'name': 'sortmethod',
                'type': 'string',
                'required': 'False',
                'description': '(Optional) Sorting method to use on returned values.'
            }, {
                'name': 'privacy',
                'type': 'uint32',
                'required': 'true',
                'description': '(optional) Filter by privacy settings.'
            }, {
                'name': 'requiredtags',
                'type': 'string',
                'required': 'true',
                'description': '(Optional) Tags that must be present on a published file to satisfy the query.'
            }, {
                'name': 'excludedtags',
                'type': 'string',
                'required': 'true',
                'description': '(Optional) Tags that must NOT be present on a published file to satisfy the query.'
            }, {
                'name': 'required_kv_tags',
                'type': '{message}',
                'required': 'true',
                'description': 'Required key-value tags to match on.'
            }, {
                'name': 'filetype',
                'type': 'uint32',
                'required': 'true',
                'description': '(Optional) File type to match files to.'
            }, {
                'name': 'creator_appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'App Id of the app that published the files, only matched if specified.'
            }, {
                'name': 'match_cloud_filename',
                'type': 'string',
                'required': 'true',
                'description': 'Match this cloud filename if specified.'
            }, {
                'name': 'cache_max_age_seconds',
                'type': 'uint32',
                'required': 'False',
                'description': 'Allow stale data to be returned for the specified number of seconds.'
            }, {
                'name': 'language',
                'type': 'int32',
                'required': 'False',
                'description': 'Specifies the localized text to return. Defaults to English.'
            }, {
                'name': 'taggroups',
                'type': '{message}',
                'required': 'true',
                'description': '(Optional) At least one of the tags must be present on a published file to satisfy the query.'
            }, {
                'name': 'excluded_content_descriptors',
                'type': '{enum}',
                'required': 'true',
                'description': '(Optional) Filter out items that have these content descriptors.'
            }, {
                'name': 'totalonly',
                'type': 'bool',
                'required': 'true',
                'description': '(Optional) If true, only return the total number of files that satisfy this query.'
            }, {
                'name': 'ids_only',
                'type': 'bool',
                'required': 'true',
                'description': '(Optional) If true, only return the published file ids of files that satisfy this query.'
            }, {
                'name': 'return_vote_data',
                'type': 'bool',
                'required': 'False',
                'description': 'Return vote data'
            }, {
                'name': 'return_tags',
                'type': 'bool',
                'required': 'true',
                'description': 'Return tags in the file details'
            }, {
                'name': 'return_kv_tags',
                'type': 'bool',
                'required': 'False',
                'description': 'Return key-value tags in the file details'
            }, {
                'name': 'return_previews',
                'type': 'bool',
                'required': 'true',
                'description': 'Return preview image and video details in the file details'
            }, {
                'name': 'return_children',
                'type': 'bool',
                'required': 'true',
                'description': 'Return child item ids in the file details'
            }, {
                'name': 'return_short_description',
                'type': 'bool',
                'required': 'False',
                'description': 'Populate the short_description field instead of file_description'
            }, {
                'name': 'return_for_sale_data',
                'type': 'bool',
                'required': 'true',
                'description': 'Return pricing information, if applicable'
            }, {
                'name': 'return_metadata',
                'type': 'bool',
                'required': 'False',
                'description': 'Populate the metadata field'
            }, {
                'name': 'return_playtime_stats',
                'type': 'uint32',
                'required': 'true',
                'description': 'Return playtime stats for the specified number of days before today.'
            }, {
                'name': 'strip_description_bbcode',
                'type': 'bool',
                'required': 'true',
                'description': 'Strips BBCode from descriptions.'
            }, {
                'name': 'return_reactions',
                'type': 'bool',
                'required': 'False',
                'description': 'If true, then reactions to items will be returned.'
            }, {
                'name': 'startindex_override',
                'type': 'uint32',
                'required': 'true',
                'description': 'Backwards compatible for the client.'
            }, {
                'name': 'desired_revision',
                'type': '{enum}',
                'required': 'False',
                'description': 'Return the data for the specified revision.'
            }, {
                'name': 'return_apps',
                'type': 'bool',
                'required': 'true',
                'description': 'Return list of apps the items belong to'
            }]
        }]
    }, {
        'name': 'IEconService', 'methods': [{
            'name': 'GetTradeHistory',
            'version': '0001',
            'arguments': [{
                'name': 'max_trades',
                'type': 'uint32',
                'required': 'true',
                'description': 'The number of trades to return information for'
            }, {
                'name': 'start_after_time',
                'type': 'uint32',
                'required': 'true',
                'description': 'The time of the last trade shown on the previous page of results, or the time of the first trade if navigating back'
            }, {
                'name': 'start_after_tradeid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The tradeid shown on the previous page of results, or the ID of the first trade if navigating back'
            }, {
                'name': 'navigating_back',
                'type': 'bool',
                'required': 'true',
                'description': 'The user wants the previous page of results, so return the previous max_trades trades before the start time and ID'
            }, {
                'name': 'get_descriptions',
                'type': 'bool',
                'required': 'true',
                'description': 'If set, the item display data for the items included in the returned trades will also be returned'
            }, {
                'name': 'language',
                'type': 'string',
                'required': 'true',
                'description': 'The language to use when loading item display data'
            }, {
                'name': 'include_failed',
                'type': 'bool',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'include_total',
                'type': 'bool',
                'required': 'true',
                'description': 'If set, the total number of trades the account has participated in will be included in the response'
            }]
        }, {
            'name': 'GetTradeStatus',
            'version': '0001',
            'arguments': [{
                'name': 'tradeid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'get_descriptions',
                'type': 'bool',
                'required': 'true',
                'description': 'If set, the item display data for the items included in the returned trades will also be returned'
            }, {
                'name': 'language',
                'type': 'string',
                'required': 'true',
                'description': 'The language to use when loading item display data'
            }]
        }, {
            'name': 'GetTradeOffers',
            'version': '0001',
            'arguments': [{
                'name': 'get_sent_offers',
                'type': 'bool',
                'required': 'true',
                'description': 'Request the list of sent offers.'
            }, {
                'name': 'get_received_offers',
                'type': 'bool',
                'required': 'true',
                'description': 'Request the list of received offers.'
            }, {
                'name': 'get_descriptions',
                'type': 'bool',
                'required': 'true',
                'description': "If set, the item display data for the items included in the returned trade offers will also be returned. If one or more descriptions can't be retrieved, then your request will fail."
            }, {
                'name': 'language',
                'type': 'string',
                'required': 'true',
                'description': 'The language to use when loading item display data.'
            }, {
                'name': 'active_only',
                'type': 'bool',
                'required': 'true',
                'description': 'Indicates we should only return offers which are still active, or offers that have changed in state since the time_historical_cutoff'
            }, {
                'name': 'historical_only',
                'type': 'bool',
                'required': 'true',
                'description': 'Indicates we should only return offers which are not active.'
            }, {
                'name': 'time_historical_cutoff',
                'type': 'uint32',
                'required': 'true',
                'description': 'When active_only is set, offers updated since this time will also be returned'
            }, {'name': 'cursor', 'type': 'uint32', 'required': 'False', 'description': 'Cursor aka start index'}]
        }, {
            'name': 'GetTradeOffer',
            'version': '0001',
            'arguments': [{
                'name': 'tradeofferid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'language',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'get_descriptions',
                'type': 'bool',
                'required': 'true',
                'description': "If set, the item display data for the items included in the returned trade offers will also be returned. If one or more descriptions can't be retrieved, then your request will fail."
            }]
        }, {
            'name': 'GetTradeOffersSummary',
            'version': '0001',
            'arguments': [{
                'name': 'time_last_visit',
                'type': 'uint32',
                'required': 'true',
                'description': 'The time the user last visited.If not passed, will use the time the user last visited the trade offer page.'
            }]
        }, {
            'name': 'GetTradeHoldDurations',
            'version': '0001',
            'arguments': [{
                'name': 'steamid_target',
                'type': 'uint64',
                'required': 'true',
                'description': 'User you are trading with'
            }, {
                'name': 'trade_offer_access_token',
                'type': 'string',
                'required': 'true',
                'description': 'A special token that allows for trade offers from non-friends.'
            }]
        }]
    }, {
        'name': 'IGameNotificationsService',
        'methods': [{
            'name': 'UserCreateSession',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'The appid to create the session for.'
            }, {
                'name': 'context',
                'type': 'uint64',
                'required': 'true',
                'description': 'Game-specified context value the game can used to associate the session with some object on their backend.'
            }, {
                'name': 'title',
                'type': '{message}',
                'required': 'true',
                'description': "The title of the session to be displayed within each user's list of sessions."
            }, {
                'name': 'users',
                'type': '{message}',
                'required': 'true',
                'description': 'The initial state of all users in the session.'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': '(Optional) steamid to make the request on behalf of -- if specified, the user must be in the session and all users being added to the session must be friends with the user.'
            }]
        }, {
            'name': 'UserUpdateSession',
            'version': '0001',
            'arguments': [{
                'name': 'sessionid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The sessionid to update.'
            }, {
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'The appid of the session to update.'
            }, {
                'name': 'title',
                'type': '{message}',
                'required': 'true',
                'description': '(Optional) The new title of the session.If not specified, the title will not be changed.'
            }, {
                'name': 'users',
                'type': '{message}',
                'required': 'true',
                'description': '(Optional) A list of users whose state will be updated to reflect the given state. If the users are not already in the session, they will be added to it.'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': '(Optional) steamid to make the request on behalf of -- if specified, the user must be in the session and all users being added to the session must be friends with the user.'
            }]
        }, {
            'name': 'UserDeleteSession',
            'version': '0001',
            'arguments': [{
                'name': 'sessionid',
                'type': 'uint64',
                'required': 'true',
                'description': 'The sessionid to delete.'
            }, {
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'The appid of the session to delete.'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': '(Optional) steamid to make the request on behalf of -- if specified, the user must be in the session.'
            }]
        }]
    }, {
        'name': 'IInventoryService',
        'methods': [{
            'name': 'SplitItemStack',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'itemid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'quantity',
                'type': 'uint32',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'CombineItemStacks',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'fromitemid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'destitemid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'quantity',
                'type': 'uint32',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'GetPriceSheet',
            'version': '0001',
            'arguments': [{
                'name': 'ecurrency',
                'type': 'int32',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'currency_code',
                'type': 'string',
                'required': 'true',
                'description': 'Standard short code of the requested currency (preferred)'
            }]
        }]
    }, {
        'name': 'IStoreService', 'methods': [{
            'name': 'GetAppList',
            'version': '0001',
            'arguments': [{
                'name': 'if_modified_since',
                'type': 'uint32',
                'required': 'False',
                'description': 'Return only items that have been modified since this date.'
            }, {
                'name': 'have_description_language',
                'type': 'string',
                'required': 'False',
                'description': 'Return only items that have a description in this language.'
            }, {
                'name': 'include_games',
                'type': 'bool',
                'required': 'False',
                'description': 'Include games (defaults to enabled)'
            }, {
                'name': 'include_dlc',
                'type': 'bool',
                'required': 'False',
                'description': 'Include DLC'
            }, {
                'name': 'include_software',
                'type': 'bool',
                'required': 'False',
                'description': 'Include software items'
            }, {
                'name': 'include_videos',
                'type': 'bool',
                'required': 'False',
                'description': 'Include videos and series'
            }, {
                'name': 'include_hardware',
                'type': 'bool',
                'required': 'False',
                'description': 'Include hardware'
            }, {
                'name': 'last_appid',
                'type': 'uint32',
                'required': 'False',
                'description': 'For continuations, this is the last appid returned from the previous call.'
            }, {
                'name': 'max_results',
                'type': 'uint32',
                'required': 'False',
                'description': 'Number of results to return at a time.Default 10k, max 50k.'
            }]
        }]
    }, {
        'name': 'IHelpRequestLogsService',
        'methods': [{
            'name': 'UploadUserApplicationLog',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'log_type',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'version_string',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'log_contents',
                'type': 'string',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }, {
                'name': 'request_id',
                'type': 'uint64',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }, {
            'name': 'GetApplicationLogDemand',
            'version': '0001',
            'arguments': [{
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'This parameter has no listed description.'
            }]
        }]
    }, {
        'name': 'ICheatReportingService', 'methods': [{
            'name': 'ReportCheatData',
            'version': '0001',
            'arguments': [{
                'name': 'steamid',
                'type': 'uint64',
                'required': 'true',
                'description': 'steamid of the user running and reporting the cheat.'
            }, {
                'name': 'appid',
                'type': 'uint32',
                'required': 'true',
                'description': 'The appid.'
            }, {
                'name': 'pathandfilename',
                'type': 'string',
                'required': 'true',
                'description': 'path and file name of the cheat executable.'
            }, {
                'name': 'webcheaturl',
                'type': 'string',
                'required': 'true',
                'description': 'web url where the cheat was found and downloaded.'
            }, {
                'name': 'time_now',
                'type': 'uint64',
                'required': 'true',
                'description': 'local system time now.'
            }, {
                'name': 'time_started',
                'type': 'uint64',
                'required': 'true',
                'description': 'local system time when cheat process started. ( 0 if not yet run )'
            }, {
                'name': 'time_stopped',
                'type': 'uint64',
                'required': 'true',
                'description': 'local system time when cheat process stopped. ( 0 if still running )'
            }, {
                'name': 'cheatname',
                'type': 'string',
                'required': 'true',
                'description': 'descriptive name for the cheat.'
            }, {
                'name': 'game_process_id',
                'type': 'uint32',
                'required': 'true',
                'description': 'process ID of the running game.'
            }, {
                'name': 'cheat_process_id',
                'type': 'uint32',
                'required': 'true',
                'description': 'process ID of the cheat process that ran'
            }, {
                'name': 'cheat_param_1',
                'type': 'uint64',
                'required': 'true',
                'description': 'cheat param 1'
            }, {
                'name': 'cheat_param_2',
                'type': 'uint64',
                'required': 'true',
                'description': 'cheat param 2'
            }, {
                'name': 'cheat_data_dump',
                'type': 'string',
                'required': 'true',
                'description': 'data collection in json format'
            }]
        }]
    }]
}


