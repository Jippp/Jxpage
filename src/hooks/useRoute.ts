/**
 * 处理路由相关，如跳转等功能
 */
import { useMemoizedFn } from "ahooks";
import { useNavigate } from "react-router-dom";

const useRoute = () => {
  const navigate = useNavigate();

  const push = useMemoizedFn((path: string) => {
    navigate(path);
  });

  return { push };
};

export default useRoute;
