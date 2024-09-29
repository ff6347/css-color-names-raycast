import { colors } from "@ff6347/named-css-colors";
import fs from "fs";
import path from "path";

const html = colors
  .items.map(
    (element) =>
      `<div class="item" style="background-color: ${element.name}; width: 100px; height: 100px;"><span class="txt">${element.name}</span></div>`,
  )
  .join("\n");
const document = /*html */ `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<style>
			main{
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
				}
				.item{
					display: flex;
					justify-content: start;
					align-items: start;
					color: white;
					font-size: 10px;
				}
				.txt{background-color: black; padding: 5px;}
		</style>
	</head>
	<body>
		<main>${html}</main>
	</body>
	</html>
	`;
console.log(document);

fs.writeFileSync(path.resolve(__dirname, "../../assets/colors.html"), document);
