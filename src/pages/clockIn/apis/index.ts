/**
 * 打卡相关数据的获取
 * 1. 获取用户名称
 * 2. 获取用户所有的打卡任务
 * 3. 获取打卡任务的完成情况
 * 
 * 1.2 一个接口即可：
 * curl --location 'http://localhost:937/find' \
    --header 'Content-Type: application/json' \
    --data '{
        "collectionType": "3"
    }'
  * 3 "collectionType": "2"
      "startDate": "2023-09-01",
      "endDate": "2023-12-30",
      "taskName": "看书学习" 不传查全部任务
      "name": "一二一" 这里必须要有一个
 */
import { useRequest } from "ahooks";

import { findData, TypeEnum } from "@/api/storage";

interface DataProps {
  onBefore?: Function;
  onSuccess?: Function;
  onFinally?: Function;
  onError?: Function;
}

export const useGetAllUserAndTask = ({
  onBefore,
  onSuccess,
  onFinally,
  onError,
}: DataProps) => {
  return useRequest(findData, {
    manual: false,
    defaultParams: [{ collectionType: TypeEnum.CLOCKINTASK }],
    onBefore() {
      onBefore && onBefore();
    },
    onSuccess(res: Record<string, any>) {
      onSuccess && onSuccess(res);
    },
    onFinally() {
      onFinally && onFinally();
    },
    onError() {
      onError && onError();
    },
  });
};

export const useGetTaskDetail = ({
  onBefore,
  onSuccess,
  onFinally,
  onError,
}: DataProps) => {
  return useRequest(findData, {
    manual: true,
    onBefore() {
      onBefore && onBefore();
    },
    onSuccess(res: Record<string, any>) {
      onSuccess && onSuccess(res);
    },
    onFinally() {
      onFinally && onFinally();
    },
    onError() {
      onError && onError();
    },
  });
};
