const path = require("path")
const fs = require("fs")
const merge = require("deepmerge")
const prettier = require("prettier")

const ALLOWED_FRAMEWORKS = ["shopify", "shopify_local", "bigcommerce"]
const FALLBACK_FRAMEWORK = "shopify"

function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name

  if (!framework) {
    throw new Error("The api framework is missing, please add a valid provider")
  }

  if (!ALLOWED_FRAMEWORKS.includes(framework)) {
    throw new Error(
      `The api framework: ${framework} cannot be found, please use one of ${ALLOWED_FRAMEWORKS.join(
        ","
      )}`
    )
  }

  if (framework === "shopify_local") {
    framework = FALLBACK_FRAMEWORK
  }

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ))
  const config = merge(defaultConfig, frameworkNextConfig)
  const tsConfigPath = path.join(process.cwd(), "tsconfig.json")
  const tsConfig = require(tsConfigPath)

  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`]
  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`]

  fs.writeFileSync(
    tsConfigPath,
    prettier.format(JSON.stringify(tsConfig), {
      parser: "json",
    })
  )
  return config
}

module.exports = { withFrameworkConfig }
