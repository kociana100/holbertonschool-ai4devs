# Microservices Architecture

- **API Gateway**: Acts as the single entry point for client requests. It routes requests to the correct service, such as sending login requests to the Auth Service or expense operations to the Transaction Service.

- **Auth Service**: Manages user registration, login, authentication, and session validation. It ensures only authorized users can access financial data and other platform features.

- **Transaction Service**: Handles adding, editing, deleting, and retrieving income and expense records. It is the main service responsible for storing financial transactions and sharing transaction data with the Budget, Insights, and Subscription services.

- **Budget Service**: Manages user budgets, category spending limits, and budget progress calculations. It uses transaction data from the Transaction Service to determine whether a user is close to or has exceeded a budget.

- **Insights Service**: Analyzes transaction patterns and generates smart financial insights, such as unusual spending increases or saving opportunities. It depends on financial data from the Transaction Service to produce personalized recommendations.

- **Subscription Service**: Detects recurring transactions and identifies likely subscriptions such as Netflix, Spotify, or gym payments. It uses transaction history from the Transaction Service and can trigger reminders through the Notification Service.

- **Notification Service**: Sends alerts and reminders to users, such as budget limit warnings, recurring subscription notifications, or unusual spending alerts. It receives events from the Budget Service and Subscription Service.

- **Reporting Service**: Generates financial summaries, visual dashboard data, and downloadable reports. It gathers processed information from other services so users can view monthly spending, category breakdowns, and savings reports.
