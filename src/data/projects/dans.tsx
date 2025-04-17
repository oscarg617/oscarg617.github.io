export const dans =     {
    "title": "DANS",
    "description": "A Python package for scraping data from basketball-reference.com and stats.nba.com to provide opponent-adjusted statistics.",
    "technologies": ["Python", "Pandas", "BeautifulSoup"],
    "image": require("../../assets/dans.png"),
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
    "designChoices": [
        {
            "type": "paragraph",
            // "content": "where should i get stats? bball-ref and nba-stats. main difference between them: their defensive rating formula is different, which is very relevant because defensive rating is an input to the endpoints. neither have more authority over the other, so i decided to include both of them and allow users to choose which stat they prefer.",
            "content": "I chose to use both Basketball-Reference and NBA-Stats as my data sources, as they are the two most used and trusted sources for NBA data. The main difference between them is their defensive rating formula, which is particularly important since defensive rating is an input to my endpoints. Since neither source has definitive authority over the other, I decided to include both and allow users to choose which site's implementation of the stat they prefer."
        },
        {
            "type": "paragraph",
            // "content": "how should i retrieve the stats? beautiful soup because the sites do not render data dynamically, which negates the use of selenium, which performs slower.",
            "content": "For web scraping, the two libraries I considered using were BeautifulSoup and Selenium. BeautifulSoup is faster than Selenium for scraping data from static web pages, whereas Selenium has the ability to fetch dynamically-rendered resources. Since neither of the websites render data dynamically, it would have been unnecessarily resource intensive to use Selenium; so, I chose BeautifulSoup."
        },
        {
            "type": "paragraph",
            // "content": "how should i organize/filter stats? Pandas because it seemlessly takes on the format of the tables provided in bball-ref and nba-stats. Easy to vectorize actions onto the whole data. Numpy also does this, but pandas is prettier and thus makes for more readable code, especially when chaining multiple methods together which i knew i needed to do",
            "content": "I selected Pandas as my primary data manipulation tool because it seamlessly handles the tabular format of the data provided by Basketball-Reference and NBA-Stats. While NumPy could have performed similar vector operations, Pandas offered more readable code, especially when chaining multiple methods together, which I knew would be a common pattern throughout the project. This readability was especially important for easier debugging and maintaining high code clarity throughout the development process."
        },
        {
            "type": "paragraph",
            // "content": "there are a lot of http requests being made - how can we avoid Error 429? Class wrapper over requests module that limits requests. The class wrapper includes functionality tailored towards requests to bball-ref.com and stats.nba.com by handling headers and parameters for various endpoints: player logs, per_100 stats, opponent faced, data format, season_type, etc.",
            "content": "To handle rate limiting when making numerous HTTP requests to these sites, I developed a custom class wrapper that handles any function that makes HTTP requests, primarily wrapping the 'get' method of the requests module. This wrapper implements request limiting functionality specifically tailored for Basketball-Reference and NBA-Stats by handling appropriate headers and parameters for various endpoints. The class manages requests for player logs, per-100 stats, opponent data, different data formats, and season types while ensuring we stay within acceptable request frequency limits."
        },
    ],
    "challenges": [
        {
            "type": "subheading",
            "content": "Endpoint Design"
        },
        {
            "type": "paragraph",
            "content": "Initially, I created separate modules for Basketball-Reference and NBA-Stats. This made sense because each site required different methods for web scraping and provided slight variations in advanced stats. However, it seemed more sensible to ensure that the three core endpoints were only defined once, rather than being split across two modules. Another issue with this design was that it was possible to import utility functions directly from the import block. These functions naturally exist to ensure the code is modular and concise, but they are not functions that I want a user to see when importing the actual endpoints because they break the abstraction barrier (shown below)."
        },
        {
            "type": "image",
            "content": require("../../assets/bad_import_block.png")
        },
        {
            "type": "paragraph",
            "content": "To address the two-module problem, I eliminated the two-module layout and instead defined each endpoint once. I then introduced a new 'Site' parameter for each endpoint in order to allow users to choose between Basketball-Reference and NBA-Stats, and modified each endpoint to handle web-scraping for both sites."
        },
        {
            "type": "paragraph",
            "content": "This successfully eliminated possible confusion with two modules, but the problem with the import block still remained. Additionally, the endpoints began to look messy and overcrowded with parameters after the introduction of the Site parameter. Another insufficiency this solution shed light on was the lack of reusability for the endpoints. In other words, a user would need to invoke the endpoints separately for each site, and thus repeatedly input the same list of data: player name, year range, defensive rating range, data format, season type, and site."
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
            "content": "In search of a solution to these issues, I explored other NBA-related GitHub repositories to see how their endpoints are designed. The 'nba_api' repository caught my eye for how it leveraged classes to construct each of its endpoints, even though the classes only had one purpose: to fetch data from NBA-stats. Not only did this design create a nice uniformity between all endpoints, it also guaranteed that helper functions would not be visible from the import block."
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
            "type": "paragraph",
            "content": "problem: how to reduce the amount of http requests? the lookup operation i borrowed from vishaal agartha took x requests just to confirm the name of the nba player. additionally, for every year in the input, a request needed to be made to find the defensive strength of each time during that year, so that I could then see which of those teams fall into the desired drtg range. i noted that the list of names was something that never changed, outside of a rookies that are drafted each year. as for the team defensive ratings, it there only at most 30 teams in the league through nba history, which meant it wasn't that much data, but it was relatively a lot of time spent for those requests. thus, i decided that a good solution would be to have all the names of every nba player, and all the required defensive metrics for every team saved to a csv file on the python package, which is a sort of memoization that is done one time on my machine so that the user never has to do it."
        },
        {
            "type": "subheading",
            "content": "Limiting HTTP Requests"
        },
        {
            "type": "paragraph",
            "content": "Since Basketball-Reference and NBA-Stats have rate limits of 20 requests per minute, optimizing network traffic was crucial. My initial implementation required these requests to get a player's stats (where N represents years inputted and M represents games played): (1) one request to find the player’s URL path, (2) N requests to fetch the player’s game logs, (3) N requests to fetch the teams that fall within the defensive-rating range, and (4) requests to calculate possession counts (N for NBA-Stats and M for Basketball-Reference)."
        },
        {
            "type": "paragraph",
            "content": "'Pace' is the key statistic that allows me to calculate possession counts, and I previously found this stat on an individual game’s boxscore page for Basketball-Reference. After exploring alternatives, I discovered team gamelog pages that display advanced stats –– including Pace –– for every game a team played in a season. I altered my implementation to scrape pace from these pages, reducing the number of requests to find possession counts to N."
        },
        {
            "type": "paragraph",
            "content": "This improvement brought the total requests to 3N + 1, which was still unsatisfactory given the rate limit of 20 requests per minute. This meant we could only request data across 6 years before waiting a full minute to continue."
        },
        {
            "type": "paragraph",
            "content": "I researched efficient web-scraping techniques and found two that were most common: multi-threading and memoization. Multi-threading wasn't viable due to my architecture's sequential dataflow. However, memoization was applicable to two tasks: (1) creating a comprehensive player-URL lookup table, since the list of NBA players only expands annually during drafts, and (2) building a lookup table for teams within defensive-rating ranges, covering all team-seasons since 1971 through present day (approximately 1,650 entries with 30 teams × 55 seasons)—the complete period for which opponent-adjusted statistics are available through DANS."
        },
        {
            "type": "paragraph",
            "content": "These optimizations reduced total requests to 2N, allowing us to process 10 years of data before hitting rate limits!"
        }
    ],
    "keyLearnings": [
        // {
        //     "type": "paragraph",
        //     "content": "How to properly document and create easy to use endpoints: thinking from the user's perspective",
        // },
        // {
        //     "type": "paragraph",
        //     "content": "finding other software/tools that exist that do the job i want, rather than making the software myself. (examples: rate limiting on requests, script to find all nba player names)",
        // },
    ],
    "futureImprovements": [
        // {
        //     "type": "paragraph",
        //     "content": "in terms of endpoints, i'd like to include an endpoint that uses play-by-play data so that possessions are more accurately calculated"
        // },
        // {
        //     "type": "paragraph",
        //     "content": "in terms of performance, i'd like to use team advanced game logs so that i can access the pace of each game in a season from one request, rather than one request per game."
        // },
    ],
    "updates": []
}