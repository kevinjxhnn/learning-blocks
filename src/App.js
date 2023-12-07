import "./index.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import React from "react";

function App() {
  const editor = useBlockNote({});
  const [inputObject, setInputObject] = React.useState();
  const [intialBlock, setInitialBlock] = React.useState();

  editor.onEditorContentChange(() => {
    const blocks = editor.topLevelBlocks;
    setInputObject(blocks);
    setInitialBlock(blocks[0].id);
  });

  editor.on

  const object = [
    {
      id: "bee938a8-18c1-4bc4-8240-ed7ba440a65c",
      type: "paragraph",
      props: {
        textColor: "default",
        backgroundColor: "default",
        textAlignment: "left",
      },
      content: [
        {
          type: "text",
          text: "Hello",
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: "afb7b3a1-923d-420b-a7dc-bce8c023dc76",
      type: "paragraph",
      props: {
        textColor: "default",
        backgroundColor: "default",
        textAlignment: "left",
      },
      content: [],
      children: [],
    },
  ];

  const blocksToInsert = object.map((block) => ({
    id: block.id,
    type: block.type,
    props: block.props,
    content: block.content,
    children: block.children,
  }));

  // if (intialBlock) {
  //   console.log("id", intialBlock);
  //   editor.insertBlocks(blocksToInsert, intialBlock);
  // }

  React.useEffect(() => {
    if (intialBlock) {
      console.log("id", intialBlock);
      console.log(intialBlock)
      editor.insertBlocks(blocksToInsert, intialBlock, "before");
    }
  }, [intialBlock]);

  return (
    <>
      <BlockNoteView editor={editor} theme={"dark"} />
      <button onClick={() => console.log(inputObject)}>on submit</button>
    </>
  );
}

export default App;
