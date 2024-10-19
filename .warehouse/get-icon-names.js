const fs = require("fs");
const path = require("path");

const readFileNames = (dirPath) =>
  new Promise((resolve, reject) => {
    fs.readdir(path.resolve(__dirname, dirPath), (error, files) => {
      if (error) {
        return reject(error);
      }

      resolve(
        files
          .filter((file) => file.endsWith(".tsx"))
          .map((file) => {
            const iconName = file.split(".")[0];

            return {
              componentName: `${iconName}Icon`,
              displayName: iconName
                .replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`)
                .replace(/^-/, ""),
            };
          })
      );
    });
  });

const writeFilenames = (filePath, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path.resolve(__dirname, filePath), content, (err) => {
      if (err) {
        return reject("Error writing to file: " + err);
      }
      resolve("File written successfully!");
    });
  });

(async () => {
  const result = await readFileNames("../src/components/Icon");
  await writeFilenames("icons.json", JSON.stringify(result));
})();
