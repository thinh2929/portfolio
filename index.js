import express from "express";
import path from "path";
import 'module-alias/register.js';
import homeRoutes from "./routes/homeRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import khogaRoutes from "./routes/khogaRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

//định nghĩa __dirname khi sử dụng ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs"); //cấu hình ejs
app.set("views", path.join(__dirname, "views")); //định nghĩa đường dẫn views


//định nghĩa các tuyến đường
app.get("/", homeRoutes);
app.get("/project", projectRoutes);
app.get("/contact", contactRoutes);
app.get("/khoga", khogaRoutes);
app.get("/login", loginRoutes);

app.listen(PORT, () => {
    console.log(`chạy tại cổng ${PORT}`);
});
