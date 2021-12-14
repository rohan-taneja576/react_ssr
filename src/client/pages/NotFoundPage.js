import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  console.log(staticContext);
  return (
    <div>
      <h1>Oops Page not Found</h1>
    </div>
  );
};

export default { component: NotFoundPage };
