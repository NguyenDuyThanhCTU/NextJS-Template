import { addDocument } from "@config/Services/Firebase/FireStoreDB";
import { notification } from "antd";

export async function AddDataProps(Collection: string, data: any) {
  addDocument(Collection, data)
    .then(() => {
      notification.success({
        message: "Thành công!",
        description: `Thêm thành công!`,
      });
    })
    .catch((err) => {
      notification.error({
        message: "Thất bại!",
        description: `Mã lỗi: ${err}`,
      });
    });
}
