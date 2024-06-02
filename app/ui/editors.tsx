import { Editor } from "@monaco-editor/react";

export function JsonEditor(props: any) {

    const { height, onChange} = props;

    return (
        <Editor
            height={height}
            defaultLanguage="json" 
            theme='vs-dark'
            onChange={onChange}
            options={{
                lineNumbers: 'off',
                minimap: {
                    enabled: false
                }
            }}
        />
    )
}
