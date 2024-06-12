import PostForm from "@/components/PostForm";
import React from "react";

const content = `<h1>Introduction</h1>
<p>This is an introductory blog for my personal blog website for testing.</p>
<hr>
<p><code>console.log('Hello');</code></p>
<p>&nbsp;</p>`;

const page = () => {
  const contentObj = { __html: content };
  return <PostForm />;
};

export default page;
