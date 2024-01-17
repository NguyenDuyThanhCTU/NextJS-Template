import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";

export const uploadImage = async (fileOrEvent: any, locate: any) => {
  try {
    let selectImage;
    if (fileOrEvent.target && fileOrEvent.target.files) {
      selectImage = fileOrEvent.target.files[0];
    } else {
      selectImage = fileOrEvent;
    }

    const filetypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

    if (filetypes.includes(selectImage.type)) {
      const storage = getStorage();
      let storageRef = ref(storage, `${locate}/${selectImage.name}`);

      const snapshot = await uploadBytes(storageRef, selectImage);
      console.log("Uploaded a blob or file!");

      const url = await getDownloadURL(snapshot.ref);

      return url;
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};

export const convertListIdToProduct = (
  listId: string[],
  listProduct: any[]
) => {
  let result: any[] = [];
  listId?.forEach((id) => {
    const product = listProduct.find((product) => product.id === id);
    if (product) {
      result.push(product);
    }
  });
  return result;
};

export const convertDate = (date: Date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  } as const;
  return date?.toLocaleDateString("vi-VN", options);
};

export const convertToChartArray = (items: any) => {
  return items.map((item: any) => item.label);
};
