import {
  getAllDocuments,
  getDocumentsByField,
  getProducts,
  updateDocument,
} from "@config/Services/Firebase/FireStoreDB";
import { notification } from "antd";

export async function getDataByPaginationProps(Collection: string) {
  const Data = await JSON.parse(JSON.stringify(await getProducts(Collection)));
  return Data;
}

export async function getDataByTypeProps(
  Collection: string,
  field: string,
  id: string
) {
  if (id === undefined) return;
  else {
    const Data = await JSON.parse(
      JSON.stringify(await getDocumentsByField(Collection, field, id))
    );
    return Data;
  }
}

export async function getAllDataProps(Collection: string) {
  const Data = await JSON.parse(
    JSON.stringify(await getAllDocuments(Collection))
  );
  return Data;
}

export async function UpdateDataProps(
  Collection: string,
  id: string,
  data: any
) {
  updateDocument(Collection, id, data)
    .then(() => {
      notification.success({
        message: "Thành công!",
        description: `Cập nhật thành công!`,
      });
    })
    .catch((err) => {
      notification.error({
        message: "Thất bại!",
        description: `Mã lỗi: ${err}`,
      });
    });
}
