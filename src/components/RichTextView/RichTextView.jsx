import React, { Component } from 'react'
import { Editor, EditorState, ContentState, convertFromRaw } from "draft-js";
import './RichTextView.css';

export default class RichTextView extends Component {
    constructor(props) {
		super(props);
		const initialStateStr = props.defaultValue || "";

		let initialState = null;
		try {
			const obj = JSON.parse(initialStateStr);
			initialState = convertFromRaw(obj);
		}catch(err){
			initialState = ContentState.createFromText(initialStateStr);
		}
		this.state = {
			editorState: EditorState.createWithContent(initialState)
		};
	}

    render() {
        return (
				<div className="rich-text-view">
				<Editor
						editorState={this.state.editorState}
						readOnly
					/>
				</div>
        )
    }
}
