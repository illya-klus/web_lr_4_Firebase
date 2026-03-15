import { registerUserFirebase } from "../../../firebase/firebaseAuthApi";

export type RegisterReturn = SuccessReturn | ErrorReturn;

type ErrorReturn = {
  seccesfull: false;
  body: {
    error: {
      code: string | number;
      message: string;
    };
  };
};

type SuccessReturn = {
  seccesfull: true;
  body: {
    user: any; // або firebase.User якщо юзати Firebase SDK типи
  };
};

export const registerUser = async (
  email: string,
  password: string,
): Promise<RegisterReturn> => {
  try {
    const credentials = await registerUserFirebase(email, password);
    return {
      seccesfull: true,
      body: { user: credentials },
    };
  } catch (error: any) {
    let message = "Fail in trying to register";

    if (error.code === "auth/api-key-not-valid") {
      message = "Не вірний API ключ Firebase. Перевір конфігурацію.";
    } else if (error.code === "auth/email-already-in-use") {
      message = "Ця пошта вже використовується.";
    }

    return {
      seccesfull: false,
      body: {
        error: { code: error.code, message },
      },
    };
  }
};

//1234567;
