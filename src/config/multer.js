import multer from 'multer'
import { v4 } from 'uuid'
import { extname, resolve } from 'path'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'

export default {  
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'uploadcodeburger',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, callback) => {
            return callback(null, v4() + extname(file.originalname))
        },
    }),
}

// storage: multer.diskStorage({
//     destination: resolve(__dirname, '..', '..', 'uploads'),
//     filename: (request, file, callback) => {
//         return callback(null, v4() + extname(file.originalname))
//     },
// }), 