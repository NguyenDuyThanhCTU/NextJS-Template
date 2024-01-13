import { delDocument } from "@config/Services/Firebase/FireStoreDB";
import { notification } from "antd";

export async function DeleteDataProps(Collection: string, id: string) {
  delDocument(Collection, id)
    .then(() => {
      notification.success({
        message: "Thành công!",
        description: `Xóa thành công!`,
      });
    })
    .catch((err) => {
      notification.error({
        message: "Thất bại!",
        description: `Mã lỗi: ${err}`,
      });
    });
}
