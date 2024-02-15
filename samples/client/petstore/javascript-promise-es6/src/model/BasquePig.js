/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BasquePig model module.
 * @module model/BasquePig
 * @version 1.0.0
 */
class BasquePig {
    /**
     * Constructs a new <code>BasquePig</code>.
     * @alias module:model/BasquePig
     * @param className {String} 
     * @param color {String} 
     */
    constructor(className, color) { 
        
        BasquePig.initialize(this, className, color);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, className, color) { 
        obj['className'] = className;
        obj['color'] = color;
    }

    /**
     * Constructs a <code>BasquePig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasquePig} obj Optional instance to populate.
     * @return {module:model/BasquePig} The populated <code>BasquePig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasquePig();

            if (data.hasOwnProperty('className')) {
                obj['className'] = ApiClient.convertToType(data['className'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BasquePig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BasquePig</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BasquePig.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['className'] && !(typeof data['className'] === 'string' || data['className'] instanceof String)) {
            throw new Error("Expected the field `className` to be a primitive type in the JSON string but got " + data['className']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }

        return true;
    }


}

BasquePig.RequiredProperties = ["className", "color"];

/**
 * @member {String} className
 */
BasquePig.prototype['className'] = undefined;

/**
 * @member {String} color
 */
BasquePig.prototype['color'] = undefined;






export default BasquePig;

