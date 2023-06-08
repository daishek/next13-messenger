"use client";
import MessageInput from "@/app/components/MessageInput";
import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  const { conversationId } = useConversation();
  const { register, handleSubmit, setValue, formState } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios
      .post("/api/messages", {
        ...data,
        conversationId,
      })
      .catch((err) => toast.error("Something went wrong!"));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex bg-gray-100 border-t-2 border-t-gray-200">
        <MessageInput
          id="message"
          register={register}
          errors={formState.errors}
          required
          placeholder="Type anything..."
        />
        <button className="p-3 lg:p-5 bg-gray-700 text-white flex items-center gap-2">
          <span>
            <FaPaperPlane size={20} />
          </span>
          <span className="hidden lg:block font-semibold">Send</span>
        </button>
      </div>
    </form>
  );
};

export default Footer;
