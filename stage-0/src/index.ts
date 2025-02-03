import config from "./utils/config";
import app from "./app";

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
