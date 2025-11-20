import React from 'react';

const MainContent = ({pageName, designerName}) => {
  return (
    <div>
        <main>
      {pageName} PAGE
      <br />
      this page is designed by {designerName}
      </main>
    </div>
  );
}

export default MainContent;



