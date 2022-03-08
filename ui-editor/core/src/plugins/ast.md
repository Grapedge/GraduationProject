# AST Examples

规格地址: https://github.com/facebook/jsx/blob/main/AST.md

AST Explorer: https://astexplorer.net/

备忘录：

## JSX Names

### JSXIdentifier

JSX 中的标识符。

```jsx
<div a="1" />
```

`div`, `a` 为 `JSXIdentifier`

### JSXMemberExpression

仅标签中出现。

```jsx
<A.B />
```

### JSXNamespacedName

忽略，暂无目标用例。

```jsx
<div bind:onClick="..." />
```

## JSX Expression Container

### JSXEmptyExpression

忽略，用于注释。

```jsx
<div>{/** EmptyExpression **/}</div>
```

### JSXExpressionContainer

```jsx
<div a={1}>{1}</div>
```

任意 `{}` 包裹的内容。

### JSXSpreadChild

```jsx
<div>{...content}</div>
```

## JSX Boundary Tags

- JSXBoundaryElement
  - JSXOpeningElement：包含 attributes
  - JSXClosingElement

## JSX Attributes

- JSXAttribute
- JSXSpreadAttribute

## JSX Text

仅包含 JSX children 中的文本。

```jsx
<div a="1"/>
<div>233</div>
```

其中 `"1"` 是普通的字面量，`233` 是 `JSXText`。

## JSX Element

一个完整的 JSX 元素，含开标签，子节点，可选的闭标签

## JSXFragment

JSX Fragment，不能自闭合。

...
