import useSnapshot from "../../hooks/useSnapshot";
import { ContactInboxContext } from "./ContactInboxContext";

const ContactInboxProvider = ({ children }) => {
  const { data, loading } = useSnapshot("contactInbox");

  return (
    <ContactInboxContext.Provider value={{ data, loading }}>
      {children}
    </ContactInboxContext.Provider>
  );
};

export default ContactInboxProvider;
