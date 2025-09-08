import express from "express";
import path from "path";
import 'module-alias/register.js';
import homeRoutes from "./routes/homeRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

//routes
// Define a simple home route as a placeholder
app.get("/", homeRoutes);
app.get("/contact", contactRoutes);

app.listen(PORT, () => {
    console.log(`chạy tại cổng ${PORT}`);
});