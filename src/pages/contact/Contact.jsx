import { useEffect, useState } from "react";
import "./Contact.scss";
import { FaCopy, FaEnvelopeOpen, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import useFormState from "../../hooks/useFormState";
import { formDetails } from "./contactDeatils";
import { useDispatch, useSelector } from "react-redux";
import {
  addToContactBox,
  selectContactError,
  selectContactLoading,
} from "../../redux/features/contactInbox/contactInboxSlice";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import useLazyLoading from "../../hooks/useLazyLoading";

export default function Contact() {
  const [copyText, setCopyText] = useState("");
  const loading = useSelector(selectContactLoading);
  const error = useSelector(selectContactError);
  const { errorState, formState, handleStateChange, handleSubmit } =
    useFormState(formDetails);

  const dispatch = useDispatch();

  const hanldeCopyText = () => {
    navigator.clipboard.writeText("juwiz999@gmail.com");
    setCopyText("Copied!");
  };

  const addToInbox = async () => {
    try {
      await dispatch(addToContactBox(formState)).unwrap();
      toast.success("Message Delivered!!!");
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (copyText !== "Copied!") return;

    const timeOut = setTimeout(() => setCopyText(""), 1000);

    return () => clearTimeout(timeOut);
  }, [copyText]);

  const phoneNumber = 2349071049925;

  return (
    <section className="pl-4 pr-4 contact section customXlg:pr-24 customXlg:pl-7">
      <h2 className="mb-8 section__title">
        Get In<span>Touch</span>
      </h2>

      <div className="grid contact__conatainer customTablet1:container">
        <div className="contact__data">
          <h3 className="contact__title">Open to Frontend Engineer Roles</h3>

          <p className="contact__description ">
            Frontend Engineer building clean, scalable, production-ready
            interfaces.
          </p>

          <div className="relative pt-1 contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <h4 className="info__desc">juwiz999@gmail.com</h4>
              </div>

              <p
                className="top-0 text-lg cursor-pointer"
                onClick={hanldeCopyText}
                onMouseEnter={() =>
                  setCopyText((prevCopy) => (prevCopy ? "" : "copy"))
                }
                onMouseLeave={() => setCopyText("")}
              >
                <FaCopy />
              </p>
              <div className="relative">
                <p className="absolute text-sm -top-9 -right-2">{copyText}</p>
              </div>
            </div>
          </div>
          <div className="contact__socails">
            <Link
              target="_blank"
              to="https://github.com/Omaaj?tab=repositories"
              className="text-xl contact__social-link"
            >
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/atunwon-olajuwon/"
              className="text-xl contact__social-link"
            >
              <FaLinkedin />
            </Link>
            <Link
              target="_blank"
              to={`https://wa.me/${phoneNumber}`}
              className="text-xl contact__social-link"
            >
              <IoLogoWhatsapp />
            </Link>
            <Link
              target="_blank"
              to="https://x.com/omaajTech"
              className="text-xl contact__social-link"
            >
              <FaSquareXTwitter />
            </Link>
          </div>
        </div>
        <form
          className="contact__form"
          onSubmit={(e) => handleSubmit(e, addToInbox)}
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Name"
                value={formState.name}
                name="name"
                onChange={handleStateChange}
              />
              {errorState.name && (
                <p className="pl-2 mt-3 text-sm text-customRed-200">
                  {errorState.name}
                </p>
              )}
            </div>
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Email"
                value={formState.email}
                name="email"
                onChange={handleStateChange}
              />
              {errorState.email && (
                <p className="pl-2 mt-3 text-sm text-customRed-200">
                  {errorState.email}
                </p>
              )}
            </div>
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Subject"
                value={formState.subject}
                name="subject"
                onChange={handleStateChange}
              />
              {errorState.subject && (
                <p className="pl-2 mt-3 text-sm text-customRed-200">
                  {errorState.subject}
                </p>
              )}
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Message"
              className="form__control textarea"
              value={formState.message}
              name="message"
              onChange={handleStateChange}
            />
            {errorState.message && (
              <p className="pl-2 mt-3 text-sm text-customRed-200">
                {errorState.message}
              </p>
            )}
          </div>
          <button className="button" type="submit">
            {loading ? <p>Loading...</p> : "Send Message"}

            <span className="flex items-center justify-center button__icon contact__button-icon">
              {loading ? <ClipLoader size={20} color="#fff" /> : <FiSend />}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
