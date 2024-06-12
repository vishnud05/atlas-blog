import React from "react";

const HTMLContent = ({ content }: { content: string }) => {
  const contentObj = {
    __html: content,
  };
  return (
    <div
      dangerouslySetInnerHTML={contentObj}
      className="prose dark:prose-invert"
    ></div>
  );
};

export default HTMLContent;
