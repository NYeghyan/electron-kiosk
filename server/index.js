import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';


const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));


const router = express.Router();



// const folderPath = '/Users/siriusbit/Desktop/RedTop';

// app.get('/folders', (req, res) => {
//     fs.readdir(folderPath, (err, files) => {
//         if (err) {
//             console.error(err);
//             res.status(500).json({ error: 'Unable to read folder contents' });
//         } else {
//             const fileData = files.map((file) => {
//                 const filePath = path.join(folderPath, file);
//                 return { name: file, path: filePath };
//             });
//             res.json(fileData);
//         }
//     });
// });

// app.get('/files', (req, res) => {
//     const mainFolder = req.query.path || '/Users/siriusbit/Desktop/GoogleDrive';
//     fs.readdir(mainFolder, (err, files) => {
//         if (err) {
//             console.error(err);
//             res.status(500).json({ error: 'Unable to read folder contents' });
//         } else {
//             const fileData = files.map((file) => {
//                 const filePath = path.join(mainFolder, file);
//                 return { name: file, path: filePath };
//             });
//             res.json(fileData);
//         }
//     });
// });

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

// Function to list files in a folder
function listFilesInFolder(folderPath) {
    const files = fs.readdirSync(folderPath);
    return files.map((file) => {
        return {
            filePath: path.join(folderPath, file),
            name: file,
        };
    });
}

// Route to list folders and files
app.get('/contents', (req, res) => {
    const directoryPath = req.query.path || '/Users/siriusbit/Desktop/GoogleDrive';
    listFoldersAndFilesRecursively(directoryPath, (error, data) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(data);
        }
    });
});

app.get('/download', (req, res) => {
    const file = req.query.path;

    res.setHeader('Content-Disposition', `attachment; filename="${path.basename(file)}"`);
    res.setHeader('Content-Type', 'application/pdf');

    res.sendFile(file);
});



app.use((req, res, next) => {
  res.status(404).send('<h1>Page not Found</h1>')
});

app.listen(3000);
