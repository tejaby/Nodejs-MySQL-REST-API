import express from "express";
import indexRoutes from "./routers/index.routes.js";
import empleadoRoutes from "./routers/empleado.routes.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use("/api", empleadoRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
