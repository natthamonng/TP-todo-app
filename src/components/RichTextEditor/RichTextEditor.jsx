import React from "react";
import { Editor, EditorState, RichUtils, ContentState, convertToRaw, convertFromRaw } from "draft-js";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import './RichTextEditor.css';

export default class RichTextEditor extends React.Component {
	constructor(props) {
		super(props);

		const initialStateStr = props.defaultValue || "";

		let initialState = null;

		// Try to parse initialStateStr, if it's an JSON object, convert it with convertFromRaw()
		// if it cannot parse, it means that initialStateStr is a plain text, so I call createFromText to set the initial state
		try {
			const obj = JSON.parse(initialStateStr);
			initialState = convertFromRaw(obj);
		} catch(err){
			initialState = ContentState.createFromText(initialStateStr);
		}

		this.state = {
			editorState: EditorState.createWithContent(initialState)
		};

		// bind function in constructor instead of render 
		this.handleKeyCommand = this.handleKeyCommand.bind(this);
	}

	saveTodoContent = (content) => {
		this.props.handleTodoContent(this.props.id, {
			content: JSON.stringify(convertToRaw(content))
		})
	}

	onChange = (editorState) => {
		const contentState = editorState.getCurrentContent();
		// console.log('content state', convertToRaw(contentState));
		this.saveTodoContent(contentState)
		this.setState({
		  editorState,
		});
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
		if (!this.state.editorState) {
			return (
			  <p>Loading...</p>
			);
		}
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