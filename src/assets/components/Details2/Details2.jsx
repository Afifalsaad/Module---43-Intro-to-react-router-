import React, { use } from "react";

const Details2 = ({ dataPromise }) => {
  const { name, email } = use(dataPromise);
  console.log(name, email);

  return (
    <div>
      <p>
        User Name: {name}
      </p>
      <p><small>User mail: {email}</small></p>
    </div>
  );
};

export default Details2;
