import "./index.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import React from "react";

function App() {
  const editor = useBlockNote({});
  const [inputObject, setInputObject] = React.useState();
  const [intialBlock, setInitialBlock] = React.useState();
  const [isInserted, setIsInserted] = React.useState(false);

  editor.onEditorContentChange(() => {
    const blocks = editor.topLevelBlocks;
    setInputObject(blocks);
    setInitialBlock(blocks[0].id);
  });

  // const object = [
  //   {
  //     id: "bee938a8-18c1-4bc4-8240-ed7ba440a65c",
  //     type: "paragraph",
  //     props: {
  //       textColor: "default",
  //       backgroundColor: "default",
  //       textAlignment: "left",
  //     },
  //     content: [
  //       {
  //         type: "text",
  //         text: "Hello",
  //         styles: {},
  //       },
  //     ],
  //     children: [],
  //   },
  // ];

  const object = [
    {
      id: "2d0aa259-1a76-4ba1-a2cf-4555cfd16d14",
      type: "table",
      props: {
        textColor: "default",
        backgroundColor: "default",
      },
      content: {
        type: "tableContent",
        rows: [
          {
            cells: [
              [
                {
                  type: "text",
                  text: "hello",
                  styles: {},
                },
              ],
              [
                {
                  type: "text",
                  text: "look",
                  styles: {},
                },
              ],
              [
                {
                  type: "text",
                  text: "table",
                  styles: {},
                },
              ],
            ],
          },
          {
            cells: [[], [], []],
          },
        ],
      },
      children: [],
    },
    {
      id: "c1d3af51-e210-4f11-beff-661fc6b2b342",
      type: "paragraph",
      props: {
        textColor: "default",
        backgroundColor: "default",
        textAlignment: "left",
      },
      content: [],
      children: [],
    },
    {
      id: "910547b5-26e0-48a6-98c0-3a8efb009030",
      type: "image",
      props: {
        backgroundColor: "default",
        textAlignment: "left",
        url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5fe96a9b-6d92-451b-ad2f-6caf946793c3/danlwfv-885a5b0b-32ca-45b2-a360-a9c0951f65e1.png/v1/fit/w_828,h_1410/imga_baron_by_arttair_danlwfv-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE4MCIsInBhdGgiOiJcL2ZcLzVmZTk2YTliLTZkOTItNDUxYi1hZDJmLTZjYWY5NDY3OTNjM1wvZGFubHdmdi04ODVhNWIwYi0zMmNhLTQ1YjItYTM2MC1hOWMwOTUxZjY1ZTEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KtqNC1ZIUemWrOGl3tKNLKYtO2u4dcLyFazRvFtDDGA",
        caption: "",
        width: 512,
      },
      children: [],
    },
    {
      id: "38274bb0-e6b8-4229-9e71-1b98d7407063",
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

  React.useEffect(() => {
    if (!isInserted && intialBlock) {
      editor.insertBlocks(blocksToInsert, intialBlock, "before");
      setIsInserted(true);
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
