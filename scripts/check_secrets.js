#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const patterns = [
  /API[_-]?KEY|SECRET|TOKEN|PASSWORD|AWS_ACCESS_KEY_ID|AWS_SECRET_ACCESS_KEY/i,
  /-----BEGIN .*PRIVATE KEY-----/i,
];

function walk(dir) {
  const files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) continue;
    files.push(full);
  }
  return files;
}

let found = false;
for (const file of walk(repoRoot)) {
  if (/node_modules|dist|\.git/.test(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  for (const p of patterns) {
    if (p.test(text)) {
      console.warn("Possible secret found in", file, "pattern:", p);
      found = true;
    }
  }
}

if (found) {
  console.error(
    "\nSecret scan: potential secrets detected. Review files before push.",
  );
  process.exitCode = 2;
} else {
  console.log("Secret scan: no obvious secrets found.");
}
