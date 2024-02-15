/*
 * ByRefOrValue
 *
 * This tests for a oneOf interface representation 
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct Banana {
    #[serde(rename = "length")]
    pub length: i32,
}

impl Banana {
    pub fn new(length: i32) -> Banana {
        Banana {
            length,
        }
    }
}


