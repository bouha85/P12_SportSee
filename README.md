# P12: React & Recharts Dashboard / SportSee

## Project's presentation

SportSee is a startup dedicated to sport's coaching. The purpose of this project is to developp a brand new Dashboard's version of their application, where the user can check any important data about his sport's practice.

This project has been developped with React and <a href="https://recharts.org/en-US/">Recharts librairie</a>.

Two repositories are needed to enable the project to run:

## 1. BACK-END

An alternative to the use of this back-end API is available, see below at [USE WITHOUT BACKEND](#use-without-backend) in front-end section.

The back-end project requires nodeJS installed and any package manager such as npm or yarn. Please refer to the README available on the repository for further informations.

* You have to clone the back-end locally with either/or :

```bash
# HTTPS
git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git

# SSH
git clone git@github.com:OpenClassrooms-Student-Center/P9-front-end-dashboard.git
```

* Then access inside your local repository and install dependencies with :

```bash
npm install
```

* launch the back-end with either/or:

```bash
 npm start
 npm run dev
 ```
### URL/PORT

The default URL used by the micro-API is <http://localhost:3000>.

## 2. FRONT-END

The present repository contains this part of the project. Any package manager such as npm or yarn is required.

* You have to clone the project locally with either/or :

```bash
# HTTPS
 git clone https://github.com/bouha85/P12_SportSee.git

# SSH
git clone git@github.com:bouha85/P12_SportSee.git
```

* Then access inside your local repository and install dependencies using :

```bash
npm install
```

* Launch the application with :

```bash
 npm start
 ```
## 3. Endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

## 4. Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.
