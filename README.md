# Angular Project Template

This project serves as a template for building robust Angular applications. It incorporates modern Angular development features such as standalone APIs, Angular Material, and various tools for enhancing code quality, consistency, and testing.

## Features

- **Standalone APIs**: Utilize Angular's standalone components and APIs for modular and scalable application development.
- **Angular Material**: Preconfigured with Angular Material for a sleek and responsive UI.
- **Husky**: Automate Git hooks for ensuring code quality and consistent commits.
- **ESLint**: Enforces coding standards and prevents common pitfalls.
- **Prettier**: Automatically formats code to maintain a clean and consistent style.
- **Commitizen**: Standardizes commit messages for better collaboration and readability.
- **Cypress**: End-to-end testing for verifying user workflows and application behavior.
- **Jasmine & Karma**: Unit testing framework and test runner for comprehensive code coverage.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v22 or later recommended)
- [Angular CLI](https://angular.io/cli) (v19)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

    ```
    npm install
    ```

3. Set up Husky hooks:

    ```
    npx husky install
    ```

### Running the Project

1. Development Server:

    ```
    ng serve
    ```

    Open `http://localhost:4200`

2. Build:

    ```
    ng build
    ```

    Compiles the project for production.

3. Unit Tests:

    ```
    ng test
    ```

4. E2E Tests:

    ```
    npx cypress open
    ```

### Code Quality Tools

1. Linting:

    Run ESLint to check for linting errors:
    ```
    npm run lint
    ```

2. Formatting:

    Format code using Prettier:
    ```
    npm run prettier
    ```

3. Commit Messages:

    Use Commitizen for crafting commit messages:
    ```
    npm run commit
    ```

### Project Structure

```
src/
├── app/
│   ├── core/          # Core (services, interceptors, etc.)
│   ├── shared/        # Shared (common components, directives, pipes)
│   ├── features/      # Features (shopping-cart, user-profile, etc.)
│   ├── app.component.ts
│   └── app.config.ts
├── assets/            # Static assets
├── environments/      # Environment configurations
```

### Renaming Project

Use any of this scripts ([ngx-rename](https://github.com/khumozin/ngx-rename)), based on your OS:

### Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (git checkout -b feature-name).
3. Commit changes following the commit message guidelines.
4. Push to the branch (git push origin feature-name).
5. Open a Pull Request.

### License

This project is licensed under the `MIT License`. See the LICENSE file for details.
