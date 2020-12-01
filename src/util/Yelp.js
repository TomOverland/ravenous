const apiKey = "-7M-FLi9pAw5IZTcngnebB3z6EBAMpRcynbi-zvJDQYBB71jJpy0_uXiFt-gUob5amNmT56YSJszcHkuE14Mya4-X52jsnplSNIwPokfcO9YNMBMM3VnV5dYSoDGX3Yx";

const Yelp = {
    search(term, location, sortBy) {
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
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                })
            }
        })
    }
}

export default Yelp;