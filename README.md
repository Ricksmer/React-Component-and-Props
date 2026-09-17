# Student Progress Dashboard

A responsive React dashboard for reviewing a student's course progress, identifying at-risk subjects, and selecting a course for follow-up.

The interface uses a light blue visual system with modern typography, rounded containers, animated score meters, responsive course cards, and accessible keyboard interactions.

## Features

- Student profile card with name, program, year level, and student ID
- Course cards showing course title, unit count, status, achieved score, passing score, score meter, and adviser
- Adviser consultation note for courses below the passing score
- Clickable course cards with selected-course feedback above the course grid
- Keyboard support for course cards using `Enter` or `Space`
- Responsive layouts for mobile, tablet, and desktop screens
- Hover, focus, entrance, and reduced-motion states
- Consistent rounded containers and blue-accented status styling

## Tech Stack

- React 19 and React DOM 19
- Vite 8
- ESLint 10
- JavaScript with JSX
- CSS with responsive media queries and CSS animations
- Google Fonts: DM Sans, Manrope, and DM Mono

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL, normally `http://localhost:5173/`.

On Windows PowerShell, use `npm.cmd` if the PowerShell npm shim is blocked by execution policy:

```powershell
npm.cmd run dev
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement |
| `npm run build` | Create a production build in `dist/` |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
student-progress-lab/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/
├── src/
│   ├── App.jsx                 # Application state and top-level layout
│   ├── data.js                 # Sample student and course data
│   ├── index.css               # Global reset and font imports
│   ├── main.jsx                # React entry point
│   ├── styles.css              # Dashboard layout, theme, and animations
│   └── components/
│       ├── CourseList.jsx       # Maps course data into progress cards
│       ├── CourseSection.jsx    # Course heading and selection feedback
│       ├── DashboardHeader.jsx  # Dashboard title and welcome message
│       ├── ProgressCard.jsx     # Interactive course card
│       ├── ProgressStatus.jsx   # Status, score metrics, and score meter
│       └── StudentDashboard.jsx # Profile and course-section composition
└── README.md
```

## Data and State

Sample data is defined in [`src/data.js`](src/data.js).

The current sample student is Alex Rivera, a third-year BS Information Technology student. The sample course list includes React Development, Information Assurance, and Computer Architecture.

`App.jsx` owns the selected course state. Selecting a card updates `selectedCourse` and displays the selected course message above the progress cards.

To use different students or courses, update the exported `student` and `courses` values in `src/data.js`. Each course supports:

```js
{
  id: "IT311",
  title: "React Development",
  score: 82,
  passingScore: 75,
  units: 3
}
```

## Visual Design

- Light blue-gray page background
- Navy text with blue primary accents
- Coral used for at-risk states and adviser warnings
- Rounded profile, course, score, and feedback containers
- DM Sans for headings, Manrope for interface text, and DM Mono for scores and metadata
- Strong card hover lift, blue contrast shift, border emphasis, and shadow depth
- `prefers-reduced-motion` support for users who limit animation

## Validation

Run the production build and lint checks before submitting changes:

```bash
npm run build
npm run lint
```

The current implementation has been validated with both commands and browser smoke checks covering course selection, score labels, responsive widths, and keyboard interaction.

## Notes

- The app currently uses local sample data and has no backend or persistence layer.
- Google Fonts are imported from the web, so the intended typography requires network access. CSS includes generic sans-serif fallbacks.
- The project is intentionally small and component-focused for instructional use.
