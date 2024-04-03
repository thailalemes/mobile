const { getDefaultConfig } = require("expo/metro-config")
const { withNativeWind } = require("nativeWind/metro")

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: "./src/styles/global.css" })