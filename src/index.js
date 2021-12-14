import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import createStore from "./helpers/createStore";
import renderer from "./helpers/renderer";
const app = express();

app.use(
  "/api",
  proxy("https://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  }),
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData && route.loadData(store);
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    console.log(context);

    if (context.notFound) {
      res.status(400);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("Listening to the port 3000");
});
