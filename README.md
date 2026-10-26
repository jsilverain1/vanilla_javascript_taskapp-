# Vanilla JavaScript Task App

A simple to-do list app built with plain HTML, CSS, and JavaScript — no frameworks or libraries. You can add tasks, mark them complete, and delete them.

## Features

- **Add tasks** — type a task in the input box and press **Add** (or hit Enter).
- **Complete tasks** — check the box next to a task to cross it out; uncheck it to undo.
- **Delete tasks** — click **Delete** to remove a task from the list.
- **Empty input check** — if you try to add a task without typing anything, the app shows a "Please enter something" message.
- **Clean, centered layout** — a card-style design with hover effects that also fits on small screens.

## How to Run

No install or build step needed.

1. Clone or download this repository.
2. Open `index.html` in any web browser.

## Project Structure

| File | What it does |
|------|--------------|
| `index.html` | The page structure: a heading, a form with a text input and Add button, and a card that holds the task list. |
| `styles.css` | The styling: centered layout, input and button styles, the white card with a shadow, and the layout of each task row. |
| `index.js` | The behavior: handles adding, completing, and deleting tasks, plus the empty-input message. |

## How It Works

1. **Selecting elements** — `document.querySelector` grabs the form, the input, and the task container from the page.
2. **Handling the form submit** — an event listener on the form runs when the user submits. `event.preventDefault()` stops the page from reloading.
3. **Validating input** — if the input is empty, `displayError()` shows a message instead of adding a task.
4. **Building a task row** — for each new task, JavaScript creates a `div` with the `task-row` class and adds three elements to it with `append()`:
   - a checkbox (`<input type="checkbox">`)
   - the task text (`<p>`)
   - a Delete button
5. **Completing a task** — a `change` listener on the checkbox toggles `text-decoration: line-through` on the task text.
6. **Deleting a task** — a `click` listener on the Delete button calls `taskRow.remove()` to take that row off the page.
7. **localStorage** — the task text is saved with `localStorage.setItem` and read back with `localStorage.getItem`, and removed with `localStorage.removeItem` when deleted.

## What I Practiced

- Selecting and creating DOM elements (`querySelector`, `createElement`, `append`, `remove`)
- Handling events (`submit`, `click`, `change`) with `addEventListener`
- Preventing default form behavior
- Basic input validation
- Changing styles with JavaScript
- Using `localStorage`
- Laying out a page with Flexbox and styling hover/focus states with CSS

## Next Steps / Ideas

- Save the full list of tasks in `localStorage` (as an array with `JSON.stringify`) so tasks stay after the page is refreshed.
- Show the empty-input message in its own element so it doesn't replace tasks that are already in the list, and clear it once a task is added.
- Ignore input that is only spaces (using `.trim()`).
- Clear the input box after a task is added.
- Add a way to edit tasks or filter by completed/active.
