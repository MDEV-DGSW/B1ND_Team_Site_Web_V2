import AdminStore from "./Admin/AdminStore";
import InquiryStore from "./Inquiry/InquiryStore";

const stores = {
  AdminStore: new AdminStore(),
  InquiryStore: new InquiryStore()
};

export default stores;
