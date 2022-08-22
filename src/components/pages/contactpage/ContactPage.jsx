import React from "react";
import contactImg from "../../../assets/contact.png";
import TextIcon from "../../atoms/textIcon/TextIcon";
import email from "../../../assets/email_icon.png";
import phone from "../../../assets/phone_icon.png";
import fb from "../../../assets/fb_icon.png";
import place from "../../../assets/place_icon.png";
import Form from "../../molecules/form/Form";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <section className="contact-page pb-20 pt-[60px] bg-[#FAFAFA] flex items-center justify-center gap-x-20 !max-w-full mx-auto">
      <div className="max-w-[464px]">
        <Form></Form>
      </div>
      <div className="flex flex-col items-center w-2/5 contact-page_infor">
        <div className="w-full mb-5 img-wrap">
          <img src={contactImg} alt="" className="h-full" />
        </div>
        <div className="contact-page_infor_list grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-1 w-full min-w-[500px]">
          <TextIcon img={email}>ecommerceclub.uit@gmail.com</TextIcon>
          <TextIcon img={phone}>+8478 614 1234</TextIcon>
          <TextIcon img={fb}>ECommerce Club - UIT</TextIcon>
          <TextIcon img={place}>
            Khu phố 6, phường Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh
          </TextIcon>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
