# jsx-editor

```bash
yarn dev # or yarn storybook
yarn test
yarn build
```

## 文档

- [JSX AST](https://github.com/facebook/jsx/blob/main/AST.md)

## 技术草稿

基本：

- 将原始代码 C 转为可设计的代码 DC，DC 内维护编辑器状态
- 通过渲染器渲染 DC
- 用户拖放、配置，DC 将属性映射回 C

```jsx
const render = () => <div>Hello</div>

return render()
```

```jsx
// 一种可能的 RC
// 问题：会破坏原始 JSX 结构，像是 Fusion 这种强依赖子组件名称的组件库将很难兼容
//      需要测量组件的渲染大小、自动化的测量会破坏 HTML 结构
const render = () => (
  <Fragment>
    <Element designId="nanoid">
      <div designId="nanoid">Hello</div>
    </Element>
  </Fragment>
)

return render()
```

`@babel/standalone` 体积过大，而且无法 tree-shaking，正在调研有无替代品 ing...
