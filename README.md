# Palindrome Checker

This repo contains a simple sample react project to build and deploy with DevOps.

The app checks input and provides feedback on the entered word.

## Objectives

Be able to:

- describe basic Webpack concepts. <https://webpack.js.org/concepts/>

- use this repository as a template to use webpack to bundle react into pure JavaScript.

- navigate the AWS web console to copy and paste your app for sharing it publicly.

- describe features of aws s3

## AWS S3

Quick link to access s3 services:

<https://s3.console.aws.amazon.com/s3/home?region=us-east-1#>

Once in the s3 console:

Click "Create bucket" to start.

In the popup modal "bucket name" input, you will enter a fully unique bucket name using "palindrome" plus your initials or other unique identifier of your choosing.

The name must be unique because it is the sub domain name on s3.amazonaws.com and only one person can own each unique name.

For example I used "palindrome-jr" which results in <https://palindrome-jr.s3.amazonaws.com/index.html> as my public url for my new s3 bucker.

Leave all other field values as they are.

Click "next" to get to "Configure Options" step.

Leave all settings unchecked.

Click "next" to continue to "Set permissions" step.

Uncheck "Block all public access" option since this is a public website example.

At the top of the page is checkbox to check on of "I acknowledge that the current settings may result in this bucket and the objects within becoming public"

Clicking the acceptance will enable the "next" button on this step.

Click "next" to get to the "Review" step.

Review the summary.

Click "Create bucket"
