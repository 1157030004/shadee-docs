import React from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import { defaultExtensions } from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import {
	FormatBold as Bold,
	FormatItalic as Italic,
	StrikethroughS as Strike,
	Code,
	FormatClear as Clear,
	FormatListBulleted as Bullet,
	FormatListNumbered as Number,
	FormatAlignLeft as AlignLeft,
	FormatAlignCenter as AlignCenter,
	FormatAlignRight as AlignRight,
	FormatAlignJustify as AlignJustify,
	CodeOutlined,
	TextFields,
	FormatQuote as Quote,
	HorizontalSplit as Split,
	Image as UploadImage,
	Undo,
	Redo,
} from "@material-ui/icons";

const MenuBar = ({ editor }) => {
	if (!editor) {
		return null;
	}

	const fontSize = 20;

	const addImage = () => {
		const url = window.prompt("URL");

		if (url) {
			editor.chain().focus().setImage({ src: url }).run();
		}
	};

	return (
		<div className="m-2 shadow-lg p-4 flex justify-content: flex-start; flex-wrap rounded-lg space-x-3 items-center bg-white">
			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				className={
					editor.isActive("bold")
						? "is-active"
						: " text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 "
				}>
				<Bold style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleItalic().run()}
				className={
					editor.isActive("italic")
						? "is-active"
						: " text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<Italic style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleStrike().run()}
				className={
					editor.isActive("strike")
						? "is-active"
						: " text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<Strike style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCode().run()}
				className={
					editor.isActive("code")
						? "is-active"
						: " text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<Code style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().unsetAllMarks().run()}
				className=" text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
				<Clear style={{ fontSize }} />
			</button>

			<button
				onClick={() => editor.chain().focus().setParagraph().run()}
				className={
					editor.isActive("paragraph")
						? "is-active"
						: "text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<TextFields style={{ fontSize }} />
			</button>

			<button
				onClick={() => editor.chain().focus().setTextAlign("left").run()}
				className={
					editor.isActive("left")
						? "is-active"
						: " text-sm px-0.5 font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<AlignLeft style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().setTextAlign("center").run()}
				className={
					editor.isActive("center")
						? "is-active"
						: " text-sm px-0.5 font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<AlignCenter style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().setTextAlign("right").run()}
				className={
					editor.isActive("right")
						? "is-active"
						: " text-sm px-0.5 font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<AlignRight style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().setTextAlign("justify").run()}
				className={
					editor.isActive("justify")
						? "is-active"
						: " text-sm px-0.5 font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<AlignJustify style={{ fontSize }} />
			</button>

			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				className={
					editor.isActive("heading", { level: 1 })
						? "is-active"
						: " text-sm px-0.5 font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				h1
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				className={
					editor.isActive("heading", { level: 2 })
						? "is-active"
						: " text-sm px-0.5 font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				h2
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				className={
					editor.isActive("heading", { level: 3 })
						? "is-active"
						: " text-sm px-0.5 font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				h3
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
				className={
					editor.isActive("heading", { level: 4 })
						? "is-active"
						: " text-sm px-0.5 font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				h4
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
				className={
					editor.isActive("heading", { level: 5 })
						? "is-active"
						: " text-sm px-0.5 font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				h5
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
				className={
					editor.isActive("heading", { level: 6 })
						? "is-active"
						: " text-sm px-0.5 font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 "
				}>
				h6
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={
					editor.isActive("bulletList")
						? "is-active"
						: " text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<Bullet style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={
					editor.isActive("orderedList")
						? "is-active"
						: " text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<Number style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				className={
					editor.isActive("codeBlock")
						? "is-active"
						: " text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<CodeOutlined style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				className={
					editor.isActive("blockquote")
						? "is-active"
						: " text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
				}>
				<Quote style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().setHorizontalRule().run()}
				className=" text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
				<Split style={{ fontSize }} />
			</button>
			<button
				onClick={() => addImage()}
				className=" text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
				<UploadImage style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().undo().run()}
				className=" text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
				<Undo style={{ fontSize }} />
			</button>
			<button
				onClick={() => editor.chain().focus().redo().run()}
				className=" text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
				<Redo style={{ fontSize }} />
			</button>
		</div>
	);
};

const Tiptap = () => {
	const fontSize = 20;
	const editor = useEditor({
		extensions: [
			Document,
			Paragraph,
			Text,
			TextAlign,
			TextStyle,
			Image,
			...defaultExtensions(),
		],

		editorProps: {
			attributes: {
				class:
					"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 px-2 focus:outline-none h-screen  bg-white shadow-lg justify-center",
			},
		},
		content: `
        <div >
        <p>Your brilliant idea starts here...</p>
        </div>
      `,
	});
	return (
		<div>
			<MenuBar editor={editor} />
			{editor && (
				<BubbleMenu editor={editor}>
					<button
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={
							editor.isActive("bold")
								? "is-active"
								: "text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
						}>
						<Bold style={{ fontSize: 20 }} />
					</button>
					<button
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={
							editor.isActive("italic")
								? "is-active"
								: "text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
						}>
						<Italic style={{ fontSize }} />
					</button>
					<button
						onClick={() => editor.chain().focus().toggleStrike().run()}
						className={
							editor.isActive("strike")
								? "is-active"
								: "text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
						}>
						<Strike style={{ fontSize }} />
					</button>
				</BubbleMenu>
			)}
			<EditorContent editor={editor} />
		</div>
	);
};

export default Tiptap;
