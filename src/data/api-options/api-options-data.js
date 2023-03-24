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


