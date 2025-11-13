import React from 'react';

const footerStyle = {
  backgroundColor: '#f81d95ff', 
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  marginTop: 'auto', // ดัน Footer ลงล่างสุดเสมอ
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>มหาวิทยาลัยศรีปทุม</p>
      <p>คณะเทคโนโลยีสารสนเทศ | สาขาวิทยาการคอมพิวเตอร์</p>
      <p>ติดต่อ: Facebook : Natthakron Ruttanarak Instagram : _chxf1</p>
    </footer>
  );
}

export default Footer;