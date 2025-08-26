export const getBBallStats = {
    "title": "Get-BBall-Stats",
    "description": "A Python package for scraping data from basketball-reference.com and stats.nba.com to provide opponent-adjusted statistics.",
    "technologies": ["Python", "Pandas", "AWS", "PostgreSQL"],
    "image": require("../../assets/get-bball-stats.png"),
    "links": [
        {
            "link": "https://github.com/oscarg617/website-lambda",
            "linkType": "Source Code"
        },
        {
            "link": "https://www.dansball.com/",
            "linkType": "Website"
        }
    ],
    "note": "Note: Original website discontinued as of 8/25/2025, replaced by DANS website",
    "motives": [
        {
            "type": "paragraph",
            "content": "After creating the DANS Python package to adjust NBA player statistics based on the defensive strength of their opponents, I realized that the stats were not easily accessible to non-programming fans of the NBA. So, I decided to build this user-friendly website where any NBA enthusiast can quickly look up defensive-adjusted player stats."
        },
    ],
    "howTos": [
        {
            "type": "paragraph",
            "content": "The website provides detailed player statistics against specific defensive competition with a simple search. Just enter the search criteria:"
        },
        {
            "type": "image",
            "content": require("../../assets/getbballstatsexample0.png")
        },
        {
            "type": "paragraph",
            "content": "Then click 'Get Stats' to view the results:"
        },
        {
            "type": "image",
            "content": require("../../assets/getbballstatsexample1.png")
        },
        {
            "type": "paragraph",
            "content": "Note: Get BBall Stats exclusively offers NBA playoff statistics spanning from 1980 through 2022."
        }
    ],
    "designChoices": [
        {
            "type": "paragraph",
            "content": "I needed to decide between creating a database containing all stats and building a backend that calls the DANS package endpoints. The main advantage that comes with creating a database is allowing for a faster access to data. In order to retrieve the data for the database, however, I would need to scrape all player game log data, which would take at least 20,000 requests (at least 4,000 NBA players x 5 seasons played on average). Building a backend that uses DANS would save a lot of time but could potentially lead to high network traffic on the server, resulting in increased costs. Ultimately, I decided to create a database because I prioritized quick data access, and I also thought it would be a valuable experience to design and interact with a database.",
        },
        {
            "type": "paragraph",
            "content": "To store my data, I chose a SQL database over NoSQL because my data was inherently structured: player statistics, team statistics, and game statistics. For my database, I selected PostgreSQL rather than simpler alternatives like MySQL. While my current queries are straightforward, I chose PostgreSQL for its scalability advantages and advanced features that would support future enhancements to the project. Specifically, I anticipated eventually implementing complex statistical aggregations and time-series analysis of player performance trends, which PostgreSQL handles efficiently with its robust indexing capabilities and specialized extensions.",
        },
        {
            "type": "paragraph",
            "content": "For the frontend development, I decided on React.js primarily due to my previous experience with the framework, which would allow for faster development while maintaining code quality. When considering deployment options, I evaluated several platforms before selecting AWS Amplify over alternatives like Vercel or Netlify. This decision was influenced by my prior experience with AWS services and familiarity with their user interface, which reduced the learning curve.For the backend architecture, I chose AWS API Gateway with Lambda integration because of its simplified endpoint management and built-in code editing capabilities, making it an efficient choice for a project where I wanted to focus more on basketball statistics than infrastructure configuration.",
        },
    ],
    "challenges": [
        {
            "type": "subheading",
            "content": "Automated Web Scraping"
        },
        {
            "type": "paragraph",
            "content": "As mentioned earlier, in order to collect all player game log data, I needed to make roughly 20,000 requests. With the rate limit of 20 requests per minute on Basketball-Reference, this made for an estimated 1,000 minutes to scrape all data. This presented a critical bottleneck, especially for a database that would need regular updating."
        },
        {
            "type": "paragraph",
            "content": "I decided to solve this problem with proxies and parallel programming. By implementing proxies from ScrapingBee, I was able to get past the forced cool-off periods that would have slowed data collection and I also avoided the chance of receiving ‘Too Many Requests’ errors. I also distributed the workload across five threads, reducing the scraping time to 200 minutes."
        },
        {
            "type": "paragraph",
            "content": "After the data collection, I realized that the scraped data did not have the relational structure (foreign keys) that I needed for the queries I was planning to write. Player game logs did not have references to their teams or games, which were needed in order to access opponent defensive statistics and game pace. This meant that I needed to manually create these relationships. Thus, I created unique identifiers for the team and game tables based on information present in the player game logs. For the team table, I used the team's abbreviation and season to uniquely identify a team, and for the game table, I used the date of the game and participating teams to uniquely identify a game. Then, I mapped each player game log to its corresponding opponent team and game using this information, allowing me to execute the queries while also leading to optimized data storage and more efficient queries."
        },
        {
            "type": "paragraph",
            "content": "Having structured the data properly, I had everything I needed to allow my backend to invoke my database. One last thing I needed to do, however, was to make the web scraping system allow for future updates without repeating the entire data collection. Specifically, I didn’t have a mechanism that would let me know which players have continued to play since the most recent update. Thus, I decided to include playing years for each athlete, allowing the update system to identify only players active in the current season, and thus not have to scrape data for historical players. This improvement made for an efficient update process that could run regularly with low overhead."
        },
        {
            "type": "subheading",
            "content": "AWS Lambda Layers"
        },
        {
            "type": "paragraph",
            "content": "My website was practically set up with the frontend properly communicating with the backend. However, I had an issue with how users had to input data. The five search criteria are: the player’s name, the starting season, the ending season, the minimum DRTG faced, and the maximum DRTG faced. It became apparent to me that it would be hard for a user to know the exact playing years that a player played. On top of that, it would be even harder for a user to know the exact level of defenses a player played against. Thus, there would be a high possibility that their search criteria would simply return no values."
        },
        {
            "type": "paragraph",
            "content": "My solution was to not allow the user to enter years and DRTG values until they input a player. Then with the player name, I could send a request to my backend to find the player’s playing seasons along with the defenses they faced. Then, the user would be able to use these values for their search criteria, increasing the chance that the query returns stats."
        },
        {
            "type": "paragraph",
            "content": "While this solution improved usability, it meant that every time a user selected a player, a backend request would occur, leading to an increase in cost and server load. This would be particularly bad when users simply explore different players without completing searches."
        },
        {
            "type": "paragraph",
            "content": "The optimization came through implementing frontend memoization. By pre-loading and locally storing the complete player database with their corresponding seasons and DRTG ranges, I avoided the need for backend requests during the time a user filled out the search criteria. This optimization maintained the improved user experience while ensuring that backend requests were only made to get the player’s stats."
        }
    ],
    "keyLearnings": [
        {
            "type": "subheading",
            "content": "Multithreading"
        },
        {
            "type": "paragraph",
            "content": "I learned how threads share resources and how to prevent conflicts when they access the same data. The also learned how to break down a problem into separate tasks that can run independently. This helped me apply this line of thinking to many other programming situations where speed is a big factor. I find myself thinking a lot more before writing code, especially in terms of how program could benefit from running in parallel rather than sequentially. This leads to more modular code that I can easily optimize down the road."
        },
        {
            "type": "subheading",
            "content": "Relational Databases"
        },
        {
            "type": "paragraph",
            "content": "Building a relational database showed me the importance of structuring my data efficiently. I gained valuable experience in planning out the design of my database and eventually landing on the three tables that would best fit the goals of my project: player game logs, teams, and games. Not only did this optimize space on my database, it also helped me organize my code and data collection for web-scraping. Additionally, I learned how to create relationships between tables, helping me understand how they are implemented in real-world databases. This was really informative after only learning about how foreign keys are used rather than how they are created."
        }
    ],
    "updates": []
}