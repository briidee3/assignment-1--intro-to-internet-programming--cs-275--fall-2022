# Fall 2022 Intro to Internet Programming — Assignment 1

* **Do not start this project until you have read these instructions carefully and you understand them. If something is not clear, ask.**

---

## ❖・Introduction・❖
The goals of this assignment are to get you familiar with JavaScript syntax at the Node level with Gulp and at the browser level, and to get you to practice working with larger project scaffolds.

Create a *single* web page consisting of HTML, CSS, and JavaScript that prompts the user for the size of a matrix, prints the matrix with values from 1–user input, then prints the matrix in reverse. The cells in the matrix along the diagonal from top right to bottom left **must not** be moved, since this is the axis along which the matrix will be reversed, or flipped. A movie of what the matrix should look like is available [here](http://vanegas.cs.hartford.edu/uploads/videos/flipping-a-matrix-along-a-diagonal.mp4).

**Note**: The values used to populate the matrix are only to make each cell easy to read; Cell contents are arbitrary. What you place in each cell is agnostic as to how your solution works.

_Work **only** within the confines of the included scaffold._

---

## ❖・Rules・❖
Before you begin, **update Node, NPM, ESLint, and Stylelint**.

### General
* Do not alter the scaffold of this project.
* Do not add images to this project.

### HTML
* Place all your markup in `dev/html/index.html`.

### CSS
* Place all your styles in `dev/css/style.css`.
* No CSS libraries may be used.

### JavaScript
* Place all your JavaScript in `dev/js/app.js`.
* No JavaScript libraries may be used.
* No ESLint errors, except warnings for line lengths, are allowed.
* Use backticks exclusively for all variable interpolation and string manipulation. Should you need to defeat this rule, explain so in a comment.
* No function hoisting; only arrow functions. Should you need to defeat this rule, explain so in a comment.
* No variable hoisting; only `let` declarations. Should you need to defeat this rule, explain so in a comment.
* Use `window.prompt` to take input in from the user. Alternatively, you may use a form input box.
* Create a sentinel-based entry into this program that only allows integers greater than 1.
* Use `parseInt` and `parseFloat` to verify integer input.

### Git
* Do not alter any of the `.gitignore` files. If, however, you must, include a detailed summary explaining your reasoning.

### Task Running with Gulp
You must employ Gulp as the task runner with workflows for development and production

* Use *only* the following Gulp modules:
* `gulp`
* `gulp-htmlmin`
* `gulp-clean-css`
* `gulp-eslint`
* `gulp-babel`
* `gulp-uglify`
* `browser-sync`

And, of course, use `src`, `dest`, `series`, and `watch` as needed

Regarding tasks, implement the following:
```javascript
let compressHTML = () => {};
let compressCSS = () => {};
let validateJS = () => {};
let transpileJSForDev = () => {};
let transpileJSForProd = () => {};
let serve = () => {};
```

Furthermore, implement the following polling functions in the `serve` task:
```javascript
watch(`dev/html/*.html`, validateHTML).on(`change`, reload);
watch(`dev/css/*.css`, validateCSS).on(`change`, reload);
watch(`dev/js/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);
```

#### Development
* Ensure your editor is configured to use the enclosed `.editorconfig` file.
* Your JavaScript must validate via the `gulp-eslint` module using the included `.eslintrc.json` file.
* Your JavaScript must transpile using `gulp-babel`, and, possibly, `@babel/core` and `babel-present-env`.
* The development, or dev, track must lint/validate JavaScript each time you save `app.js` file.
* Additionally, the dev track must also refresh the browser when any of the files in the `dev` folder have changed.
* Running `gulp serve` must trigger the dev track.

#### Production
* The production, or prod, track must compress `index.html`, `style.css`, and `app.js`. *Do not lint them*, as they’ve already been linted in the development track.
* `gulp build` should load the entire production environment into a folder called `prod`, which must be fully self-sufficient and contain all the required files — compressed and linted — of the web page.

---

## ❖・Due・❖
Thursday, 6 October 2022, at 4:00 PM.

---

## ❖・Grading・❖
| Item                                                                   | Points |
|------------------------------------------------------------------------|--------|
| *Overall code quality*                                                 | `30`   |
| *Variables declared using only `let` (no variable hoisting)*           | `10`   |
| *Functions declared using only arrow functions (no function hoisting)* | `10`   |
| *Project implemented following assignment directions*                  | `10`   |
| *`.editorconfig` implemented*                                          | `10`   |
| *JavaScript, including `gulpfile.js`, is valid (via `gulp-eslint`)*    | `10`   |
| *Gulp development scaffold in place*                                   | `10`   |
| *Gulp production scaffold in place*                                    | `10`   |

---

## ❖・Submission・❖
You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.
