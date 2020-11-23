const apiKey = 'FPQf0xCcDpcucQKQDhXAB5dm6DAKwKmfLt5YE5R-JEgPADJL9wnowelIODPm_5SETGJWVCX5J4sfFciKZwnXDcBp6Q4Yg67d_4qsmByEOLx6mSUWD5TnKeKm5s3wXnYx' ;

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {headers: {
            Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
          //different line than in hint! hint suggested jsonResponse.businesses
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                        id: business.id, 
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                })) ;
            };
        });
    }
} ;

export default Yelp ;

