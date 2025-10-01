import React, { use } from "react";

const Users2 = ({ dataPromise }) => {
  const data = use(dataPromise);
  console.log(data);

  return (
    <div>
      <h3>This is from users 2</h3>
    </div>
  );
};

export default Users2;
