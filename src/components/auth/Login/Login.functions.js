import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils.js";
import { createUserDocumentFromAuth } from "../../../services/firebase/auth/user/user.services.js";

export const loginGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  console.log(user);
  console.log(createUserDocumentFromAuth(user));
};
