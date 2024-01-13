import { updateDocument } from "@config/Services/Firebase/FireStoreDB";
import { notification } from "antd";
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
