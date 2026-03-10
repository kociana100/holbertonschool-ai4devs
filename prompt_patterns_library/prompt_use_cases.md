<!-- # Prompt Use Cases

## Code Quality

### Use Case – Refactoring
- **Goal**: Improve readability, maintainability, and performance.
- **Input**: Source function or class in [LANGUAGE].
- **Output**: Refactored code + explanation of improvements.

### Use Case – Style Enforcement
- **Goal**: Enforce consistent naming, formatting, and coding conventions.
- **Input**: Code block.
- **Output**: Rewritten code with consistent style.

### Use Case – Code Review Assistance
- **Goal**: Identify bad practices, duplicated logic, or unclear structures.
- **Input**: Source file or snippet.
- **Output**: Review comments + suggested improvements.

### Use Case – Performance Optimization
- **Goal**: Improve execution speed and reduce unnecessary resource usage.
- **Input**: Existing code that performs slowly or inefficiently.
- **Output**: Optimized code with explanation of performance improvements.

## Debugging

### Use Case – Error Explanation
- **Goal**: Understand what a compiler, runtime, or logic error means.
- **Input**: Error message + related code.
- **Output**: Cause of the error + possible fixes.

### Use Case – Bug Fix Suggestions
- **Goal**: Find and correct faulty logic in code.
- **Input**: Buggy code snippet + expected behavior.
- **Output**: Corrected code + explanation of the fix.

### Use Case – Step-by-Step Trace
- **Goal**: Analyze how the program behaves line by line.
- **Input**: Function or algorithm.
- **Output**: Execution walkthrough with variable changes.

### Use Case – Log Analysis
- **Goal**: Identify issues in application behavior using log files.
- **Input**: Application logs or debugging output.
- **Output**: Explanation of possible causes of the issue and suggestions for fixes.

## Documentation

### Use Case – Code Comment Generation
- **Goal**: Add clear explanations inside the code.
- **Input**: Raw code without comments.
- **Output**: Commented version of the code.

### Use Case – Function Documentation
- **Goal**: Describe purpose, parameters, and return values.
- **Input**: Function or method definition.
- **Output**: Docstring or structured documentation.

### Use Case – README Writing
- **Goal**: Explain project setup, usage, and purpose.
- **Input**: Project summary + files/features.
- **Output**: README section or full README draft.

### Use Case – API Documentation Generation
- **Goal**: Generate structured documentation for APIs or endpoints.
- **Input**: API routes, functions, or service descriptions.
- **Output**: Organized API documentation describing endpoints, parameters, and responses.

## Testing

### Use Case – Unit Test Generation
- **Goal**: Create tests for functions and modules.
- **Input**: Source code or function description.
- **Output**: Unit test cases in [TEST FRAMEWORK].

### Use Case – Test Case Design
- **Goal**: Identify normal, edge, and invalid input scenarios.
- **Input**: Feature description or function behavior.
- **Output**: Structured list of test cases.

### Use Case – Test Failure Analysis
- **Goal**: Explain why a test failed and how to fix it.
- **Input**: Failed test output + source code.
- **Output**: Root cause analysis + corrected code or test.

### Use Case – Edge Case Detection
- **Goal**: Identify unusual or boundary inputs that could break the program.
- **Input**: Function or system behavior description.
- **Output**: List of edge cases and suggested tests for those scenarios.

## Productivity & Automation

### Use Case – Boilerplate Generation
- **Goal**: Quickly create repetitive code structures.
- **Input**: Framework, language, and component type.
- **Output**: Starter template code.

### Use Case – Code Translation
- **Goal**: Convert code from one language to another.
- **Input**: Source code in [LANGUAGE A].
- **Output**: Equivalent code in [LANGUAGE B].

### Use Case – Query/Script Generation
- **Goal**: Quickly generate small reusable pieces of code for common tasks
- **Input**: Description of the programming task (e.g., file reading, API request, data parsing)
- **Output**: Ready-to-use code snippet in the requested programming language

### Use Case – Code Template Generation
- **Goal**: Automatically generate templates for common project structures.
- **Input**: Framework or application type (e.g., REST API, CLI tool, web app).
- **Output**: Predefined project template with folder structure and starter code.
 -->

# Prompt Use Cases

## Code Quality
- **Refactoring**
  - **Goal**: Improve readability, maintainability, and performance.
  - **Input**: Source function or class in [LANGUAGE].
  - **Output**: Refactored code with explanation of improvements.
  - **Why Useful**: Helps improve messy or repetitive code in development workflows.

- **Style Enforcement**
  - **Goal**: Enforce consistent naming, formatting, and coding conventions.
  - **Input**: Code block.
  - **Output**: Rewritten code with consistent style.
  - **Why Useful**: Useful for team projects and coding standards.

- **Code Review Assistance**
  - **Goal**: Identify bad practices, duplicated logic, or unclear structures.
  - **Input**: Source file or snippet.
  - **Output**: Review comments with suggested improvements.
  - **Why Useful**: Helps detect quality issues before submission or deployment.

- **Performance Optimization**
  - **Goal**: Improve execution speed and reduce unnecessary resource usage.
  - **Input**: Existing code that performs slowly or inefficiently.
  - **Output**: Optimized code with explanation of improvements.
  - **Why Useful**: Useful when code works correctly but needs better efficiency.

## Debugging
- **Error Explanation**
  - **Goal**: Understand compiler, runtime, or logic errors.
  - **Input**: Error message and related code.
  - **Output**: Cause of the error and possible fixes.
  - **Why Useful**: Helps developers understand unfamiliar errors quickly.

- **Bug Fix Suggestions**
  - **Goal**: Find and correct faulty logic in code.
  - **Input**: Buggy code snippet and expected behavior.
  - **Output**: Corrected code with explanation of the fix.
  - **Why Useful**: Useful when code runs incorrectly and the problem is hard to locate.

- **Step-by-Step Trace**
  - **Goal**: Analyze program behavior line by line.
  - **Input**: Function or algorithm.
  - **Output**: Execution walkthrough with variable changes.
  - **Why Useful**: Helps understand logic flow in loops, conditions, and recursion.

- **Log Analysis**
  - **Goal**: Identify issues using application logs or debug output.
  - **Input**: Log file or debugging output.
  - **Output**: Explanation of likely causes and suggested fixes.
  - **Why Useful**: Useful when errors are not obvious directly from the code.

## Documentation
- **Code Comment Generation**
  - **Goal**: Add clear explanations inside the code.
  - **Input**: Raw code without comments.
  - **Output**: Commented version of the code.
  - **Why Useful**: Makes code easier to understand and maintain.

- **Function Documentation**
  - **Goal**: Describe purpose, parameters, and return values.
  - **Input**: Function or method definition.
  - **Output**: Docstring or structured documentation.
  - **Why Useful**: Useful for reusable functions, libraries, and APIs.

- **README Writing**
  - **Goal**: Explain project setup, usage, and purpose.
  - **Input**: Project summary and features.
  - **Output**: README section or full README draft.
  - **Why Useful**: Helps others understand how to install and use the project.

- **API Documentation Generation**
  - **Goal**: Generate structured documentation for APIs or endpoints.
  - **Input**: API routes, functions, or service descriptions.
  - **Output**: Organized API documentation with parameters and responses.
  - **Why Useful**: Useful in backend and web development projects.

## Testing
- **Unit Test Generation**
  - **Goal**: Create tests for functions and modules.
  - **Input**: Source code or function description.
  - **Output**: Unit test cases in [TEST FRAMEWORK].
  - **Why Useful**: Helps verify that code behaves correctly.

- **Test Case Design**
  - **Goal**: Identify normal, edge, and invalid input scenarios.
  - **Input**: Feature description or function behavior.
  - **Output**: Structured list of test cases.
  - **Why Useful**: Useful for planning software validation.

- **Test Failure Analysis**
  - **Goal**: Explain why a test failed and how to fix it.
  - **Input**: Failed test output and source code.
  - **Output**: Root cause analysis and corrected code or test.
  - **Why Useful**: Helps developers interpret failed automated tests.

- **Edge Case Detection**
  - **Goal**: Identify unusual or boundary inputs that may break the program.
  - **Input**: Function or system behavior description.
  - **Output**: List of edge cases and suggested tests.
  - **Why Useful**: Improves robustness and reliability.

## Productivity and Automation
- **Boilerplate Generation**
  - **Goal**: Quickly create repetitive code structures.
  - **Input**: Framework, language, and component type.
  - **Output**: Starter template code.
  - **Why Useful**: Saves time during project setup.

- **Code Translation**
  - **Goal**: Convert code from one language to another.
  - **Input**: Source code in [LANGUAGE A].
  - **Output**: Equivalent code in [LANGUAGE B].
  - **Why Useful**: Useful for migration and learning purposes.

- **Query or Script Generation**
  - **Goal**: Generate reusable code for common programming tasks.
  - **Input**: Description of the programming task.
  - **Output**: Ready-to-use code snippet, query, or script.
  - **Why Useful**: Speeds up common development tasks.

- **Code Template Generation**
  - **Goal**: Automatically generate templates for common project structures.
  - **Input**: Framework or application type.
  - **Output**: Predefined project template with starter files.
  - **Why Useful**: Useful for quickly starting new projects.