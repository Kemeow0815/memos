# 部署memos.top

## 自托管memos
参照 https://blog.memos.ee/archives/21.html
## 部署到vercel
>[!tip]
 提示
 `main`适配 **v0.26.x** (Memos API v1)
 若使用其他版本的`memos`请参考`Releases`中的版本

### Memos 0.26.x API 更新说明

本项目已更新支持 Memos 0.26.x 版本的 API，主要变更包括：

- **List Memos API**: 使用新的 filter 语法 `creator == "users/{id}"` (遵循 Google AIP-160 标准)
- **Attachments**: 0.26.x 使用 `/api/v1/attachments/{name}` 替代旧的 `/api/v1/resources` 端点
- **User API**: 用户 ID 格式统一为 `users/{id}`

环境变量:

```
MEMOS_HOST=https://memos.ee   # memos地址
MEMOS_USER_ID=1       # 用户ID
MEMOS_LIMIT=20       # 每页显示数量
MEMOS_TITTLE=提剑追梦 # 标题
MEMOS_HEAD=          # 头部支持HTML代码
MEMOS_MENU=          # 菜单支持HTML代码
MEMOS_ICON=          # 图标
MEMOS_FOOTER=        #底部支持HTML代码
```

[![https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjkjoy%2Fmemos-top-vercel%2Ftree%2Fmain%2F](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjkjoy%2Fmemos-top-vercel%2Ftree%2Fmain%2F)
