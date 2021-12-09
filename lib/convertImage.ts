export default function convertImagesToFile() {
  const imageURL =
    "http://host-62-113-119-20.hosted-by-vdsina.ru/Pictures/naturopathica-fatblaster-keto-fit-whey-protein-vanilla-300g_1.jpg";

  const splitImage = imageURL.split("/");
  const imageName = splitImage[splitImage.length - 1];

  const toDataURL = (url: string) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  function dataURLtoFile(dataurl: any, filename: string) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  let fileArr = [];

  function convertImage() {
    toDataURL(imageURL)
      .then((dataUrl) => {
        console.log("Here is Base64 Url", dataUrl);
        let fileData = dataURLtoFile(dataUrl, imageName);
        console.log("fileData", fileData);
        fileArr.push(fileData);
      })
      .catch((error) => console.log("error", error));
  }

  async function imageToFile() {
    await fetch(imageURL).then(async (response) => {
      const contentType: any = response.headers.get("content-type");
      const blob = await response.blob();
      const file = new File([blob], imageName, contentType);
      // access file here
      console.log("imageToFile", file);
    });
  }

  function imgToFile() {
    var byteString = atob(imageURL.split(",")[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ia], { type: "image/jpeg" });
    var file = new File([blob], "image.jpg");
    console.log("imageToFile", file);
  }

  return { convertImage, imageToFile, imgToFile };
}
