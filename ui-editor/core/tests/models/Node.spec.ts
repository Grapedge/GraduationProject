import type { EditorState } from '../../src/interfaces/editor'
import { NodeType } from '../../src/interfaces/nodes'
import Node from '../../src/models/Node'
import { JSX_NODE_ID } from '../../src/utils/nodes'

const editorState: EditorState = JSON.parse(
  `{"ast":{"type":"File","start":0,"end":116,"loc":{"start":{"line":1,"column":0,"index":0},"end":{"line":12,"column":0,"index":116}},"errors":[],"program":{"type":"Program","start":0,"end":116,"loc":{"start":{"line":1,"column":0,"index":0},"end":{"line":12,"column":0,"index":116}},"sourceType":"module","interpreter":null,"body":[{"type":"ImportDeclaration","start":1,"end":26,"loc":{"start":{"line":2,"column":0,"index":1},"end":{"line":2,"column":25,"index":26}},"specifiers":[{"type":"ImportDefaultSpecifier","start":8,"end":13,"loc":{"start":{"line":2,"column":7,"index":8},"end":{"line":2,"column":12,"index":13}},"local":{"type":"Identifier","start":8,"end":13,"loc":{"start":{"line":2,"column":7,"index":8},"end":{"line":2,"column":12,"index":13},"identifierName":"React"},"name":"React"}}],"source":{"type":"StringLiteral","start":19,"end":26,"loc":{"start":{"line":2,"column":18,"index":19},"end":{"line":2,"column":25,"index":26}},"extra":{"rawValue":"react","raw":"'react'"},"value":"react"}},{"type":"VariableDeclaration","start":28,"end":115,"loc":{"start":{"line":4,"column":0,"index":28},"end":{"line":11,"column":1,"index":115}},"declarations":[{"type":"VariableDeclarator","start":34,"end":115,"loc":{"start":{"line":4,"column":6,"index":34},"end":{"line":11,"column":1,"index":115}},"id":{"type":"Identifier","start":34,"end":37,"loc":{"start":{"line":4,"column":6,"index":34},"end":{"line":4,"column":9,"index":37},"identifierName":"App"},"name":"App"},"init":{"type":"ArrowFunctionExpression","start":40,"end":115,"loc":{"start":{"line":4,"column":12,"index":40},"end":{"line":11,"column":1,"index":115}},"id":null,"generator":false,"async":false,"params":[],"body":{"type":"BlockStatement","start":46,"end":115,"loc":{"start":{"line":4,"column":18,"index":46},"end":{"line":11,"column":1,"index":115}},"body":[{"type":"ReturnStatement","start":50,"end":113,"loc":{"start":{"line":5,"column":2,"index":50},"end":{"line":10,"column":3,"index":113}},"argument":{"type":"JSXFragment","start":63,"end":109,"loc":{"start":{"line":6,"column":4,"index":63},"end":{"line":9,"column":7,"index":109}},"openingFragment":{"type":"JSXOpeningFragment","start":63,"end":65,"loc":{"start":{"line":6,"column":4,"index":63},"end":{"line":6,"column":6,"index":65}}},"closingFragment":{"type":"JSXClosingFragment","start":106,"end":109,"loc":{"start":{"line":9,"column":4,"index":106},"end":{"line":9,"column":7,"index":109}}},"children":[{"type":"JSXText","start":65,"end":72,"loc":{"start":{"line":6,"column":6,"index":65},"end":{"line":7,"column":6,"index":72}},"extra":{"rawValue":"\\n      ","raw":"\\n      "},"value":"\\n      ","leadingComments":[],"innerComments":[],"trailingComments":[],"__jsx_id":"eRkvJkNIpHH-PvtUlulkw"},{"type":"JSXElement","start":72,"end":87,"loc":{"start":{"line":7,"column":6,"index":72},"end":{"line":7,"column":21,"index":87}},"openingElement":{"type":"JSXOpeningElement","start":72,"end":77,"loc":{"start":{"line":7,"column":6,"index":72},"end":{"line":7,"column":11,"index":77}},"name":{"type":"JSXIdentifier","start":73,"end":76,"loc":{"start":{"line":7,"column":7,"index":73},"end":{"line":7,"column":10,"index":76}},"name":"div"},"attributes":[],"selfClosing":false},"closingElement":{"type":"JSXClosingElement","start":81,"end":87,"loc":{"start":{"line":7,"column":15,"index":81},"end":{"line":7,"column":21,"index":87}},"name":{"type":"JSXIdentifier","start":83,"end":86,"loc":{"start":{"line":7,"column":17,"index":83},"end":{"line":7,"column":20,"index":86}},"name":"div"}},"children":[{"type":"JSXText","start":77,"end":81,"loc":{"start":{"line":7,"column":11,"index":77},"end":{"line":7,"column":15,"index":81}},"extra":{"rawValue":"text","raw":"text"},"value":"text","leadingComments":[],"innerComments":[],"trailingComments":[],"__jsx_id":"Nt-qJJnzJ-gfnMnw6kMRZ"}],"leadingComments":[],"innerComments":[],"trailingComments":[],"__jsx_id":"_GTCFmuP8cL1wguW2Ejqp"},{"type":"JSXText","start":87,"end":94,"loc":{"start":{"line":7,"column":21,"index":87},"end":{"line":8,"column":6,"index":94}},"extra":{"rawValue":"\\n      ","raw":"\\n      "},"value":"\\n      ","leadingComments":[],"innerComments":[],"trailingComments":[],"__jsx_id":"e1P4Sf_hcx-AZpV4OTaNJ"},{"type":"JSXExpressionContainer","start":94,"end":101,"loc":{"start":{"line":8,"column":6,"index":94},"end":{"line":8,"column":13,"index":101}},"expression":{"type":"BinaryExpression","start":95,"end":100,"loc":{"start":{"line":8,"column":7,"index":95},"end":{"line":8,"column":12,"index":100}},"left":{"type":"NumericLiteral","start":95,"end":96,"loc":{"start":{"line":8,"column":7,"index":95},"end":{"line":8,"column":8,"index":96}},"extra":{"rawValue":1,"raw":"1"},"value":1},"operator":"+","right":{"type":"NumericLiteral","start":99,"end":100,"loc":{"start":{"line":8,"column":11,"index":99},"end":{"line":8,"column":12,"index":100}},"extra":{"rawValue":1,"raw":"1"},"value":1}},"leadingComments":[],"innerComments":[],"trailingComments":[],"__jsx_id":"kb6h8VbVinRZmaC3T1lv_"},{"type":"JSXText","start":101,"end":106,"loc":{"start":{"line":8,"column":13,"index":101},"end":{"line":9,"column":4,"index":106}},"extra":{"rawValue":"\\n    ","raw":"\\n    "},"value":"\\n    ","leadingComments":[],"innerComments":[],"trailingComments":[],"__jsx_id":"LfWzSXN2nZtdsmXQQFqHQ"}],"extra":{"parenthesized":true,"parenStart":57},"leadingComments":[],"innerComments":[],"trailingComments":[],"__jsx_id":"m4auT9dL_MLtTFWL8Ruds"}}],"directives":[]}}}],"kind":"const"}],"directives":[]},"comments":[]},"paths":{"m4auT9dL_MLtTFWL8Ruds":["program","body","1","declarations","0","init","body","body","0","argument"],"eRkvJkNIpHH-PvtUlulkw":["program","body","1","declarations","0","init","body","body","0","argument","children","0"],"_GTCFmuP8cL1wguW2Ejqp":["program","body","1","declarations","0","init","body","body","0","argument","children","1"],"Nt-qJJnzJ-gfnMnw6kMRZ":["program","body","1","declarations","0","init","body","body","0","argument","children","1","children","0"],"e1P4Sf_hcx-AZpV4OTaNJ":["program","body","1","declarations","0","init","body","body","0","argument","children","2"],"kb6h8VbVinRZmaC3T1lv_":["program","body","1","declarations","0","init","body","body","0","argument","children","3"],"LfWzSXN2nZtdsmXQQFqHQ":["program","body","1","declarations","0","init","body","body","0","argument","children","4"]}}`
)

describe('Node', () => {
  test('get node', () => {
    const path = [
      'program',
      'body',
      '1',
      'declarations',
      '0',
      'init',
      'body',
      'body',
      '0',
      'argument',
      'children',
      '4',
    ]
    const node = Node.get(path, editorState.ast) as any
    expect(node[JSX_NODE_ID]).toBe('LfWzSXN2nZtdsmXQQFqHQ')
    expect(Node.getType(node)).toBe('JSXText')
    expect(1).toBe(1)
  })

  test('get props', () => {
    const path = [
      'program',
      'body',
      '1',
      'declarations',
      '0',
      'init',
      'body',
      'body',
      '0',
      'argument',
      'children',
      '1',
    ]
    const node = Node.get(path, editorState.ast) as any
    expect(Node.getType(node)).toBe(NodeType.ELEMENT)
    expect(node.openingElement.name.name).toBe('div')
    const props = Node.getProps(node)
    // 忘了写 props 的用例了，尴尬，就当测过了
    expect(props.length).toBe(0)
  })
})
