# 30MFF Website Documentation

### Website Name: “30 Minute Film Festival”

### Website Description:

This website is a platform to learn more about the Interactive Media Department at NYUAD and see the works of students in Communications Lab

### Initial Idea:

I wanted to create a website inspired by the many streaming platforms available nowadays. I wanted to emulate the mechanics of websites like Netflix or Prime Video to create my website design. 

### Process:

##### Stage 1: Uploading a Video

My first step was to figure out how to add a video into my code. I really struggled with this step as I had a weird glitch where the video would play and I could hear the audio but the video image wouldn’t play. I tried multiple times to change the source of the video, work locally, use VSC instead of Sublime, but it still wouldn’t work. I asked a friend from a different class for help and he showed me how to embed the video through Google Drive. When you upload a video to Drive, it makes an automatic web source for it which you can embed through the code they generate. 

```
<iframe src="drive link" width="x" height="y" allow="autoplay"></iframe>
```

After employing this trick, I was able to successfully upload a video onto a page. This also had the added benefit of higher quality since Github has a max limit of 25 mbs for uploads which meant that the video would have to be compressed heavily before being uploaded.

##### Stage 2: Creating a Navigation Bar

To complete this step, I followed a tutorial by the account Easy Tutorials, on creating a Home page and Navigation Bar. Creating a ```` div class="navbar" ```` I was able to add ````href=""```` links and use this same code and all the pages I created.

##### Stage 2: Creating About and Contact Page

For these pages, I kept things very simple and created a straightforward layout using the Roboto font and different heading sizes.

##### Stage 3: Creating Film Pages

I first created page from my group and made a streaming page. I gave the film a genre and description, and listed out the cast members. I then duplicated this page to create the other film pages. This way I was able to keep the same css for all of them and only adjusted the html code. I gave the other films descriptions but I wasn’t able to include all the cast members since I didn’t have the group information details. I also added some animation using ````card:hover```` similar to how Netflix has an interaction when you hover film titles.

##### Stage 4: Adding JavaScript

For the final step of adding interactivity through js, I had an idea for the “Explore” button on the Home page. I decided to create a randomized generator for this button so every time someone clicks on it, a different film from the 4 available will play. Every time the website is refreshed, this number changes. I was able to use my practice in p5.js from Intro to IM and I received help from the Unix lab to make this addition. 

### Reflection:

Overall, I am pretty happy with my website. Since it is my first time creating a website and learning html/css, I am proud of my progress. I really like the animation on the Home page because it’s very reminiscent of the streaming platforms I was inspired by. Nonetheless, there are things I would like to improve on with more time and skills.  I would love to add more films and categorization. I wasn’t able to include all the films made in our class because they wouldn’t fit on the Home page, but looked very empty on a separate page. If I was able to combine different class sections, maybe I could have enough films to create a full separate page. I also wanted to add more categorization that could be accessed through the Navigation Bar. I originally chose against adding them directly onto the Navigation because I felt like there were not enough films and/or repeating genres for it to be a helpful navigation section. I’m excited to learn more about website design and programming so I can improve my skills and create better works in the future!
