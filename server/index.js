import express from 'express';
const fs = require('fs');
import cors from 'cors';

const app = express();
const port = 3000;

// Allow all origins - for development purposes only
// In production, replace '*' with your actual origin, e.g., 'http://localhost:5173'
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

router.get('/contents', (req, res) => {
  const directoryPath = req.query.path || '/Users/siriusbit/Desktop/GoogleDrive';
  listFoldersAndFilesRecursively(directoryPath, (error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json(data);
    }
  });
});


function listFoldersAndFilesRecursively(directoryPath, callback) {
  fs.readdir(directoryPath, (err, items) => {
    if (err) {
      console.error(err);
      callback({ error: 'Unable to read folder contents' }, null);
    } else {
      const data = {};

      items.forEach((item) => {
        const itemPath = path.join(directoryPath, item);

        const stats = fs.statSync(itemPath);

        if (stats.isDirectory()) {
          data[item] = {
            name: item,
            files: listFilesInFolder(itemPath),
          };
        } else {
          if (!data[directoryPath]) {
            data[directoryPath] = {
              name: path.basename(directoryPath),
              files: [],
            };
          }
          data[directoryPath].files.push({
            filePath: path.join(directoryPath, item),
            name: item,
          });
        }
      });

      callback(null, data);
    }
  });
}


app.get('/folders', (req, res) => {
  // Read the files in the specified folder
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to read folder contents' });
    } else {
      const fileData = files.map((file) => {
        const filePath = path.join(folderPath, file);
        return { name: file, path: filePath };
      });
      res.json(fileData);
    }
  });
});

app.get('/files', (req, res) => {
  const mainFolter = req.query.path || '/Users/siriusbit/Desktop/GoogleDrive'
  fs.readdir(mainFolter, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to read folder contents' });
    } else {
      const fileData = files.map((file) => {
        const filePath = path.join(mainFolter, file);
        return { name: file, path: filePath };
      });
      res.json(fileData);
    }
  });
});



app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
