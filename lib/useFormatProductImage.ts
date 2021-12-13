import axios from "axios";
import sharp from "sharp";

async function formatProductImage(url: string, name: string, index: number) {
  return await axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then((response) =>
      sharp(response.data)
        .png()
        .toBuffer({ resolveWithObject: true })
        .then(({ data, info }: any) => {
          let imageData: any = {};
          imageData.file = {
            data: {
              $binary: data.toString("base64"),
              $type: "00",
            },
            filename: `${name.replaceAll(" ", "").toLowerCase()}-${index}`,
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
