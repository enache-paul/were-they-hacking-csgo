const apiOptionsData =
    {
        apiInterface : [
            {
                name : "ISteamNews"
            },
            {
                name : "ISteamUserStats",
                methods : [
                    {
                        name : "Goofy",
                        version : "0003",
                        arguments : [
                            {
                                name : "gameid",
                                description : "AppID of the game you want the news of."
                            },
                            {
                                name : "format",
                                description: "Output format. json (default), xml or vdf."
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
                                description : "AppID of the game you want the news of."
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
                                description : "Comma-delimited list of 64 bit Steam IDs to return profile information for. Up to 100 Steam IDs can be requested."
                            },
                            {
                                name : "format",
                                description: "Output format. json (default), xml or vdf."
                            }
                        ]
                    }
                ]
            }
        ]
    };


