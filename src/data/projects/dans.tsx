export const dans =     {
    "title": "DANS",
    "description": "A Python package for scraping data from basketball-reference.com and stats.nba.com to provide opponent-adjusted statistics.",
    "technologies": ["Python", "Pandas", "BeautifulSoup"],
    "image": require("../../assets/dans.png"),
    "links": [
        {
            "link": "https://pypi.org/project/dans",
            "linkType": "PyPi Package"
        },
    ],
    "note": "",
    "motives": [
        {
            "type": "paragraph",
            "content": "As a basketball fan, I always felt that basic box-score stats often failed to tell the whole story on a player’s performance. One of the most important pieces of context that is missing is the quality of the opposing team, particularly their defense. Of course, most fans of the sport are able to mentally apply this context, but over time, this context is lost, and only the numbers remain.",

        },
        {
            "type": "paragraph",
            "content": "The defensive strength of opponents is a very important element to consider when evaluating box-score stats. A 30-point game against the league's top defense carries different weight than the same performance against the worst defensive team, yet traditional stats treat them the same.",
        },
        {
            "type": "paragraph",
            "content": "I found a solution when watching a video on Thinking Basketball's YouTube channel, which provided an approach to accounting for opposing defensive strength by linearly scaling points-per-game by their opponents' defensive rating. However, there was no source where fans could view these adjusted stats across players' careers, and attempting to calculate these stats manually would be time-consuming.",
        },
        {
            "type": "paragraph",
            "content": "This gap between available data and meaningful analysis inspired me to create DANS (Defense Adjusted NBA Stats): a Python package that adjusts player statistics based on the defensive strength of their opponents."
        }
    ],
    "howTos": [
        {
            "type": "paragraph",
            "content": "The DANS package includes the following three endpoints:"
        },
        {
            "type": "subheading",
            "content": "Player Stats"
        },
        {
            "type": "paragraph",
            "content": "Get a player's statistical averages against teams within a range defensive ratings."
        },
        {
            "type": "code",
            "content": `
from dans.endpoints.playerstats import PlayerStats
from dans.library.parameters import DataFormat, SeasonType

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
            "content": "This endpoint returns dataframe with the following columns: points, rebounds, assists, true shooting percentage, relative true shooting percentage, and opponent defensive rating."
        },
        {
            "type": "subheading",
            "content": "Player Logs"
        },
        {
            "type": "paragraph",
            "content": "Get game logs for a player within a range of seasons."
        },
        {
            "type": "code",
            "content": `
from dans.endpoints.playerlogs import PlayerLogs
from dans.library.parameters import SeasonType

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
            "content": "This endpoint returns a dataframe including points, rebounds, assists, and shooting percentages, and other basic stats."
        },
        {
            "type": "subheading",
            "content": "Teams"
        },
        {
            "type": "paragraph",
            "content": "Find teams that fall within a range of defensive ratings."
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
            "content": "This endpoint returns a dataframe listing teams with their season, team name, defensive rating, and opponent true shooting percentage."
        }
    ],
    "designChoices": [
        {
            "type": "paragraph",
            "content": "I chose to use both Basketball-Reference and NBA-Stats as my data sources, as they are the two most used sources for NBA stats. The main difference between them is their defensive rating formula, which is particularly important since defensive rating is an input to my endpoints. Since neither source has definitive authority over the other, I decided to include both and allow users to choose which site's implementation of the stat they prefer."
        },
        {
            "type": "paragraph",
            "content": "For web scraping, the two libraries I considered using were BeautifulSoup and Selenium. BeautifulSoup is faster than Selenium for scraping data from static web pages, whereas Selenium has the ability to fetch dynamically-rendered resources. Since neither of the websites render data dynamically, it would have been unnecessarily resource intensive to use Selenium, so I chose BeautifulSoup."
        },
        {
            "type": "paragraph",
            "content": "I chose Pandas to handle the data because it fits with the format of the data provided by Basketball-Reference and NBA-Stats. While NumPy could have performed similar vector operations, Pandas makes for more readable code when chaining multiple methods together."
        },
        {
            "type": "paragraph",
            "content": "To handle any issue with rate limiting, I created a wrapper that ensures that all functions that make HTTP requests are limited to less than 20 requests per minute in total."
        },
    ],
    "challenges": [
        {
            "type": "subheading",
            "content": "Endpoint Design"
        },
        {
            "type": "paragraph",
            "content": "Initially, I created separate modules for Basketball-Reference and NBA-Stats. This made sense because each site required different methods for web scraping and provided slight variations in advanced stats. However, it seemed to make more sense to ensure that the three endpoints were defined only once. Another issue with this design was that it was possible to import utility functions from the import block, and these are not functions that I want a user to see when importing the actual endpoints because they break the abstraction barrier (shown below)."
        },
        {
            "type": "image",
            "content": require("../../assets/bad_import_block.png")
        },
        {
            "type": "paragraph",
            "content": "To address the two-module problem, I eliminated the two-module layout and instead defined each endpoint once. I then introduced a new ‘Site’ parameter for each endpoint in order to allow users to choose between Basketball-Reference and NBA-Stats, and modified each endpoint to handle web-scraping for both sites."
        },
        {
            "type": "paragraph",
            "content": "This successfully eliminated possible confusion with two modules, but the problem with the import block still remained. Additionally, the endpoints began to look messy and overcrowded with parameters after the introduction of the Site parameter. Another insufficiency this solution revealed was the lack of reusability for the endpoints. In other words, a user would need to invoke the endpoints separately for each site, and thus repeatedly input the same list of data: player name, year range, defensive rating range, data format, season type, and site."
        },
        {
            "type": "code",
            "content": `
from dans.endpoints.players import player_stats
from dans.library.constants import DataFormat, SeasonType, Site

# Get stats from Basketball-Reference
br_stats = player_stats(
name='Giannis Antetokounmpo',
year_range=[2019, 2021],
drtg_range=[107.5, 110],
data_format=DataFormat.opp_adj,
season_type=SeasonType.regular_season
site=Site.basketball_reference
)

# Get stats from NBA-Stats
ns_stats = player_stats(
name='Giannis Antetokounmpo',
year_range=[2019, 2021],
drtg_range=[107.5, 110],
data_format=DataFormat.opp_adj,
season_type=SeasonType.regular_season
site=Site.nba_stats
)

`
        },
        {
            "type": "paragraph",
            "content": "In search of a solution to these issues, I explored other NBA-related GitHub repositories to see how their endpoints are designed. The ‘nba_api’ repository caught my eye for how it leveraged classes to construct each of its endpoints, even though the classes only had one purpose: to fetch data from NBA-stats. Not only did this design create a nice uniformity between all endpoints, it also guaranteed that helper functions would not be visible from the import block."
        },
        {
            "type": "paragraph",
            "content": "This was surprisingly enlightening in terms of how this endpoint design redefined my understanding of how classes can be used in Python. Previously, I thought that classes are reserved for complex systems where multiple tasks are performed to modify data, and that functions are suited for nearly every other case where we simply require an output for any given input. This repository demonstrated how classes could be used for very simple purposes to allow for a cleaner architecture."
        },
        {
            "type": "paragraph",
            "content": "I implemented this design into DANS and it fixed my problem with the import block. To address my problem with overcrowded parameters and lack of reusability, I created two methods for each endpoint that retrieved stats from either Basketball-Reference or NBA-Stats. As a result, invocations for the endpoints became cleaner and could be used for both sites without having to reenter the inputs:"
        },
        {
            "type": "code",
            "content": `
from dans.endpoints.PlayerStats import PlayerStats
from dans.library.constants import DataFormat, SeasonType

base = PlayerStats(
name='Giannis Antetokounmpo',
year_range=[2019, 2021],
drtg_range=[107.5, 110],
data_format=DataFormat.opp_adj,
season_type=SeasonType.regular_season
)

# Get stats from Basketball-Reference
br_stats = base.bball_ref()
# Get stats from NBA-Stats
ns_stats = base.nba_stats()

`
        },
        {
            "type": "subheading",
            "content": "Limiting HTTP Requests"
        },
        {
            "type": "paragraph",
            "content": "It was important to optimize network traffic because Basketball-Reference and NBA-Stats have rate limits of 20 requests per minute. My initial implementation required the following amount of requests to get a player's stats (where N represents years inputted and M represents games played): one request to find the player’s URL path, N requests to fetch the player’s game logs, N requests to fetch the teams that fall within the defensive-rating range, and requests to calculate possession counts (N for NBA-Stats and M for Basketball-Reference)."
        },
        {
            "type": "paragraph",
            "content": "Pace is the statistic that allows me to calculate possession counts, and I previously found this stat on an individual game’s boxscore page for Basketball-Reference. However, after exploring the website a bit more, I discovered that team gamelog pages display advanced stats for every game a team played in a season. I changed my implementation to scrape pace from these pages, which reduced the number of requests to find possession counts to N."
        },
        {
            "type": "paragraph",
            "content": "This brought the total requests down to 3N + 1, which meant we could only request data across 6 years before waiting a full minute to continue, which is still pretty insufficient."
        },
        {
            "type": "paragraph",
            "content": "I researched common web-scraping techniques to improve efficiency and found that two stood out: multi-threading and memoization. Multi-threading was not viable due to my architecture's sequential data flow. However, memoization would allow me to create a player-URL lookup table, since the list of NBA players only expands annually during drafts, and a lookup table for teams within defensive-rating ranges, covering all team-seasons since 1971 through the present day (approximately 1,650 entries, with 30 teams and 55 seasons)."
        },
        {
            "type": "paragraph",
            "content": "These optimizations reduced the total number of requests to 2N, allowing us to process 10 years of data before hitting rate limits!"
        }
    ],
    "keyLearnings": [
        {
            "type": "subheading",
            "content": "Ease of Use and Documentation"
        },
        {
            "type": "paragraph",
            "content": "I learned how to make better design decisions by simply thinking from the user’s perspective. This led me to redefine my endpoints as classes rather than functions, leading to a simpler understanding for anyone using my package. I also learned how to write comprehensive documentation by detailing the usage of the endpoints and breaking down the calculations behind the various data formats. It was important for me to recognize that users do not share my deep knowledge of the endpoints and formulas, which can be a hard thing to do when working on a project for a long time, so I pushed myself to focus on describing each detail."
        },
        {
            "type": "subheading",
            "content": "Not Reinventing the Wheel"
        },
        {
            "type": "paragraph",
            "content": "I discovered that an element of good engineering is knowing when to use existing tools rather than creating my own tool from scratch. When facing rate limiting challenges, I started building my own solution until I realized that rate limiting was most likely a common issue and it was likely that a solution already existed, which it did (a Python decorator). In turn, I found that using solutions that do the job saves time and actually leads to more reliable code."
        },
        {
            "type": "subheading",
            "content": "Optimizations"
        },
        {
            "type": "paragraph",
            "content": "I learned to identify the biggest bottlenecks in my projects, such as the number of HTTP requests, and putting my efforts to optimize those bottlenecks instead of focusing on small details that don’t add much value for users. For example, to reduce the number of HTTP requests, I implemented memoization strategies, which reduced requests from 3N+1 to 2N."
        },
    ],
    "updates": []
}