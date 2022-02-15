// // Button.stories.ts|tsx
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SimpleRender from '../render/SimpleRender'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'SimpleRender',
  component: SimpleRender,
} as ComponentMeta<typeof SimpleRender>

export const Primary: ComponentStory<typeof SimpleRender> = () => {
  const [code, setCode] = React.useState(
    `function App() { return <div>123<ul><li>123</li></ul></div>;}`
  )
  return (
    <>
      <textarea
        value={code}
        onChange={(e) => setCode((e.target as any).value)}
      />
      <SimpleRender code={code} />
    </>
  )
}
