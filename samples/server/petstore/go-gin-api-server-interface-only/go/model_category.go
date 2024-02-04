/*
 * OpenAPI Petstore
 *
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package petstoreserver

// Category - A category for a pet
type Category struct {

	Id int64 `json:"id,omitempty"`

	Name string `json:"name,omitempty"`
}
