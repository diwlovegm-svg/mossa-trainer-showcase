const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

const root = path.resolve(process.argv[2] || process.cwd());
const port = Number(process.argv[3] || 8080);
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const server = http.createServer((request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const relativePath = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "");
  const filePath = path.resolve(root, relativePath);

  if (!filePath.startsWith(root + path.sep)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    const target = !statError && stats.isDirectory() ? path.join(filePath, "index.html") : filePath;
    fs.readFile(target, (readError, data) => {
      if (readError) {
        response.writeHead(404).end("Not found");
        return;
      }

      response.writeHead(200, {
        "Content-Type": mimeTypes[path.extname(target).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "no-store",
      });
      response.end(data);
    });
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log("");
  console.log("MOSSA Mobile Preview is running.");
  console.log("Keep this window open while using the website on your phone.");
  console.log("");
  console.log(`This computer: http://127.0.0.1:${port}`);

  Object.values(os.networkInterfaces())
    .flat()
    .filter((address) => address && address.family === "IPv4" && !address.internal)
    .forEach((address) => console.log(`Mobile / LAN:  http://${address.address}:${port}`));

  console.log("");
  console.log("Press Ctrl+C or close this window to stop.");
});

server.on("error", (error) => {
  console.error("");
  console.error(`Unable to start server: ${error.message}`);
  process.exitCode = 1;
});
