import { get, post } from "./";

/** 响应码 */
export const CodeEnums = {
  SuccessCode: 200,
  ErrorCode: 400,
};

/**
 * 入参collectionType的枚举
 */
export enum TypeEnum {
  /** 位置表 */
  USERLOCAL = "0",
  /** 生日表 */
  BIRTHDAY = "1",
  /** 打卡完成情况表 */
  CLOCKINDONE = "2",
  /** 打卡任务表 */
  CLOCKINTASK = "3",
  /** 备忘录表 */
  REMIND = "4",
}

/** /find接口入参类型 */
export interface APIGETPARAMS {
  /** 要查询的表 */
  collectionType: TypeEnum;
  /** 微信名称，不传是查全部 */
  name?: string;
  /** 查找打卡任务完成情况可传，true表示返回未完成的打卡任务 */
  noDone?: boolean;
  /** 查找打卡相关接口时可传 */
  taskName?: string;
  /** 查找打卡任务完成情况可传，YYYY-MM-DD，起始时间  */
  startDate?: string;
  /** 查找打卡任务完成情况可传，YYYY-MM-DD，截止时间  */
  endDate?: string;
}

/** /create、/update接口入参类型 */
export interface APTSETPARAMS {
  /** 微信名称 */
  name: string;
  /** 要操作的表 */
  collectionType: TypeEnum;
  /** 位置信息 */
  local?: string;
  /** 误差值 */
  distance?: number;
  /** 要发送的人微信名称 */
  to?: string;
  /** 要发送的信息 */
  message?: string;
  /** 要发送的日期 */
  date?: string;

  /* task and remind props */
  taskList?: {
    /** YYYY-MM-DD */
    startDate?: string;
    /** YYYY-MM-DD */
    endDate?: string;
    /** dd:mm */
    deadTime?: string;
    remind?: string;
    /** YYYY-MM-DD dd:mm:ss */
    doneTime?: string;
    isDone?: string;
    doneList?: Record<string, any>[];
    doneCount?: number;
  }[];
  /** YYYY-MM-DD */
  startDate?: string;
  /** YYYY-MM-DD */
  endDate?: string;
  /** dd:mm */
  deadTime?: string;
  remind?: string;
  /** YYYY-MM-DD dd:mm:ss */
  doneTime?: string;
  isDone?: boolean;
  /** 查找打卡相关接口时可传 */
  taskName?: string;
  /* task and remind props */
}

/** 数据库中存储数据的类型 */
export type DATAITEM = APTSETPARAMS;

/** 接口返回值类型 */
export interface APIRESPONSE {
  status: number;
  data?: DATAITEM[];
  msg?: string;
}

/** 连接数据库 */
export const login = async () => {
  const res = await get("/login");
  return res.json();
};

/** 查找数据库内容 */
export const findData = async (params: APIGETPARAMS) => {
  try {
    const res = await post("/find", {
      body: JSON.stringify(params),
    });
    const data = (await res.json()) as APIRESPONSE;
    return data && data.status === CodeEnums.SuccessCode
      ? (data.data as DATAITEM[])
      : [];
  } catch (error) {
    throw error;
  }
};

/** 查找有则更新 没有新增 */
export const findAndUpdate = async (params: APTSETPARAMS) => {
  try {
    const res = await post("/findOneAndUpdate", {
      body: JSON.stringify(params),
    });
    return res.json() as Promise<
      Pick<APIRESPONSE, "status"> & { data: DATAITEM }
    >;
  } catch (error) {
    throw error;
  }
};

/** 添加进数据库 */
export const createData = async (params: APTSETPARAMS) => {
  try {
    const res = await post("/create", {
      body: JSON.stringify(params),
    });
    return res.json() as Promise<APIRESPONSE>;
  } catch (error) {
    throw error;
  }
};

/** 更新数据库内容 */
export const updateData = async (params: APTSETPARAMS) => {
  try {
    const res = await post("/update", {
      body: JSON.stringify(params),
    });
    return res.json() as Promise<APIRESPONSE>;
  } catch (error) {
    throw error;
  }
};
