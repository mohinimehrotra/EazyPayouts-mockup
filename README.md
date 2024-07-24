# EazyPayouts-mockup
## Overview

EazyPayouts Mockup is a project consisting of a frontend application and a Node.js backend. The frontend is located in the `frontend/escrowstack1` directory, and the backend code is located in the `backend` directory.

## Setup Instructions

### Backend Setup

1. Navigate to the Backend Directory
   cd backend
2.Install Dependencies
  npm install
3.Run the Backend Server

node server.js
The backend server will run on http://localhost:3000.

### Frontend Setup
1.Navigate to the Frontend Directory
cd frontend/escrowstack1
2.Open index.html in a Browser
You can simply open index.html in a web browser to view the frontend application.

### API Endpoints
The backend provides the following API endpoints:

1.Get Companies

Endpoint: GET /api/companies
Description: Returns a list of companies.

2.Get Accounts for a Company

Endpoint: GET /api/companies/:companyId/accounts
Description: Returns a list of accounts for a specified company.

3.Get Account Details

Endpoint: GET /api/accounts/:accountId
Description: Returns details for a specified account including transactions.
