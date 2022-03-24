# UI Editor Core

## 用例列表

- [ ] 点击组件，可以配置组件的 Props
- [ ] 可以通过拖放的方式调整组件间的顺序
- [ ] 可以删除组件
- [ ] 可以从面板拖入组件

## Core 包技术设计

以下概念仅用于 UI Editor 上下文，如涉及到其他上下文的名词，会添加前缀说明。

### Node

Node 是在画布中进行拖放、属性配置的基本单元。

以代码中的类型分，下面四种 Node 共同组成了画布：

- `ElementNode`: `<div />`
- `FragmentNode`: `<></>`
- `ExpressionNode`: `{1 + 1}`
- `TextNode`: `<div>123</div>` 中的 `123`

### Slot

如果画布中的一个位置可以容纳 Node，则称该位置为 Slot 点。

例如，最简单的：

```jsx
<div>SLOT</div>
```

中的 `SLOT` 处可以容纳子节点，则称该位置为插槽点。

再如：

```jsx
<Button icon={SLOT}>SLOT</Button>
```

中的 SLOT 为插槽点。

## React 包技术设计

### 组件模式描述

如果一个组件可以被配置，需要提供相应的描述。

```typescript
// 来自 craft.js 的想法
interface NodeRelatd {
  [ComponentName]: Component
}
```

编辑器渲染的代码如下：

```jsx
<ElementNode
  id="1"
  /**
   * 可以根据 Node 获得内部状态
   * component="Space"
   * props={{ xxx: 1 }}
   * meta={{ loc: { start: 79, end: 139 } }}
   */
>
  <TextNode id="2" text="abc" />
  <ExpressionNode id="3">{(1 + 1, 2 + 2)}</ExpressionNode>
  // 可以将三目表达式解析为这种形式，看时间是否处理 // 提供三目表达上下文
  <MatchExpressionNode id="4">
    <When cond={a + b > 5}>...</When>
  </MatchExpressionNode>
</ElementNode>
```

每个 Node 会有相应的处理函数。

```jsx
const NodeRenderer = match(node.type) {
  when ('ElementNode'): ElemenetNodeRenderer,
  when('TextNode'): TextNodeRenderer,
  // ...
}
```

... 继续设计一下