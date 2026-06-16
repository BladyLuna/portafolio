#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const ignoredDirectories = new Set([".git", "node_modules", "dist", ".astro"]);

const suspiciousFilePatterns = [
  { name: "env file", pattern: /(^|[/\\])\.env(\.|$)/i },
  { name: "private key file", pattern: /(^|[/\\])id_(rsa|dsa|ecdsa|ed25519)$/i },
  { name: "key or certificate file", pattern: /\.(pem|key|p12|pfx)$/i },
];

const secretPatterns = [
  { name: "private key block", pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { name: "GitHub token", pattern: /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9_]{36,}\b/ },
  { name: "GitHub fine-grained token", pattern: /\bgithub_pat_[A-Za-z0-9_]{80,}\b/ },
  { name: "AWS access key id", pattern: /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/ },
  {
    name: "secret assignment",
    pattern:
      /\b(?:api[_-]?key|secret|token|password|passwd|pwd|aws_secret_access_key)\b\s*[:=]\s*["']?(?!changeme|example|placeholder|todo|xxx|null|undefined|true|false)[A-Za-z0-9_./+=:@$%!-]{16,}/i,
  },
];

function walk(dir) {
  const files = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;

    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
      continue;
    }

    if (entry.isFile()) files.push(full);
  }

  return files;
}

let found = false;
for (const file of walk(repoRoot)) {
  const relativePath = path.relative(repoRoot, file);

  for (const { name, pattern } of suspiciousFilePatterns) {
    if (pattern.test(relativePath)) {
      console.warn("Possible secret file:", relativePath, "pattern:", name);
      found = true;
    }
  }

  let text;
  try {
    text = fs.readFileSync(file, "utf8");
  } catch {
    continue;
  }

  for (const { name, pattern } of secretPatterns) {
    if (pattern.test(text)) {
      console.warn("Possible secret found in", relativePath, "pattern:", name);
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
