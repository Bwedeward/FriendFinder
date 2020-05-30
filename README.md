<div align ="center"><h1>Friend Finder</h1></div>

Liri is a command line node application that uses multiple APIs to request information from OMDB, Spotify, and Bands In Town. Commands are entered as an argument while using node to execute Liri and responses are logged to the console.

## Table of Contents



[**Installation**](#installation)

[**Liri Commands**](#Liri-Commands)
  * [**```concert-this```**](#concert-this)
  * [**```spotify-this-song```**](#spotify-this-song)
  * [**```movie-this```**](#movie-this)
  * [**```do-what-it-says```**](#do-what-it-says)


[**Additional Info**](#Additional-Info)
  * [**APIs Used**](#APIs-Used)
  * [**Node Modules**](#Node-Modules)

## Installation ##
1. Clone the repository to your computer using ```git-clone git@github.com:tylerblakeman/liri-node-app.git```
2. Install the required node modules by entering    ```npm-install```
3. Create a file called keys.js in the root directory of the cloned repository with the following contents:
    ```
    console.log('this is loaded');
    
    exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
    };  
4. Create a .env file in the root directory of the cloned repository containing the following:
    ```
    # Spotify API Keys

    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret
    ```
5. In your terminal navigate to the liri-node-app folder where you will be able to execute the commands below.

[Table of Contents](#Table-of-Contents)
## Liri Commands
There are 4 commands that work for Liri. 
* ```concert-this```**```<artist/band name>```**
* ```spotify-this-song```**```<song name>```**
* ```movie-this```**```<movie name>```**
* ```do-what-it-says```

[Table of Contents](#Table-of-Contents)
## Command Usage #
After navigating to the folder where liri has been cloned you can enter ```node liri.js <command>```

###  ```concert-this``` ###

This command will return the next concert that this band plays - or will advise if they have no concerts scheduled.<br>

**example:**<br>
user input without a band\artist name:  
<br>

    $ node liri.js concert-this
<br>
application returns:

    this is loaded
    you have not entered a band name
user input with a band\artist name:
<br>
    
    $ node liri.js concert-this blink-182

application returns:
    
    this is loaded
    Venue Name: Imperial GNP
    Venue City: Tijuana
    Venue Country: Mexico
    Date: 05/16/2020

**Note that if the band is not currently touring Liri will return the following:**

    this is loaded
    This artist has no shows scheduled

### ```spotify-this-song``` ###

this command will return Spotify information for a specific song - if no song is entered it will go with a default song - 'The Sign' by Ace of Base <br>

**example:** <br>

user input without a song: <br>

    $ node liri.js spotify-this-song

application returns:<br>

    this is loaded
    Artists: Ace of Base
    Song Name: The Sign
    Preview: https://p.scdn.co/mp3-preview/4c463359f67dd3546db7294d236dd0ae991882ff?cid=76be2d2bb9ab44c296023a69ffea0590
    Album: The Sign
    
user input with a song:<br>

```node liri.js spotify-this-song money aint a thang```<br>

application returns: <br>
```this is loaded```<br>
```Artists: Jermaine Dupri```<br>
```Song Name: Money Ain't a Thang (feat. Jay-Z)```<br>
```Preview: https://p.scdn.co/mp3-preview/ebe800f26a02af4c0ac85a98b8869636cc5939d3?cid=76be2d2bb9ab44c296023a69ffea0590```<br>
```Album: Life In 1472 (The Original Soundtrack)```<br>


### ```movie-this``` ###

This command will return OMDB information for a specific movie - if no movie is entered it will go with a default movie - 'Mr. Nobody'. 

example: 

User input without a movie: 

    $ node liri.js movie-this

application returns:

    Title: Mr. Nobody
    Year: 2009
    IMDB Rating: 7.8/10
    Rotten Tomatoes Rating: 67%
    Production Country: Belgium, Germany, Canada, France, UK, Luxembourg
    Language: English, Mohawk
    Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite 
    possibilities arise from this decision. As long as he doesn't choose, anything is possible.
    Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham

user input with a movie:

    node liri.js movie-this

application returns: 
    
    this is loaded
    Title: Fight Club
    Year: 1999
    IMDB Rating: 8.8/10
    Rotten Tomatoes Rating: 78%
    Production Country: USA, Germany
    Language: English
    Plot: An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much 
    more.
    Actors: Edward Norton, Brad Pitt, Meat Loaf, Zach Grenier


###  ```do-what-it-says``` ###

This command reads a command from the random.txt file and issues that command.

example:

User input: 

    $ node liri.js do-what-it-says

application returns:

    this is loaded
    spotify-this-song  "I Want it That Way"
    Artists: Backstreet Boys
    Song Name: I Want It That Way
    Preview: https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=76be2d2bb9ab44c296023a69ffea0590
    Album: The Hits--Chapter One

[Table of Contents](#Table-of-Contents)
## Additional Info ##
### APIs Used ###

This application uses the following APIs:
* [Bands In Town](https://artists.bandsintown.com/support/public-api)
* [Spotify](https://developer.spotify.com/documentation/web-api/)
* [OMDB](http://www.omdbapi.com/)

### Node Modules ###
This application uses the following Node Modules:
* [moment](https://www.npmjs.com/package/moment)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [axios](https://www.npmjs.com/package/axios)

[Table of Contents](#Table-of-Contents)