import { existsSync } from "node:fs"
import { spawn, spawnSync } from "node:child_process"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const previewRoot = resolve(projectRoot, "preview")

const commandExists = (command) => {
  const result = spawnSync(command, ["--version"], { stdio: "ignore" })
  return result.status === 0
}

const run = (command, args, cwd) => {
  const child = spawn(command, args, { cwd, stdio: "inherit", shell: false })

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal)
      return
    }

    process.exit(code ?? 1)
  })
}

if (commandExists("php")) {
  run("vp", ["dev"], projectRoot)
} else {
  const viteBinary = resolve(previewRoot, "node_modules/.bin/vite")

  if (!existsSync(viteBinary)) {
    const install = spawnSync("npm", ["install", "--prefix", previewRoot], {
      cwd: projectRoot,
      stdio: "inherit",
      shell: false,
    })

    if (install.status !== 0) {
      process.exit(install.status ?? 1)
    }
  }

  run("npm", ["run", "dev", "--prefix", previewRoot, "--", "--host", "0.0.0.0"], projectRoot)
}
