import { Link } from "react-router-dom";
export default function Upload() {
    return (
        <div>
            <h1>Upload page</h1>
            <p>
                Việc import header vào đây sẽ không hay, không rõ ràng, chỉ sử dụng được cho trang này. Ta sẽ tạo một
                layout mới khác mặc định để cho các component khác có thể tái sử dụng{" "}
            </p>
            <Link to="/following">Go to Following page</Link>
        </div>
    );
}
