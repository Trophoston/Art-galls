    AOS.init();
    
    // Sample artwork data
    const artworks = [
        { 
          image: "./picasso/pic2.jpg", 
          artname: "Artwork 1 description", 
          artist: "Artist cat meaw" ,
          description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 
          
        },
  
        { 
          image: "./picasso/pic2.jpg", 
          artname: "Artwork 1 description", 
          artist: "Artist cat meaw" ,
          description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 
          
        },
  
        { 
          image: "./picasso/pic2.jpg", 
          artname: "Artwork 1 description", 
          artist: "Artist cat meaw" ,
          description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 
          
        },
  
        { 
          image: "./picasso/pic2.jpg", 
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
            <div class="col-md-4 " data-aos="fade-right">
              <div class="card mb-4 shadow-sm" >
                <img src="./picasso/pic${index+1}.jpg" class="card-img-top modal-image" alt="" id="myImg1"> 
                <div class="card-body">
                  <p class="card-text">${artwork.artname}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted"><b>เจ้าของผลงาน : </b>${artwork.artist}</small>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted"><b>แนวคิด : </b>${artwork.description}</small>
                  </div>
                </div>
              </div>
            </div>
          `;
          artworksRow.innerHTML += cardHtml;
        });
      }
      // Call the function to generate artwork cards when the page loads
      window.onload = generateArtworkCards;