import SignStore from "./Sign/SignStore";
import AdminStore from "./Admin/AdminStore";
import ProfileStore from "./Profile/ProfileStore";
import InquiryStore from "./Inquiry/InquiryStore";

const stores = {
  signStore: new SignStore(),
  AdminStore: new AdminStore(),
  ProfileStore: new ProfileStore(),
  InquiryStore: new InquiryStore()
};

export default stores;
