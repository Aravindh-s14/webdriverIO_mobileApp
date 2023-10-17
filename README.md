# Mobile App Automation with WebDriverIO

![WebDriverIO Logo](https://webdriver.io/img/wdio.png)

## Overview

This repository contains automated tests for a mobile app's signup and login pages using WebDriverIO with JavaScript and the Mocha testing framework. The automation scripts demonstrate how to interact with mobile app elements, perform test scenarios, and ensure the functionality of the signup and login pages.

## Prerequisites

Before running the automation tests, make sure you have the following prerequisites set up:

- Node.js and npm installed
- Appium server for mobile automation
- Android or iOS emulator/simulator or a physical device
- Mobile app installed on the emulator/simulator or device

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/your-repo.git

2. Navigate to the project directory:
   
   ```bash
   cd your-repo
3. Install required dependencies

   ```bash
   npm install

## Configuration

1. Update the wdio.conf.js file with the appropriate capabilities for your mobile app and the Appium server settings.

2. Make sure to configure the desired mobile app's capabilities (platformName, deviceName, app, etc.) in the capabilities section of the configuration file.

## Running the Tests

To run the signup and login automation tests, use the following command:
   ```npx wdio```

[Runs the spec files mentioned in the 'spec' property in wdio.conf.js]

The tests will execute, and the results will be displayed in the console.

## Test Scenarios

The automated tests cover the following scenarios:

1. SignUp Page:
      -Whether user is able to sign in with no email id and password<br>
      -Whether the user is able to login with invalid email address<br>
      -Whether the user is abel to register with password less than required<br>
      -Whether the user is able to create account with an already existing email id

2. Login Page:
      -Whether the user is able to empty email and password fields
      -Whether the user is able to login with invalid email id
      -Whether the user is able to login with unregistered emailid
      -Whether the user is able to successfully login using valid credentials

## Author

Aravind S Panicker
