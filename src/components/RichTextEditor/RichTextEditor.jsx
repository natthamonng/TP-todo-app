import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import './RichTextEditor.css';

export default class RichTextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {editorState: EditorState.createEmpty()};
		this.onChange = editorState => this.setState({editorState});
		this.handleKeyCommand = this.handleKeyCommand.bind(this);
	}

	handleKeyCommand(command, editorState) {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
		  this.onChange(newState);
		  return 'handled';
		}
		return 'not-handled';
	}

	onUnderlineClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
		);
	};

	onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
	};

	onItalicClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
		);
	};

	render() {
		return (
			<div className="editorContainer">
				<button className="btn-editor btn-underline" onClick={this.onUnderlineClick}>
          <FaUnderline/>
        </button>
				<button className="btn-editor btn-bold" onClick={this.onBoldClick}>
					<FaBold/>
				</button>
				<button className="btn-editor btn-italic" onClick={this.onItalicClick}>
					<FaItalic/>
				</button>
				<div className="editor">
					<Editor
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
					/>
				</div>
			</div>
		);
	}
}