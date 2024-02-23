const artworks = [
    { 
      image: "./picasso/pic1.jpg", 
      artname: "Caine & Bubble", 
      artist: "วาณิชการ ใหม่อารินทร์" ,
      noumber: "40",
      description: "แนวคิด ได้รับแรงบันตาลใจมาจากคนเมชั่นเรื่อง'The Amazing Digital Cirous' คุณจะได้รู้จักเคน ผู้นำละครสัตว์ และขับเบิ้ลคู่หูของเขา ที่พาคุณไปรู้จักกับเพื่อนใหม่งได้แก่เจ้าซ์ รากาต้ ติงซูเบิล แกงเกิล' และช่วย ผจบภัย และดันหาปริสเดไปกับพวกเขาในโลกแห่งละครสัตว์และการแสดงสุดหัศจรรย์และวุ่นวาย", 
      
    },

    { 
      image: "./picasso/pic2.jpg", 
      artname: "Artwork 1 description", 
      artist: "Artist cat meaw" ,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 
      
    },

    { 
      image: "./picasso/pic3.jpg", 
      artname: "Artwork 1 description", 
      artist: "Artist cat meaw" ,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 
      
    },

    { 
      image: "./picasso/pic4.jpg", 
      artname: "Artwork 1 description", 
      artist: "Artist cat meaw" ,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 
      
    },

    
  ];

  

  // Function to dynamically generate artwork cards
  function generateArtworkCards() {
    const artworksRow = document.getElementById('artworksRow');
    artworksRow.innerHTML = ''; // Clear existing content
    
    //${artwork.image}
    artworks.forEach((artwork, index) => {
      const cardHtml = `
        <div class="col-md-3 " data-aos="fade-right">
          <div class="card mb-4 shadow-sm" >
            <img src="./picasso/pic${index+1}.jpg" class="card-img-top modal-image" alt="" id="myImg1"> 
            <div class="card-body">
              <p class="card-text">${artwork.artname}</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted"><b>แนวคิด : </b>${artwork.description}</small>
              </div>
             
            </div>
            <div class="card-footer">
            <small class="text-body-secondary">${artwork.artist} เลขที่ ${artwork.noumber}</small>
          </div>
          </div>
        </div>
      `;
      artworksRow.innerHTML += cardHtml;
    });
  }
  // Call the function to generate artwork cards when the page loads
  window.onload = generateArtworkCards;