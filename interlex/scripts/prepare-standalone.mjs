import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const standaloneDir = path.join(rootDir, ".next", "standalone");
const standaloneNextDir = path.join(standaloneDir, ".next");

function copyIntoStandalone(sourceRelativePath, destinationRelativePath) {
  const sourcePath = path.join(rootDir, sourceRelativePath);
  const destinationPath = path.join(standaloneDir, destinationRelativePath);

  if (!existsSync(sourcePath)) return;

  rmSync(destinationPath, { recursive: true, force: true });
  mkdirSync(path.dirname(destinationPath), { recursive: true });
  cpSync(sourcePath, destinationPath, { recursive: true });
}

if (existsSync(standaloneDir)) {
  mkdirSync(standaloneNextDir, { recursive: true });
  copyIntoStandalone("public", "public");
  copyIntoStandalone(path.join(".next", "static"), path.join(".next", "static"));
}
