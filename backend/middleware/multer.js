import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

// file name should be storage

const upload = multer({ storage });
export default upload;
