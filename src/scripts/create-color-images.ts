
import { colors } from '../colors';
import { exec } from 'child_process';
colors().items.forEach(element => {
  exec(`magick -size 256x256 xc:${element.arg} ../../assets/${element.arg}.png`, (error, stdout, stderr) => {
    if (error) {
			console.error(error);
			return
    }
		console.log(stdout);
		console.error(stderr);
  });
});
// console.log(colors);
