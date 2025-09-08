import express from "express";
import path from "path";
import 'module-alias/register.js';
import homeRoutes from "./routes/homeRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import khogaRoutes from "./routes/khogaRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

//routes
// Define a simple home route as a placeholder
app.get("/", homeRoutes);
app.get("/contact", contactRoutes);
app.get("/khogamixi", khogaRoutes);

app.listen(PORT, () => {
    console.log(`chạy tại cổng ${PORT}`);
}); //tao la cha may
