import { type RouteConfig, index, route,layout } from "@react-router/dev/routes";

export default [
   route("/","./routes/home.tsx",[
      route("/:player","./routes/match.tsx")
   ])
] satisfies RouteConfig;
