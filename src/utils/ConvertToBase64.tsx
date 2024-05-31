export const ConvertToBase64 = (file: any | undefined) => {
    return new Promise((resolve) => {
      let baseURL: any;
  
      // Make new FileReader
      let reader = new FileReader();
  
      // Convert the file to base64 text
      reader.readAsDataURL(file);
  
      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };
  