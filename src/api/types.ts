// 数据类型

export interface BlogBase {
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 摘要 */
  contentStr: string;
  /** 用户 */
  userName: string;
  /** 关联标签 多个用逗号隔开 */
  tags: string;
}

export interface FindBlogProps extends Partial<BlogBase> {
  id?: number;
  skip?: number;
  pageSize?: number;
}
