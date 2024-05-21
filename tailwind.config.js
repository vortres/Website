import { withUt } from "uploadthing/tw";

export default withUt({
  theme: {
    extend: {
      colors: {
        vblue: "#3D6DDB",
        vpurple: "#AD03FC",
        vbg: "#000011",
      },
    },
  },
  content: ["./src/**/*.{ts,tsx,mdx}"],
});
