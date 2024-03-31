// 响应数据的格式

export interface TagResponse {
  id: number;
  name: string;
}

/** blob数据格式 */
export interface FindBlogResponse {
  content: string;
  title: string;
  id: number;
  createtime: string;
  updatetime: string;
  tags: TagResponse[];
}
