// import React from 'react';

// const images = [
//   { id: 1, title: 'Aryavart Academy', src: './cardImages/AA.png' },
//   { id: 2, title: 'Bhavdiya Public School, Ayodhya', src: './cardImages/bd.jpg' },
//   { id: 3, title: 'Faizabad Public School,Ayodhya', src: './cardImages/fps.avif' },
//   { id: 4, title: 'GD Goenka Public School, Ayodhya', src: './cardImages/gd.jpg' },
//   { id: 5, title: 'H.C.J. Academy, Ayodhya', src: './cardImages/h.jpeg' },
//   { id: 6, title: 'Jingle Bell School, Ayodhya', src: './cardImages/jba.jpg' },
//   { id: 7, title: 'Jingle Bell School, Ayodhya', src: './cardImages/jbs.jpg' },
//   { id: 8, title: 'Seth M.R.Jaipuria School, Ayodhya', src: './cardImages/jp.jpeg' },
//   { id: 9, title: 'Maa Ranjana Devi International school, Ayodhya', src: './cardImages/mrd.jpg' },
// ];

// const ImageCardGrid = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 p-20">
//       {images.map((image) => (
//         <div key={image.id} className="text-center">
//           <div className="relative group overflow-hidden rounded-lg shadow-lg">
//             <img
//               src={image.src}
//               alt={image.title}
//               className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <h3 className="text-white text-lg font-bold">{image.title}</h3>
//             </div>
//           </div>
//           {/* Title below the image */}
//           <h3 className="mt-4 text-lg font-semibold text-gray-800">{image.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageCardGrid;


import React from 'react';

const images = [
  { id: 1, title: 'Aryavart Academy', src: './cardImages/AA.png' },
  { id: 2, title: 'Bhavdiya Public School, Ayodhya', src: './cardImages/bd.jpg' },
  { id: 3, title: 'Faizabad Public School, Ayodhya', src: './cardImages/fps.avif' },
  { id: 4, title: 'GD Goenka Public School, Ayodhya', src: './cardImages/gd.jpg' },
  { id: 5, title: 'H.C.J. Academy, Ayodhya', src: './cardImages/h.jpeg' },
  { id: 6, title: 'Jingle Bell School, Ayodhya', src: './cardImages/jba.jpg' },
  { id: 7, title: 'Jingle Bell School, Ayodhya', src: './cardImages/jbs.jpg' },
  { id: 8, title: 'Seth M.R.Jaipuria School, Ayodhya', src: './cardImages/jp.jpeg' },
  { id: 9, title: 'Maa Ranjana Devi International school, Ayodhya', src: './cardImages/mrd.jpg' },
];

const ImageCardGrid = () => {
  return (
    <div className="py-20 px-8 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-800 tracking-wide">
          <span className="text-blue-500">Our</span> Partners
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          We are honored to collaborate with these prestigious institutions, fostering excellence and growth together.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {images.map((image) => (
          <div key={image.id} className="text-center group relative">
            {/* Card with Image */}
            <div className="overflow-hidden rounded-xl shadow-md transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-bold">{image.title}</h3>
              </div>
            </div>

            {/* Title Below Image */}
            <h3 className="mt-6 text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors">
              {image.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCardGrid;
