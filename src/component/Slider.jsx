import React from 'react';

const Slider = () => {
  return (
    <div className='h-40 w-100 position-relative pb-3 mb-3' >
      <div className='d-flex justify-content-center align-items-center h-100 w-100' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <img
          src="https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VlMK9~iAQRpXo-W5txR7OSIlYv6aIUuE7p2Hsun89vKmQDCKYbr-ZUE4A7Yl9XD~yCZSx22yyJuGSZ2PLA7v~ATFMybGzlV2L-a~-o6YEzjTPRMYRX6ysiL4vSKdcXXAQbxOAlnE3vDey6mBNWpeYKThwBwck5jVgya~4Is5Xlrf0b6GlGnmkpganoPB4o7iwuzvw6xv6NbF9kXi-lc~-u9i3VLtng8FK4nIkO2hsit7j2n~odcHvzmVTNDYcjQLgTuCRR1ZCRJD7D87Jatvi-~dEuPEaZQcC9siBT5J7iAblfAATTt2MvyK62rOjLTxm9DtwhUWkUUp2oztjagAxg__"
          alt=""
          style={{ width: '100vw', height: '50vh', objectFit: 'cover' }}
        />
      </div>
      <div className='position-absolute bottom-0 start-0 p-4 m-5 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <h1 className='font-weigth-bold'>Computer Engineering</h1>
        <p>142,765 computer engineer flow this</p>
      </div>
    </div>
  );
};

export default Slider;
