# **NumberClassifyAPI**

NumberClassifyAPI is a public API that classifies numbers based on several mathematical properties and provides fun facts about them. It checks if a number is prime, perfect, armstrong, even, or odd, calculates the sum of its digits, and fetches a related fun fact.

---

## **Features**

- Lightweight REST API built with **Node.js** and **Express**.
- Classifies numbers based on mathematical properties (prime, perfect, armstrong, even/odd).
- Calculates the sum of digits for the given number.
- Fetches a fun fact about the number from the Numbers API.
- Returns data in JSON format.
- Includes error handling for invalid or missing parameters.

---

## **API Endpoint**

- **GET `/api/classify-number`**

### Query Parameters

- **`number`** (required): A number to classify. This can be any valid integer.

### **Sample JSON Response**

For a valid request with the query parameter `?number=5`:

```json
{
  "number": 5,
  "is_prime": true,
  "is_perfect": false,
  "properties": {
    "is_armstrong": false,
    "is_even": false
  },
  "digit_sum": 5,
  "fun_fact": "5 is the third prime number."
}
```

If the number query parameter is missing or invalid, the API will return an error response:

If the number query parameter is missing or invalid, the API will return an error response:
{
"number": "alphabet",
"error": true
}

If an unknown endpoint is accessed, the API will return a 404 error:

{
"error": "unknown endpoint"
}
For unexpected server errors:

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- pnpm

### Installation

- Clone the repository:

```bash
git clone https://github.com/mkdirprince/stage-1.git
```

- navigate to stage-1 and install dependencies using pnpm:

```bash
cd  stage-1
pnpm install
```

- Run the test files to chekc if everything works

```bash
pnpm test
```

- Start the development server:

```bash
pnpm run dev
```

Access the API at http://localhost:3001/api/classify-number.

## Deployment

This API is deployed on [Fly.io](https://fly.io), a platform that provides fast and secure cloud hosting.

You can access the live API at the following URL:

[Deployed API URL]()

Feel free to test the API using the deployed endpoint.
