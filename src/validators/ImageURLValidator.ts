import axios from "axios";

class ImageURLValidator {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  validateURL = (url: any) => {
    if (url.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi)) {
      return true;
    } else {
      return false;
    }
  };

  vali = () => {
    try {
      return this.validateURL(this.url);
    } catch (error) {
      return false;
    }
  };
}

export default ImageURLValidator;
