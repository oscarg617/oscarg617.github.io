export const projects = [
    {
        "title": "DANS",
        "description": "A Python package for scraping data from basketball-reference.com and stats.nba.com to provide opponent-adjusted statistics.",
        "technologies": ["Python", "Pandas", "BeautifulSoup"],
        "image": require("../assets/dans.png"),
        "links": [
            {
                "link": "https://github.com/oscarg617/dans",
                "linkType": "Source Code"
            },
            {
                "link": "https://pypi.org/project/dans",
                "linkType": "PyPi Package"
            }
        ],
        "motives": [
            {
                "type": "paragraph",
                "content": "As a basketball fan, I always felt that basic box-score statistics often failed to capture a player's true performance. They lacked crucial context—particularly regarding the quality of opposition faced. Of course, most fans of the sport are able to mentally apply this context, but over time, this context is lost and only the numbers remain.",

            },
            {
                "type": "paragraph",
                "content": "The defensive strength of opponents is a very important element to consider when evaluating box-score stats. A 30-point game against the league's top defense carries different weight than the same performance against the worst defensive team, yet traditional stats treat them the same.",
            },
            {
                "type": "paragraph",
                "content": "I found a solution when watching a video on Thinking Basketball's YouTube channel, which provided an approach to accounting for opposing defensive strength by linearly scaling points-per-game by their opponents' defensive rating. However, there was no publicly accessible website or database where fans could view these adjusted statistics across players' careers. Attempting to calculate these metrics manually would likely be time-consuming and inconsistent.",
            },
            {
                "type": "paragraph",
                "content": "This gap between available data and meaningful analysis inspired me to create DANS (Defense Adjusted NBA Stats) - a Python package that adjusts player statistics based on the defensive strength of their opponents."
            }
        ],
        "howTos": [
            {
                "type": "paragraph",
                "content": "The DANS package offers three main endpoints to access and analyze NBA statistics with defensive adjustments. This guide shows you how to implement each one in a Python projects."
            },
            {
                "type": "subheading",
                "content": "Player Stats"
            },
            {
                "type": "paragraph",
                "content": "Get a player's basic statistical averages with defensive rating filters and different formatting options."
            },
            {
                "type": "code",
                "content": `
from dans.endpoints.playerstats import PlayerStats
from dans.utils.constants import DataFormat, SeasonType

# Example: Get Giannis's stats from 2019-2021 against teams with defensive ratings
# between 107.5-110
stats = PlayerStats(
    name='Giannis Antetokounmpo',
    year_range=[2019, 2021],
    drtg_range=[107.5, 110],
    data_format=DataFormat.opp_adj,  # Opponent-adjusted stats
    season_type=SeasonType.regular_season
)

print(stats.bball_ref())  # Access stats from Basketball Reference
                `
            },
            {
                "type": "paragraph",
                "content": "Returns: A DataFrame with [points, rebounds, assists, true shooting %, relative true shooting %, opponent defensive rating]"
            },
            {
                "type": "subheading",
                "content": "Player Logs"
            },
            {
                "type": "paragraph",
                "content": "Retrieve detailed game logs for a player across specified seasons."
            },
            {
                "type": "code",
                "content": `
from dans.endpoints.playerlogs import PlayerLogs
from dans.utils.constants import SeasonType

# Example: Get Anthony Edwards's game logs from 2020-2024
logs = PlayerLogs(
    name='Anthony Edwards',
    year_range=[2020, 2024],
    season_type=SeasonType.regular_season
)

print(logs.bball_ref())  # Access stats from Basketball Reference
                `
            },
            {
                "type": "paragraph",
                "content": "Returns: A comprehensive DataFrame with game-by-game statistics including points, rebounds, assists, and shooting percentages."
            },
            {
                "type": "subheading",
                "content": "Teams"
            },
            {
                "type": "paragraph",
                "content": "Find teams that match specific defensive rating criteria across seasons."
            },
            {
                "type": "code",
                "content": `
from dans.endpoints.teams import Teams

# Example: Get teams from 1995-2007 with defensive ratings between 105-110
teams = Teams(
    year_range=[1995, 2007],
    drtg_range=[105, 110]
)

print(teams.nba_stats())  # Access stats from NBA Stats
                `
            },
            {
                "type": "paragraph",
                "content": "Returns: A DataFrame listing teams with their season, team name, defensive rating (DRTG), and opponent true shooting percentage (OPP_TS)."
            }
        ],
        "designChoices": ["Easy local access to games while on computer."],
        "challenges": ["Web scraping"],
        "keyLearnings": ["How to properly document and create easy to use endpoints. Thinking from the user's perspective"],
        "futureImprovements": ["play-by-play data"],
        "updates": []
    },
    {
        "title": "NBA-Scoreboard",
        "description": "A dockerized full-stack web server for live NBA scoreboard updates.",
        "technologies": ["JavaScript", "Python", "Flask", "Docker"],
        "image": require("../assets/nba-scoreboard.png"),
        "links": [
            {
                "link": "https://github.com/oscarg617/nba-scoreboard",
                "linkType": "Source Code"
            }
        ],
        "motives": [
            {
                "type": "paragraph",
                "content": "This project was my final project for a small full-stack development course, where the only requirement was that we had to have a front-end that retrieves data from a back-end. Since it was April, the NBA playoffs had started right when I needed to begin preparing for final exams, creating a perfect opportunity to solve a real problem I was facing.",
            },
            {
                "type": "paragraph",
                "content": "I didn't want to be distracted by the games all day, so I figured I would use this project to build a live NBA scoreboard that would allow me to keep up with the games with just a click of my mouse and only provide me the information I wanted to see. If a game was close, then I could decide if I wanted to watch. This ended up giving me ample time to study for finals, while also being able to keep up with the playoffs' closest games."
            }
        ],
        "howTos": [
            {
                "type": "paragraph",
                "content": "Running the scoreboard requires Docker. The application is managed through Docker Compose for easy setup and teardown."
            },
            {
                "type": "paragraph",
                "content": "To launch and stop the NBA Scoreboard server:"
            },
            {
                "type": "code",
                "content": `
docker-compose up -d   # launch the server
docker-compose down    # stop the server

`
            },
            {
                "type": "paragraph",
                "content": "Once running, access the scoreboard through your web browser at localhost:8080 and enjoy real-time updates for NBA game scores."
            }
        ],
        "designChoices": ["Dockerizing frontend and backend seperately"],
        "challenges": ["automation for web scraping"],
        "keyLearnings": ["Learn how frontend works with backend."],
        "futureImprovements": ["Show player stats for each game"],
        "updates": []
    },
    {
        "title": "Get-BBall-Stats",
        "description": "A Python package for scraping data from basketball-reference.com and stats.nba.com to provide opponent-adjusted statistics.",
        "technologies": ["Python", "Pandas", "AWS", "PostgreSQL"],
        "image": require("../assets/get-bball-stats.png"),
        "links": [
            {
                "link": "https://github.com/oscarg617/website-lambda",
                "linkType": "Source Code"
            },
            {
                "link": "https://www.getbballstats.com/",
                "linkType": "Website"
            }
        ],
        "motives": [
            "After creating the DANS Python package to adjust NBA player statistics based on the defensive strength of their opponents, I realized that the stats were not easily accessible to non-programming fans of the NBA. So, I decided to build this user-friendly website where any NBA enthusiast can quickly look up defensive-adjusted player stats.",
        ],
        "howTos": [
            {
                "type": "paragraph",
                "content": "The DANS package offers three main endpoints to access and analyze NBA statistics with defensive adjustments. This guide shows you how to implement each one in a Python projects."
            },
            {
                "type": "subheading",
                "content": "Player Stats"
            },
            {
                "type": "paragraph",
                "content": "Get a player's basic statistical averages with defensive rating filters and different formatting options."
            },
            {
                "type": "code",
                "content": `
from dans.endpoints.playerstats import PlayerStats
from dans.utils.constants import DataFormat, SeasonType

# Example: Get Giannis's stats from 2019-2021 against teams with defensive ratings 
# between 107.5-110
stats = PlayerStats(
    name='Giannis Antetokounmpo',
    year_range=[2019, 2021],
    drtg_range=[107.5, 110],
    data_format=DataFormat.opp_adj,  # Opponent-adjusted stats
    season_type=SeasonType.regular_season
)

print(stats.data)  # Access the resulting DataFrame
                `
            }
        ],
        "designChoices": ["Easy local access to games while on computer."],
        "challenges": ["automation for web scraping"],
        "keyLearnings": ["multithreading, relational databases"],
        "futureImprovements": ["searching names for players"],
        "updates": []
    }
]