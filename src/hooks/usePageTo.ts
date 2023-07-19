import { useNavigate } from "react-router-dom";

/**
 * 跳转到指定路径
 * @param path 路径名称
 */
const usePageTo = () => {
  const navigate = useNavigate();
  return (path: string) => navigate(path);
};

export default usePageTo;
