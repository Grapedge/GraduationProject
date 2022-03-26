# @ui-editor/react

提供 React Hooks，以供在 React 中构建 UI 编辑器。

## TODOs

- [ ] useEditorState(a => b)
- [ ] useEditorActions()
- [ ] useNodeMeta()
- [ ] useNodeData(): 根据 Node Meta 查找对应 ASTNode，根据节点类型提供查询方法

```jsx
const { props } = useNodeData(({ meta, getProps }) => ({
  id: meta.id,
  props: getProps(),
}))
```

性能：对 `ASTNode` 的访问具有一定的性能损耗。
