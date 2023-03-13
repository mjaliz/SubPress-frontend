# The LangLand Project

## Built by ReactJS, Node and Express<br/><br/>

# tailwind installation

- # 1.Install tailwind css
- Install tailwindcss via npm, and create your tailwind.config.js file<br/><br/>
  - `npm install -D tailwindcss`
  - `npx tailwindcss init`<br/><br/>
- # 2.Configure your template paths
- ## Add the paths to all of your template files in your tailwind.config.js file.<br/><br/>
  ```
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```

<br/><br/>

- # 3.Add the Tailwind directives to your CSS
- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.<br/><br/>
  - ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

<br/><br/>

- # 4.Start your build process
- Run your build process with npm run start.<br/><br/>
  - ```
    npm run start
    ```

<br/><br/>

- # 5.Start using Tailwind in your project
- Start using Tailwind’s utility classes to style your content.<br/><br/>

  - ```
    export default function App() {
      return (
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      )
    }
    ```

<br/><br/>
