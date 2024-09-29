import { colors } from "@ff6347/named-css-colors";
import { exec } from "child_process";
colors.items.forEach((element) => {
  exec(`magick -size 256x256 xc:${element.name} ../../assets/${element.name}.png`, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(stdout);
    console.error(stderr);
  });
});
// console.log(colors);
