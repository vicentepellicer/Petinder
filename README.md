# Petinder - Landing Page / Web app

This is the frontend repo for the Petinder web app. Please, read carefully the documentation to understand the project's workflow, architecture and how to contribute.

## Getting Started

After cloning the repo, you need to install the project's dependencies. To do so, run the following command:

```bash
npm install # or npm i
```

After installing the dependencies, you can start the project by running the following command. It should start the development server in the `localhost:3000`:

```bash
npm run dev
```

Take a look at the `package.json` file to see all the available scripts. These are the most important ones:

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `start`: Starts the production server.
- `test`: Runs the tests. Add the `--watch` flag to run the tests in watch mode or simply run `npm run test:w`.
- `lint`: Lints the project.
- `format`: Formats the project.

## Internationalization

This project uses [next-intl](https://next-intl-docs.vercel.app/) to handle the internationalization. The translations are stored in the `messages` folder. The `en.json` file contains the English translations and the `es.json` file contains the Spanish translations. To add a new language, you should create a new file with the language code (e.g. `fr.json` for French) and add the translations there.

Please, if your PR contains new text, make sure to add the translations to the `en.json` and `es.json` files.

## Project Structure

This project uses the **Modular Design Pattern** to organize the code. This means that the code is divided into modules, each one with its own folder. Inside the `src` folder, the main directories are the following:

- `app`: Contains the pages of the app. If you are not familiar with the `app` routing in Next.js, please read the [documentation](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts).
- `components`: Contains the reusable components divided into folders.
- `layouts`: Contains the layouts of the app. A layout is a component that wraps the pages of the app. This is useful to have a common structure for some pages.
- `store`: Contains the stores of the app. Each store is made using [Zustand](https://zustand-demo.pmnd.rs), a simple and fast state management library.

## Contributing

The current methodology for contributing is [GitFlow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow). This means that you should create a new branch for each feature, fix or improvement you want to make. After finishing your work, you should create a pull request to the `develop` branch. The `main` branch is protected and only the CI/CD pipeline can merge into it.

Please, make sure to follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification when writing your commit messages. This is important to generate the changelog and to have a clear history of the project.

## Package Manager

This project uses `npm` as the standard package manager. All team members and contributors should use `npm` for installing dependencies and running scripts to ensure consistency across the development environment.

#### Important Notes:

- **Do not use `yarn` or `bun`**: Please avoid using other package managers like `yarn` or `bun` to install dependencies. This helps prevent issues with different lock files (`yarn.lock`, `bun.lockb`) and ensures that everyone is working with the same dependency versions.
- **Lock File**: The `package-lock.json` file is used to lock dependencies. Ensure that this file is committed and kept up to date.
