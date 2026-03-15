import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../auth/context/useAuthContext";
import { useCart } from "../../cart/hooks/useCart";


type InputField = "name" | "email" | "phone";

const ProfileInfo = () => {
  const { user, setUserData } = useAuth();
  const { getCartLen } = useCart();

  const [editing, setEditing] = useState<InputField | null>(null);

  const [name, setName] = useState(user.userName);
  const [email, setEmail] = useState(user.userEmail);
  const [phone, setPhone] = useState(user.userPhoneNumber);

  const inputRef = useRef<HTMLInputElement | null>(null);


    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        if (editing) {
          // Зберігаємо зміни
          setUserData(email, name, phone);
          setEditing(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [editing, email, name, phone]);

  return (
              <div className="flex flex-col gap-2 text-gray-700 flex-1">
            {/* Name */}
            <h2 className="text-2xl sm:text-3xl font-bold">
              {editing === "name" ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="outline-none border-none"
                  autoFocus
                />
              ) : (
                <span
                  onClick={() => setEditing("name")}
                  className="cursor-pointer hover:bg-gray-100 transition outline-none border-none"
                >
                  {user.userName}
                </span>
              )}
            </h2>

            {/* Email */}
            <p>
              <span className="font-semibold">Email: </span>
              {editing === "email" ? (
                <input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none border-none "
                  autoFocus
                />
              ) : (
                <span
                  onClick={() => setEditing("email")}
                  className="cursor-pointer hover:bg-gray-100 transition outline-none border-none"
                >
                  {user.userEmail}
                </span>
              )}
            </p>

            {/* Phone */}
            <p>
              <span className="font-semibold">Phone: </span>
              {editing === "phone" ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="outline-none border-none "
                  autoFocus
                />
              ) : (
                <span
                  onClick={() => setEditing("phone")}
                  className="cursor-pointer hover:bg-gray-100 transition outline-none border-none"
                >
                  {user.userPhoneNumber || "Додайте ваш номер телефону"}
                </span>
              )}
            </p>

            <p>
              <span className="font-semibold">Items in cart: </span>{getCartLen()}
            </p>
          </div>
  );
}

export default ProfileInfo;