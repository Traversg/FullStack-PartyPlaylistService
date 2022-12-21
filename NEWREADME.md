<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="resources/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Party Playlist</h3>

  <p align="center">
    Now everyone at the party can contribute to the playlist!
    <br />
    <a href="https://github.com/Traversg/Party_Playlist"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Party playlist is an application that allows a user to create playlist for a party and invite their friends to add
songs to the playlist and vote on the songs they want to hear first.

Party Playlist was a NSS group project completed with three other team members: Matt Leigh, Jake Price, and Matthew Reuther.

Each team member was responsible mostly for designing their assigned API from backend to frontend. 
For instance, while one member was tasked with the `GetPlaylistBySongId` API another was tasked with `GetGuestList` API.
Other tasks like adding design features to the frontend were handled by Jake Price and Matthew Reuther,
while building the songs table script and table design were handled by Matt Leigh and me.

### What I Learned

Before this project, I knew how to build a frontend design with HTML, CSS, and JavaScript and how to build
back a backend design using Java and AWS services. What I learned in this project is how to connect the two.
While I conceptually understood the path from the client to the database and back, I learned how to successfully code
that entire path and how they are all integrated. At the start of the project, building a successful API path
took me at least two days (with hours of debugging). By the end, I was start and finish one in an hour.

In addition, I became more confident in my debugging skills using DevTools and remote debugging with Docker.
Over the course of the project, I became familiar with common errors and was able to hunt down bugs faster.

Most of all, I learned how to work well with a team. While I was lucky to work with such competent and flexible
teammates, we still ran into problems. One was how to efficiently divvy up tasks. In our first sprint, the tickets
we assigned ourselves were a bit too broad, clumsy, and too reliant on code another teammate was working. In our second
sprint, these tasks were much more concise, efficient, and more independent of each other. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* [![JavaScript][JavaScript]][JavaScript-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Java][Java]][Java-url]
* [![DynamoDB][DynamoDB]][DynamoDB-url]
* [![Lambda][Lambda]][Lambda-url]
* [![AWS CloudFront][AWS CloudFront]][CloudFront-url]
* [![API Gateway][API Gateway]][Gateway-url]
* [![AWS CloudFormation][AWS CloudFormation]][CloudFormation-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites and Installation

1. Create or use an existing Amazon AWS account.
2. Install the latest version of AWS CLI. [Link to documentation](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
3. Install the latest version of AWS SAM CLI. [Link to documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
4. Install NodeJS before you can run some of the commands below (the `npm` ones).

- On Windows / WSL:
```shell
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```
- On macOS:
```shell
brew install node
```

### Run Locally

3. Run the Lambda service (aka the backend):
    - Build the Java code: `sam build`
    - Create an S3 bucket: `aws s3 mb s3://YOUR_BUCKET`
    - Deploy the SAM template: `sam deploy --s3-bucket BUCKET_FROM_ABOVE --parameter-overrides S3Bucket=BUCKET_FROM_ABOVE FrontendDeployment=local`
      > **NOTE:** _Yes you have to provide the same S3 bucket name twice. Yes this is annoying._
    - Run the local API: `sam local start-api --warm-containers LAZY`
4. Run a local web server (aka the frontend):
    - CD into the web directory: `cd web`
    - Install dependencies : `npm install`
    - Run the local server: `npm run run-local`
    -  > **NOTE:** Only songs found in the song table can be added to the playlist.

After doing all of this, you will have a server running on port `8000` - you can access it by going to [http://localhost:8000](http://localhost:8000) in your browser.

To stop either the local backend (the `sam local...` command) or local frontend (the `npm run...`) command, simply press `Ctrl-C` in the terminal where the process is running.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Traversg/Party_Playlist.svg?style=for-the-badge
[contributors-url]: https://github.com/Traversg/Party_Playlist/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/travers-geoffray/
[product-screenshot]: resources/images/home-page.png
[DynamoDb]: https://img.shields.io/badge/AWS_DynamoDB-yellow?style=for-the-badge&logo=amazondynamodb&logoColor=4053D6
[DynamoDb-url]: https://aws.amazon.com/dynamodb/
[Lambda]: https://img.shields.io/badge/AWS_Lambda-blue?style=for-the-badge&logo=awslambda&logoColor=FF9900
[Lambda-url]: https://aws.amazon.com/lambda/
[API Gateway]: https://img.shields.io/badge/AWS_API_Gateway-black?style=for-the-badge&logo=amazonapigateway&logoColor=FF4F8B
[Gateway-url]: https://aws.amazon.com/api-gateway/
[JavaScript]: https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=61DAFB
[JavaScript-url]: https://javascript.com/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Java]: https://img.shields.io/badge/Java-darkgreen?style=for-the-badge
[Java-url]: https://java.com/
[AWS CloudFront]: https://img.shields.io/badge/AWS_CloudFront-orange?style=for-the-badge
[Cloudfront-url]: https://aws.amazon.com/cloudfront/
[AWS CloudFormation]: https://img.shields.io/badge/AWS_CloudFormation-red?style=for-the-badge
[Cloudformation-url]: https://aws.amazon.com/cloudformation/