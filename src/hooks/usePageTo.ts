import { useNavigate } from "react-router-dom";
import { useMemoizedFn } from "ahooks";

/**
 * 跳转到指定路径
 * @param path 路径名称
 */
const usePageTo = () => {
  const navigate = useNavigate();
  return useMemoizedFn((path: string) => navigate(path));
};

export default usePageTo;
