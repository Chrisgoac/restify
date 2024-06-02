import { Editor } from "@monaco-editor/react";

export function JsonEditor(props: any) {

    const { height, onChange, value, readonly} = props;

    return (
        <Editor
            height={height}
            defaultLanguage="json" 
            theme='vs-dark'
            onChange={onChange}
            value={value}
            options={{
                lineNumbers: 'off',
                minimap: {
                    enabled: false
                },
                readOnly: readonly ? true : false
            }}
        />
    )
}
