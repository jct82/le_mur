import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import ReactQuill, { Mixin, Toolbar, Quill } from "react-quill";
import { saveAs } from 'file-saver';
import { pdfExporter } from 'quill-to-pdf';

import docs from 'src/data/element';
import { updateContents } from "src/actions/textEdit";
import { redirectPDF } from "src/actions/wall";
import "react-quill/dist/quill.snow.css";


const __ISIOS__ = navigator.userAgent.match(/iPad|iPhone|iPod/i) ? true : false;

const WallFileEdit = () => {
  const dispatch = useDispatch();
  const { contents, delta } = useSelector((state) => state.textEdit);

  let quillRef = null; 
  let onKeyEvent = false;

  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ size: ["small", false, "large", "huge"] }, { color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
          { align: [] }
        ],
        ["link", "image"],
        ["clean"]
      ],
    },
    clipboard: { matchVisual: false }
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "size",
    "color",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align"
  ];

  const onKeyUp = (event) => {
    if (!__ISIOS__) return;
    // enter
    if (event.keyCode === 13) {
      onKeyEvent = true;
      quillRef.blur();
      quillRef.focus();
      if (document.documentElement.className.indexOf("edit-focus") === -1) {
        document.documentElement.classList.toggle("edit-focus");
      }
      onKeyEvent = false;
    }
  };

  const onFocus = () => {
    if (
      !onKeyEvent &&
      document.documentElement.className.indexOf("edit-focus") === -1
    ) {
      document.documentElement.classList.toggle("edit-focus");
      window.scrollTo(0, 0);
    }
  };

  const onBlur = () => {
    if (
      !onKeyEvent &&
      document.documentElement.className.indexOf("edit-focus") !== -1
    ) {
      document.documentElement.classList.toggle("edit-focus");
    }
  };

  const doBlur = () => {
    onKeyEvent = false;
    quillRef.blur();
    // force clean
    if (document.documentElement.className.indexOf("edit-focus") !== -1) {
      document.documentElement.classList.toggle("edit-focus");
    }
  };

  const onChangeContents = (content, delta, source, editor) => {
    dispatch(updateContents(content, editor.getContents()));
  };

  const savePDF = async () => {
    const pdfAsBlob = await pdfExporter.generatePdf(delta); 
    saveAs(pdfAsBlob, 'pdf-export.pdf'); 
  }

  return (
    <div className="PDFpage">
      <button className="btn save-pdf" onClick={savePDF}>Sauvegarder</button>
      <div className="main-content">
        <ReactQuill
          onRef={(el) => (quillRef = el)}
          value={contents}
          onChange={onChangeContents}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
          onBlur={onBlur}
          theme="snow"
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
}

export default WallFileEdit;
