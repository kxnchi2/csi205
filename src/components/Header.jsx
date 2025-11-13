import React from 'react';


const headerStyle = {
  backgroundColor: '#9fe699ff', 
  color: 'white',
  padding: '1.5rem',
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

function Header() {
  return (
    <header style={headerStyle}>
      <div>CSI205 การพัฒนาโปรแกรมส่วนหน้า </div>
    </header>
  );
}

export default Header;