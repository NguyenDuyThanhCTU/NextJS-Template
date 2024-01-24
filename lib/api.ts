import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  serverTimestamp,
  orderBy,
  Timestamp,
  deleteDoc,
  limitToLast,
  setDoc,
} from "firebase/firestore";
import { db } from "@config/Firebase";
import { convertDocumentData, convertFieldValue } from "./Handle";
import { DB_URL } from "@assets/item";
import { notification } from "antd";

export const insertOne = async (Collection: string, data: any) => {
  data.createdAt = serverTimestamp();

  try {
    const collectionRef = collection(db, Collection);

    const newDocument = await addDoc(collectionRef, data);
    notification.success({
      message: "Thêm thành công",
    });
    return newDocument.id;
  } catch (error) {
    notification.error({
      message: "Thêm thất bại",
      description: `Mã lỗi: ${error}`,
    });
  }
};

export const insertAndCustomizeId = async (
  Collection: string,
  data: any,
  customDocumentId: string
) => {
  const documentRef = customDocumentId
    ? doc(db, Collection, customDocumentId)
    : doc(collection(db, Collection));

  data.createdAt = serverTimestamp();

  try {
    await setDoc(documentRef, data);
    notification.success({
      message: "Thêm thành công",
    });
    return customDocumentId || documentRef.id;
  } catch (error) {
    notification.error({
      message: "Thêm thất bại",
      description: `Mã lỗi: ${error}`,
    });
  }
};

export const findById = async (Collection: string, Id: any) => {
  let firebaseEndpoint = `https://firestore.googleapis.com/v1/projects/${DB_URL}/databases/(default)/documents/${Collection}/${Id}`;

  try {
    const response = await fetch(firebaseEndpoint, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();

    return convertDocumentData(data.fields);
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    // throw new Error("Failed to fetch data.");
  }
};

export async function find(CollectionName: string) {
  let firebaseEndpoint: string;

  firebaseEndpoint = `https://firestore.googleapis.com/v1/projects/${DB_URL}/databases/(default)/documents/${CollectionName}`;

  try {
    const response = await fetch(firebaseEndpoint, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();

    const documents = data.documents.map((doc: any) => {
      const formattedDoc: any = {
        id: doc.name.split("/").pop(),
      };

      for (const field in doc.fields) {
        if (Object.prototype.hasOwnProperty.call(doc.fields, field)) {
          formattedDoc[field] = convertFieldValue(doc.fields[field]);
        }
      }

      return formattedDoc;
    });

    return documents;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    // throw new Error("Failed to fetch data.");
  }
}

export const findLimit = async (Collection: string) => {
  try {
    const q = query(
      collection(db, Collection),
      orderBy("createdAt"),
      limitToLast(12)
    );
    const querySnapshot = await getDocs(q);
    const data: Array<any> = [];

    querySnapshot.forEach((doc: any) => {
      const createdAt = doc.data().createdAt.toDate();
      const serverTime = Timestamp.now().toDate();

      const timeDiff = serverTime.getTime() - createdAt.getTime();
      const daysDiff = Math.round(timeDiff / 86400000);

      data.push({ id: doc.id, ...doc.data(), daysSinceCreation: daysDiff });
    });

    return data;
  } catch (error) {
    console.error("Error get document: ", error);
  }
};

export const findOne = async (
  Collection: string,
  field: string,
  value: any
) => {
  try {
    const q = query(collection(db, Collection), where(field, "==", value));
    const querySnapshot = await getDocs(q);
    const data: Array<any> = [];

    querySnapshot.forEach((doc: any) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error get document: ", error);
  }
};

export const updateOne = async (
  collectionName: string,
  id: string,
  newData: any
) => {
  try {
    newData.createdAt = serverTimestamp();
    await updateDoc(doc(db, collectionName, id), newData);
    notification.success({
      message: "Cập nhật thành công",
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật:", error);
    notification.error({
      message: "Cập nhật thất bại",
      description: `Mã lỗi: ${error}`,
    });
    throw error; // Re-throw lỗi để cho phép nó được xử lý bởi các khối catch ở nơi gọi hàm
  }
};

export const deleteOne = async (CollectionName: string, id: string) => {
  try {
    await deleteDoc(doc(db, CollectionName, id)).then(() => {
      notification.success({
        message: "Xóa thành công",
      });
    });
  } catch (error) {
    notification.error({
      message: "Xóa thất bại",
      description: `Mã lỗi: ${error}`,
    });
  }
};
