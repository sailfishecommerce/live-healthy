import axios from "axios";
import sharp from "sharp";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";

async function formatProductImage(url: string, name: string, index: number) {
  return await axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then((response) =>
      sharp(response.data)
        .png()
        .toBuffer({ resolveWithObject: true })
        .then((response: any) => {
          console.log("sharpImageResponse", response);
          return imagemin(["images/*.{"], {
            destination: "build/images",
            plugins: [
              imageminJpegtran(),
              imageminPngquant({
                quality: [0.6, 0.8],
              }),
            ],
          });
        })
        .then(({ data, info }: any) => {
          console.log("data image", data);
          let imageData: any = {};
          imageData.file = {
            data: {
              $binary: data.toString("base64"),
              $type: "00",
            },
            filename: `${name.replace(/ /g, "").toLowerCase()}-${index}`,
            content_type: "image/png",
            width: info.width,
            height: info.height,
          };
          return imageData;
        })
        .catch((error: any) => console.log("error", error))
    );
}

const formattedUrlArray = (formattedUrl: string[], record: any) => {
  const urlArray = formattedUrl.map((imageUrl: string, index: number) =>
    formatProductImage(imageUrl, record.fields["Title"], index)
  );
  return Promise.all(urlArray);
};

export default formattedUrlArray;
