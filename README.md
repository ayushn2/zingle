# Zingle - Real-Time Chat Application

Zingle is a modern chat application built with Next.js, TypeScript, Tailwind CSS, Supabase, and ShadCN. It supports real-time messaging, message editing, and deletion, with user authentication via email verification. The application is designed for seamless and engaging conversations.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **Real-Time Messaging:** Instant updates for smooth, uninterrupted conversations.
- **Email Authentication:** Users register and log in with email verification for added security.
- **Message Management:** Edit and delete messages within a real-time environment.
- **Responsive UI:** Built with Tailwind CSS for a mobile-friendly and accessible design.
- **Scalable Backend:** Powered by Supabase for authentication and real-time data management.

## Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS, ShadCN/UI
- **Backend:** Supabase (for Authentication and Real-Time Database)
- **Additional Libraries:** 
- **Supabase Client:** For handling database operations.
- **ShadCN/UI:** For customizable components.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- NPM or Yarn
- Supabase account and project setup
- Environment variables for Supabase

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/zingle.git
   cd zingle

2. **Install Dependencies:**
    ```bash
    npm install
    #or
    yarn install

3. **Set Up Supabase:**

- Go to Supabase and create a new project.
- Copy your API URL and Public Anon Key from Supabase Project Settings.
- Set up a messages table in Supabase with fields for message content, sender, and timestamps.

4. **Create Environment Variables:**

    ```bash
    NEXT_PUBLIC_SUPABASE_URL = <your-supabase-url>
    NEXT_PUBLIC_SUPABASE_ANON_KEY = <your-supabase-anon-key>
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = <your-cloud-name>


## Configuration

### Supabase Table Schema:

- id (UUID) - Primary key
- content (TEXT) - The message content
- sender_id (UUID) - Reference to the user
- created_at (TIMESTAMP) - Timestamp for message creation
- updated_at (TIMESTAMP) - Timestamp for message updates

### Note : Ensure you set up row-level security policies on your messages table to manage user access.

## Usage

1. Run the Development Server:
    ```bash
    npm run dev

Open http://localhost:3000 to view it in your browser.

2. User Authentication:
- Users must register with their email address.
- After verification, they can log in and access chat functionalities.

3. Real-Time Messaging:
- Send, edit, and delete messages.
- Messages are displayed instantly for all users in the chat.

## Contributing

Feel free to contribute to this project by creating issues, submitting feature requests, or making pull requests.

1.	Fork the project.
2.	Create your feature branch (git checkout -b feature/YourFeature).
3.	Commit your changes (git commit -m 'Add YourFeature').
4.	Push to the branch (git push origin feature/YourFeature).
5.	Open a pull request.

   
