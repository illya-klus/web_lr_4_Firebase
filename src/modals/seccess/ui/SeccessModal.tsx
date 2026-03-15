import { useEffect } from "react";

type Props = {
  message: string;
  onClose: () => void;
};

export default function SuccessModal({ message, onClose }: Props) {
  
  useEffect(()=>{
    let timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  },[]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="">
        <div className=" max-w-md w-full p-6 flex-col imate-slideIn fixed top-30 right-6 z-50 bg-green-400 text-white flex items-center justify-between gap-3 px-5 py-3 font-medium rounded-xl shadow-xl">
            {message}
        </div>
      </div>
    </div>
  )
}


