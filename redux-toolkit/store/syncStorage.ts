import { checkWindow } from "@/lib/functions/_helpers.lib";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage = checkWindow() ? createWebStorage("local") : createNoopStorage();

export default storage;
