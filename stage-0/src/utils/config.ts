import "dotenv/config";

const PORT = Number(process.env.PORT);

console.log(PORT);

export default {
  PORT,
};
