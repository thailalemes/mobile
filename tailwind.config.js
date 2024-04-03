import { colors } from "./src/styles/colors"
import { fontFamily } from "./src/styles/fontFamily"


module.exports = {
     content: ["./src/**/*.{ts,tsx}"],
     prests: [require("nativewind/preset")],
     theme: {
        extend: {
            colors,
            fontFamily
        },
      },
      plugins: [],
    }