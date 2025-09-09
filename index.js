import express from "express";
import path from "path";
import 'module-alias/register.js';
import homeRoutes from "./routes/homeRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import khogaRoutes from "./routes/khogaRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

//định nghĩa __dirname khi sử dụng ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs"); //cấu hình ejs
app.set("views", path.join(__dirname, "views")); //định nghĩa đường dẫn views

app.use(express.static("public")); //định nghĩa thư mục tĩnh

//định nghĩa các tuyến đường
app.get("/", homeRoutes);
app.get("/project", projectRoutes);
app.get("/contact", contactRoutes);
app.get("/khogamixi", khogaRoutes);

app.listen(PORT, () => {
    console.log(`chạy tại cổng ${PORT}`);
}); //tao la cha may
