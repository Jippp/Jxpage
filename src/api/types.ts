// 数据类型

export interface BlogBase {
  title: string;
  content: string;
  contentStr: string;
  userName: string;
}

export interface FindBlogProps extends Partial<BlogBase> {
  id?: number;
  skip?: number;
  pageSize?: number;
}
