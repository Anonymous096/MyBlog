# Mind Canvas

Mind Canvas is a full stack blog application inspired by Medium.com. This project leverages the power of Next.js for the frontend, MongoDB for the database, Prisma Studio for database management, and Firebase for authentication. It also features a day and night mode for improved user experience.

## Features

- **User Authentication**: Secure authentication using OAuth and Firebase.
- **Rich Text Editor**: Create and edit blog posts with a user-friendly editor.
- **Responsive Design**: Mobile-first design, ensuring usability across all devices.
- **Day and Night Mode**: Toggle between day and night modes for a comfortable reading experience.
- **User Profiles**: Each user has a profile page displaying their posts and bio.
- **Post Management**: Create, edit, delete, and view blog posts.
- **Comments System**: Engage with readers through comments on posts.

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ORM**: Prisma
- **Authentication**: Firebase, OAuth
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- Node.js (v14.x or later)
- npm (v6.x or later) or Yarn (v1.x or later)
- MongoDB (local or cloud instance)
- Firebase account for authentication setup

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/MyBlog.git
    cd MyBlog
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. **Set up environment variables**:

    Create a `.env.local` file in the root directory and add the following environment variables:

    ```env
    GOOGLE_ID=your_google_id
    GOOGLE_SECRET=your_google_secret_key
    NEXTAUTH_URL=your_nextAuth_url_localhost:3000
    NEXTAUTH_SECRET=your_nextAuth_secret_key
    DATABASE_URL=your_mongodb_key
    FIREBASE=your_firebase_api_key
    ```

4. **Run the development server**:

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prisma Setup

1. **Initialize Prisma**:

    ```bash
    npx prisma init
    ```

2. **Migrate the database**:

    ```bash
    npx prisma migrate dev --name init
    ```

3. **Open Prisma Studio**:

    ```bash
    npx prisma studio
    ```

## Usage

- **Authentication**: Sign up or log in using OAuth via Firebase.
- **Create a Post**: Navigate to the "New Post" page to create a blog post.
- **Manage Posts**: Edit or delete your posts from your profile page.
- **Toggle Day/Night Mode**: Use the toggle switch to switch between day and night modes.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements

- Inspired by [Medium.com](https://medium.com)
- Thanks to the developers of Next.js, MongoDB, Prisma, and Firebase for their awesome tools.

## Contact

For any questions or feedback, please reach out at [your-email@example.com].

---

Happy coding!
