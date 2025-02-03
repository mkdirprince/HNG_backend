# **QuickInfoAPI**

QuickInfoAPI is a public API built for **Stage 0 of the HNG12 Backend Internship**, providing a registered email, current ISO 8601 datetime, and project GitHub link in JSON format.

---

## **Features**

- Lightweight REST API built with **Node.js** and **Express**.
- Returns essential data in JSON format.
- Deployed to a public endpoint.

---

## **API Endpoint**

- **GET `/`**

### **Sample JSON Response**

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T10:00:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Getting Started

### Prerequisites

- **Node.js** (v20+ recommended)
- **[pnpm](https://pnpm.io/installation)**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mdkirprince/quickinfoapi.git
   cd quickinfoapi
   ```
2. Install dependencies using pnpm:

```bash
   pnpm install
```

3. Start the development server:

```bash
   pnpm run dev
```

4. Access the API at http://localhost:3001/.

## Deployment

This API is deployed on [Fly.io](https://fly.io), a platform that provides fast and secure cloud hosting.

You can access the live API at the following URL:

- [Deployed API URL](https://quick-info-api.fly.dev/api/info)

Feel free to test the API using the deployed endpoint.

## **Looking for a Node.js Developer?**

Check out [HNG's Node.js developer hiring page](https://hng.tech/hire/nodejs-developers) for more information.
