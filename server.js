const { createServer } = require("http");

const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3005;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
      const pathname = url.pathname;
      const query = {};
      for (const [key, val] of url.searchParams.entries()) {
        if (query[key] !== undefined) {
          if (Array.isArray(query[key])) {
            query[key].push(val);
          } else {
            query[key] = [query[key], val];
          }
        } else {
          query[key] = val;
        }
      }
      const parsedUrl = { pathname, query, path: req.url, href: req.url };

      // Custom routes (optional)
      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Server error:", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
