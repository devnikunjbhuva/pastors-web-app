# React Developer Test Project

## Introduction

This project was created with a strong emphasis on code maintainability, quality, and adherence to best practices in the React ecosystem. The goal was to demonstrate proficiency in React development while leveraging widely-used libraries to optimize performance and enhance overall code quality.

## Project Overview

This project is a Contact Management Software built with React. It incorporates a range of features and follows established React development principles.

### Key Features

1. **Main Screen:**
   - Displays two centrally aligned buttons, Button A and Button B.
   - Clicking Button A opens Modal A, and Button B opens Modal B.

2. **Modals:**
   - Modal A:
     - Retrieves and displays contacts from all countries via an API.
     - Contains three buttons: Modal Button A (All Contacts), Modal Button B (US Contacts), and Modal Button C (Close).
     - Offers contact filtering based on a checkbox option (Only even IDs).
   - Modal B:
     - Fetches and displays contacts from the US via an API.
     - Shares the same buttons and filtering option as Modal A.
   - Modal C:
     - Presents detailed contact information.
     - Does not alter the URL upon opening.

4. **Search Functionality:**
   - Modals A and B incorporate a search box for contact filtering.
   - Contact filtering occurs in real-time with a slight delay and immediately upon hitting the Enter key.

5. **Infinite Scrolling:**
   - Initially displays only the first page of contacts (API param: page=1).
   - Loads the subsequent page of contacts via infinite scrolling when the user reaches the modal's bottom.

6. **URL Management:**
   - Changes the URL when opening Modals A and B to reflect the current modal.
   - Opening Modal C does not affect the URL.

### Technologies and Libraries Used

To ensure code quality and optimize performance, this project makes use of various React ecosystem libraries:

- **React:** Provides a structured and efficient way to build user interfaces.
- **React-Bootstrap:** Enhances front-end development with pre-designed UI components and responsive design features.
- **TypeScript:** Adds static typing for enhanced code quality and development experience.
- **API:** Retrieves and displays contact data efficiently.
- **Redux:** Facilitates centralized state management.
- **Redux Thunk:** Enables asynchronous API calls with Redux.




## Getting Started

To run the software locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install` or `yarn install`.
3. Start the development server using `npm start` or `yarn start`.

## Usage

- Upon launching the application, you will see the main screen with Button A and Button B.
- Clicking on these buttons will open Modal A and Modal B, respectively.
- Modals allow you to view and filter contacts from different countries.
- Modal C displays detailed contact information.
- Use the checkbox in Modals A and B to apply the "Only even" filter.
- Infinite scroll will load more contacts as you scroll down in the modals.
