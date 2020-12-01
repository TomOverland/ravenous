const apiKey = "-7M-FLi9pAw5IZTcngnebB3z6EBAMpRcynbi-zvJDQYBB71jJpy0_uXiFt-gUob5amNmT56YSJszcHkuE14Mya4-X52jsnplSNIwPokfcO9YNMBMM3VnV5dYSoDGX3Yx";

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            // console.log(jsonResponse.businesses);
            // Check to see if jsonResponse has a businesses key, which means it received a valid response from the Yelp API
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
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
                    }
                })
            }
        })
    }
}

export default Yelp;