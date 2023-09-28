// 执行登录
import { useRequest } from "ahooks";

import { login } from "@/api/storage";

const useLogin = () => {
  return useRequest(login, {
    manual: false,
    loadingDelay: 1000,
  });
};

export default useLogin;
