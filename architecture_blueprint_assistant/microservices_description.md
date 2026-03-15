# Microservices Architecture

- **Frontend App**: User interface where users log in, record expenses and income, view dashboards, and manage budgets.  
- **API Gateway**: Single entry point that routes client requests to the correct backend service and simplifies communication between frontend and services.  
- **Auth Service**: Manages user registration, login, authentication, and access control.  
- **Expense Service**: Handles creation, update, deletion, and retrieval of expense and income records.  
- **Budget Service**: Manages user budgets, spending limits, and budget progress calculations.  
- **AI Insights Service**: Generates smart financial insights and recommendations based on user spending patterns.  
- **Subscription Service**: Detects recurring transactions and tracks subscriptions or repeated payments.  
- **Notification Service**: Sends alerts and reminders for budget limits, unusual spending, and recurring payments.  
- **Reporting Service**: Creates summaries, charts, and downloadable reports for financial analysis.  
- **Analytics Service**: Collects usage data and financial metrics to support dashboards and system monitoring.  
- **Database per Service**: Each service stores its own data independently to improve modularity, scalability, and service isolation.  