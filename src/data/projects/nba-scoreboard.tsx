export const nbaScoreboard = {
    "title": "NBA-Scoreboard",
    "description": "A dockerized full-stack web server for live NBA scoreboard updates.",
    "technologies": ["JavaScript", "Python", "Flask", "Docker"],
    "image": require("../../assets/nba-scoreboard.png"),
    "links": [
        {
            "link": "https://github.com/oscarg617/nba-scoreboard",
            "linkType": "Source Code"
        }
    ],
    "note": "",
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
    "designChoices": [
        {
            "type": "paragraph",
            "content": "For the frontend, I chose JavaScript and React because the format of the scoreboard lends itself to React's reusable component architecture. Since I had no experience using raw HTML with JavaScript, it was preferable to go with a framework such as React that provides mechanisms for component state management and makes it easy to iterate through the list of games provided by my backend."
        },
        {
            "type": "paragraph",
            "content": "For the backend, I chose Python because the 'nba_api' package provided a live NBA scoreboard endpoint with great documentation and containing all the metadata I wanted to include in my scoreboard, such as game number, series lead, and home court."
        },
        {
            "type": "paragraph",
            "content": "There were three frameworks I considered: Django, Flask, and FastAPI. Django is the more widely used framework that provides a more comprehensive set of tools for full-stack development than the other two frameworks. However, I was looking to build a very simple API, so it didn't make sense to go with the complexity that comes with Django. In fact, it was for this very same reason that I decided to go with Flask over FastAPI. My API only needed one endpoint, and was only going to be triggered a few times per minute, which meant that I did not need the concurrency support that FastAPI provided. Thus, Flask was the perfect choice to run a small local API."
        },
        {
            "type": "paragraph",
            "content": "Lastly, I decided to containerize the appliaction with Docker to ensure that it would run on any machine with just one command."
        },
    ],
    "challenges": [
        {
            "type": "paragraph",
            "content": "I successfully dockerized the backend and frontend separately by writing two Dockerfiles, building individual images, and then running them as separate containers. While this worked perfectly fine to get the site running, I wanted to be able to merge the backend and frontend so that it only took one command to run the application."
        },
        {
            "type": "paragraph",
            "content": "Initially, I tried to merge the Dockerfiles, but I faced a problem with selecting a suitable base image: the frontend uses a Node base image, and the backend uses a Python base image."
        },
        {
            "type": "paragraph",
            "content": "After researching some base image options, I found that it was possible to use an Ubuntu image and install dependencies for each service with their respective package manager. However, this approach conflicted with Docker’s best practice of running one service per container."
        },
        {
            "type": "paragraph",
            "content": "The solution came when I learned about Docker Compose, which is a tool designed for running multi-container applications. As a result, I created a docker-compose.yml file (shown below), and I was able to keep my services separate while also allowing me to run my application with a single command."
        }
    ],
    "keyLearnings": [
        {
            "type": "paragraph",
            "content": "This project significantly strengthened my understanding of full-stack development. I learned how to effectively structure a backend API that serves exactly the data needed by the frontend in a convenient form to make rendering straightforward. Working with Docker taught me the value of containerization for creating consistent, portable environments and the power of Docker Compose for orchestrating multi-container applications. I also gained valuable experience in evaluating the pros and cons of frameworks in order to satisfy actual requirements."
        },
    ],
    "updates": []
}