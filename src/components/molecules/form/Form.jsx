import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../atoms/button/Button";
import "./Form.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../atoms/input/Input";

const schema = yup
  .object({
    name: yup.string().required(),
    // email: yup.string().email().required(),
    // message: yup.string().required().min(10),
  })
  .required();

const Form = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const onSubmit = (data) => console.log(data);
  return (
    <div className="form-box flex flex-col p-10 bg-white rounded-[15px]">
      <h3 className="text-secondary font-title text-[25px] mb-3">Liên hệ</h3>
      <p className="text-[#67748E] mb-4 text-[15px]">
        Nếu có yêu cầu hay phản hồi gì với chúng tôi. Vui lòng điền đầy đủ và
        chính xác thông tin vào form dưới đây. Chúng tôi sẽ phản hồi lại trong
        vòng thời gian sớm nhất.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group flex flex-col gap-y-3">
          <label
            htmlFor="name"
            className="font-semibold text-[#767F82] text-[15px]"
          >
            Họ tên <span className="text-[#E43756]">*</span>
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Guy Hawkins"
          ></Input>
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <Button className="px-12 py-4 btn-base rounded-lg mt-10">Gửi</Button>
      </form>
    </div>
  );
};

export default Form;
