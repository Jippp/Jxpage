// .cz-config.js
module.exports = {
  types: [
    { value: "✨feat", name: "✨feat: 新功能" },
    { value: "🐛fix", name: "🐛fix: 修复" },
    { value: "✏️docs", name: "✏️docs: 文档变更" },
    { value: "💄style", name: "💄style: 代码格式(不影响代码运行的变动)" },
    {
      value: "♻️refactor",
      name: "♻️refactor: 重构(既不是增加feature，也不是修复bug)",
    },
    { value: "⚡️perf", name: "⚡️perf: 性能优化" },
    { value: "✅test", name: "✅test: 增加测试" },
    { value: "🚀chore", name: "🚀chore: 构建过程或辅助工具的变动" },
    { value: "⏪️revert", name: "⏪️revert: 回退" },
    { value: "📦️build", name: "📦️build: 打包" },
    { value: "👷ci", name: "👷CI: related changes" },
    { value: "🤩init", name: "🤩init: create project" },
    { value: "🤡temp", name: "🤡temp: temp commit" },
  ],
  // Specify the scopes for your particular project
  scopes: [],
  messages: {
    type: "选择一种你的提交类型: \n",
    cope: "选择一个 scope（可选）\n：",
    customScope: "请输入修改范围(可选): \n",
    subject: "短说明: \n",
    body: '长说明，使用 "|" 换行(可选)：\n',
    breaking: "非兼容性说明 (可选): \n",
    footer: "关联关闭的issue，例如：#31, #34(可选): \n",
    confirmCommit: "确定提交说明? \n",
  },
  // 跳过空的 scope
  skipEmptyScopes: true,
  skipQuestions: ["scopes", "breaking", "body", "footer"],
  // 设置为 true，在 scope 选择的时候，会有 empty 和 custom 可以选择
  // 顾名思义，选择 empty 表示 scope 缺省，如果选择 custom，则可以自己输入信息
  allowCustomScopes: true,
  // 只有我们 type 选择了 feat 或者是 fix，才会询问我们 breaking message.
  allowBreakingChanges: ["feat", "fix"],
};
