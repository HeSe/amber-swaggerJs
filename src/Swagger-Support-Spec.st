Smalltalk createPackage: 'Swagger-Support-Spec'!
Object subclass: #SwaggerApi
	instanceVariableNames: ''
	package: 'Swagger-Support-Spec'!

SwaggerApi class instanceVariableNames: 'swaggerApi'!

!SwaggerApi class methodsFor: 'not yet classified'!

apiDocUrl

	^self subclassResponsibillity
!

build

	^ self swaggerApi build
!

initializeSwaggerInterfaceFor: anUI

  swaggerApi := NativeFunction constructor: SwaggerApi value: #{
    'url' -> self apiDocUrl.
	'useJQuery' -> true.
    'success' -> [
        (self ready = true) ifTrue:[ anUI initUIAfterApi ] 
    ]}.
!

ready

	^ self swaggerApi at: 'ready'
!

response

	^ self swaggerApi at: 'response'
!

swaggerApi 

	 ^swaggerApi
! !

Object subclass: #SwaggerApiSpecData
	instanceVariableNames: 'data'
	package: 'Swagger-Support-Spec'!

!SwaggerApiSpecData methodsFor: 'not yet classified'!

data
	
 	^data
!

data: anObject
	
 	data := anObject
!

emptyData
	
	<return {};>
!

initialize
	
 	data :=  #{}.
! !

!SwaggerApiSpecData class methodsFor: 'not yet classified'!

emptyContent

	<return {};>
!

onParsedJson: aJSObject

	^ self newDefault initializeOnParsedJson: aJSObject
! !

SwaggerApiSpecData subclass: #SwaggerAPISpecificationItem
	instanceVariableNames: ''
	package: 'Swagger-Support-Spec'!

!SwaggerAPISpecificationItem methodsFor: 'not yet classified'!

initializeOnParsedJson: aJSObject

	^self subclassResponsibility
!

nothing
	
	data := self emptyData.
	data at: 'username' put: ('.name input') asJQuery val.
	data at: 'email' put: ('.email input') asJQuery val.
	data at: 'password' put: ('.password input') asJQuery val.
! !

!SwaggerAPISpecificationItem class methodsFor: 'not yet classified'!

jQueryFromValues: anArray

	<return $.map(anArray, function(el){ return new self(el);})>
!

newDefault

	^self new
! !

SwaggerAPISpecificationItem subclass: #SwaggerSpecApi
	instanceVariableNames: ''
	package: 'Swagger-Support-Spec'!

!SwaggerSpecApi methodsFor: 'not yet classified'!

description   
        
	^self data at: 'description'  ifAbsent:[]
!

description: anObject   
        
	self data at: 'description' put: anObject
!

initialize

	super initialize.
	self data at: 'operations' put: Array new.
!

initializeOnParsedJson: aJSObject

	self path: aJSObject path.
	
	(aJSObject hasOwnProperty: 'description')
		ifTrue:[ self description: aJSObject description ].
	
	self setOperations: aJSObject operations.
!

operations   
        
	^self data at: 'operations' ifAbsent:[Array new].
!

operations: anObject   
        
	self data at: 'operations' put: anObject
!

path   
        
	^self data at: 'path'  ifAbsent:[]
!

path: anObject   
        
	self data at: 'path' put: anObject
!

setOperations: anArray

	anArray addAsSwaggerClass: SwaggerSpecOperation toArray: self operations
! !

!SwaggerSpecApi class methodsFor: 'not yet classified'!

fromJson: aJSON 

	^self new initializeOnParsedJson: ( JSON parse: aJSON ).
! !

SwaggerAPISpecificationItem subclass: #SwaggerSpecDefinition
	instanceVariableNames: ''
	package: 'Swagger-Support-Spec'!

!SwaggerSpecDefinition methodsFor: 'not yet classified'!

apiVersion 

	^self data at: 'apiVersion'  ifAbsent:[]
!

apiVersion: anObject   
        
	self data at: 'apiVersion' put: anObject
!

apis 

	^self data at: 'apis'  ifAbsent:[]
!

apis: anObject   
        
	self data at: 'apis' put: anObject
!

basePath 

	^self data at: 'basePath'  ifAbsent:[]
!

basePath: anObject   
        
	self data at: 'basePath' put: anObject
!

consumes 

	^self data at: 'consumes'  ifAbsent:[]
!

consumes: anObject   
        
	self data at: 'consumes' put: anObject
!

initialize

	super initialize.
	self data at: 'models' put: Array new.
	self data at: 'apis' put: Array new.
!

initializeOnParsedJson: aJSObject
	""
	self apiVersion: aJSObject apiVersion.
	self swaggerVersion: aJSObject swaggerVersion.
	self basePath: aJSObject basePath.
	self resourcePath: aJSObject resourcePath.
	self produces: aJSObject produces.
	
	(aJSObject hasOwnProperty: 'name')
		ifTrue:[ self name: aJSObject name ].
	
	(aJSObject hasOwnProperty: 'apis')
		ifTrue:[ self setApis: aJSObject apis ].
		
	(aJSObject hasOwnProperty: 'models')
		ifTrue:[ self setModels:  aJSObject models ].
!

models  
        
	^self data at: 'models'  ifAbsent:[]
!

models: anObject   
        
	self data at: 'models' put: anObject
!

name
	^self data at: 'name' ifAbsent:[]
!

name: anObject   
        
	self data at: 'name' put: anObject
!

produces  
        
	^self data at: 'produces'  ifAbsent:[]
!

produces: anObject   
        
	self data at: 'produces' put: anObject
!

resourcePath 

	^self data at: 'resourcePath'  ifAbsent:[]
!

resourcePath: anObject   
        
	self data at: 'resourcePath' put: anObject
!

setApis: anArray
    
	anArray addAsSwaggerClass: SwaggerSpecApi toArray: self apis.
!

setModels: anArray

	anArray addAsSwaggerClass: SwaggerSpecModel toArray: self models.
!

swaggerVersion 

	^self data at: 'swaggerVersion'  ifAbsent:[]
!

swaggerVersion: anObject   
        
	self data at: 'swaggerVersion' put: anObject
! !

!SwaggerSpecDefinition class methodsFor: 'not yet classified'!

default
	
	^self fromJson: ( JSON parse: '{"apiVersion":"1.0.0","swaggerVersion":"1.2","basePath":"http://petstore.swagger.wordnik.com/api","resourcePath":"/pet","produces":["application/json","application/xml","text/plain","text/html"],"apis":[{"path":"/pet/{petId}","operations":[{"method":"GET","summary":"Find pet by ID","notes":"Returns a pet based on ID","type":"Pet","nickname":"getPetById","parameters":[{"name":"petId","description":"ID of pet that needs to be fetched","required":true,"type":"integer","format":"int64","paramType":"path","minimum":"1.0","maximum":"100000.0"}],"responseMessages":[{"code":400,"message":"Invalid ID supplied"},{"code":404,"message":"Pet not found"}]}]},{"path":"/pet/findByStatus","operations":[{"method":"GET","summary":"Finds Pets by status","notes":"Multiple status values can be provided with comma seperated strings","type":"array","items":{"$ref":"Pet"},"nickname":"findPetsByStatus","parameters":[{"name":"status","description":"Status values that need to be considered for filter","defaultValue":"available","required":true,"type":"string","paramType":"query","enum":["available","pending","sold"]}],"responseMessages":[{"code":400,"message":"Invalid status value"}]}]},{"path":"/pet/findByTags","operations":[{"method":"GET","summary":"Finds Pets by tags","notes":"Muliple tags can be provided with comma seperated strings. Use tag1, tag2, tag3 for testing.","type":"array","items":{"$ref":"Pet"},"nickname":"findPetsByTags","parameters":[{"name":"tags","description":"Tags to filter by","required":true,"type":"string","paramType":"query"}],"responseMessages":[{"code":400,"message":"Invalid tag value"}],"deprecated":"true"}]}],"models":{"Tag":{"id":"Tag","properties":{"id":{"type":"integer","format":"int64","description":"Unique identifier for the tag"},"name":{"type":"string","description":"Friendly name for the tag"}}},"Pet":{"id":"Pet","required":["id","name"],"properties":{"id":{"type":"integer","format":"int64","description":"Unique identifier for the Pet","minimum":"0.0","maximum":"100.0"},"category":{"$ref":"Category","description":"Category the pet is in"},"name":{"type":"string","description":"Friendly name of the pet"},"photoUrls":{"type":"array","description":"Image URLs","items":{"type":"string"}},"tags":{"type":"array","description":"Tags assigned to this pet","items":{"$ref":"Tag"}},"status":{"type":"string","description":"pet status in the store","enum":["available","pending","sold"]}}},"Category":{"id":"Category","properties":{"id":{"type":"integer","format":"int64","description":"Category unique identifier","minimum":"0.0","maximum":"100.0"},"name":{"type":"string","description":"Name of the category","minimum":"0.0","maximum":"100.0"}}}}}' )
!

newDefault

	^super newDefault
		name: 'New API';
	    apiVersion: '0.01';
		swaggerVersion: '1.1';
		yourself
!

specificationDefinition

	^'{
  "type": "object",
  "$schema": "http://json-schema.org/draft-04/schema",
  "required": [
    "swaggerVersion",
    "resourcePath",
    "apis",
    "basePath"
  ],
  "properties": {
    "apiVersion": {
      "type": "string"
    },
    "basePath": {
      "type": "string"
    },
    "swaggerVersion": {
      "enum": [
        "1.2"
      ]
    },
    "consumes": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "produces": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "resourcePath": {
      "type": "string"
    },
    "apis": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "required": [
            "path",
            "operations"
          ],
          "properties": {
            "path": {
              "type": "string"
            },
            "operations": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "required": [
                    "method",
                    "nickname",
                    "summary",
                    "type"
                  ],
                  "properties": {
                    "authorizations": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "method": {
                      "type": "string",
                      "enum": [
                        "GET",
                        "PUT",
                        "POST",
                        "DELETE",
                        "OPTIONS",
                        "PATCH"
                      ]
                    },
                    "nickname": {
                      "type": "string"
                    },
                    "summary": {
                      "type": "string"
                    },
                    "notes": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    },
                    "parameters": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name",
                          "paramType",
                          "required",
                          "type"
                        ],
                        "properties": {
                          "allowMultiple": {
                            "type": "boolean",
                            "enum": [
                              true,
                              false
                            ]
                          },
                          "description": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "paramType": {
                            "type": "string",
                            "enum": [
                              "query",
                              "path",
                              "body",
                              "header"
                            ]
                          },
                          "required": {
                            "type": "boolean",
                            "enum": [
                              true,
                              false
                            ]
                          },
                          "type": {
                            "type": "string"
                          },
                          "items": {
                            "anyOf": [
                              {
                                "$ref": "#"
                              },
                              {
                                "$ref": "#/definitions/schemaArray"
                              }
                            ],
                            "default": {}
                          }
                        }
                      }
                    },
                    "produces": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "responseMessages": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "code": {
                            "type": "number"
                          },
                          "message": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    "models": {
      
    }
  }
}'
! !

SwaggerAPISpecificationItem subclass: #SwaggerSpecModel
	instanceVariableNames: ''
	package: 'Swagger-Support-Spec'!

!SwaggerSpecModel methodsFor: 'not yet classified'!

id     
  
	^self data at: 'id'  ifAbsent:[]
!

id: anObject   
        
	self data at: 'id' put: anObject
!

initialize

	super initialize.
	self data at: 'properties' put: Dictionary new.
	self data at: 'required' put: Array new.
!

initializeOnParsedJson: aJSObject

	self id: aJSObject id.
	
	(aJSObject hasOwnProperty: 'required')
		ifTrue:[ self required: aJSObject required].
	
	self setProperties: aJSObject properties.
!

properties     
  
	^self data at: 'properties'  ifAbsent:[Array new]
!

properties: anObject   
        
	self data at: 'properties' put: anObject
!

required     
  
	^self data at: 'required'  ifAbsent:[Array new]
!

required: anObject   
        
	self data at: 'required' put: anObject
!

setProperties: anArray
    
	anArray addAsSwaggerClass: SwaggerSpecModelProperty toDict: self properties
! !

SwaggerAPISpecificationItem subclass: #SwaggerSpecModelProperty
	instanceVariableNames: ''
	package: 'Swagger-Support-Spec'!

!SwaggerSpecModelProperty methodsFor: 'not yet classified'!

description

	^self data at: 'description'  ifAbsent:[]
!

description: anObject   
        
	self data at: 'description' put: anObject
!

enum     
  
	^self data at: 'enum'   ifAbsent:[]
!

enum: anObject   
        
	self data at: 'enum' put: anObject
!

format

	^self data at: 'format'  ifAbsent:[]
!

format: anObject   
        
	self data at: 'format' put: anObject
!

initializeOnParsedJson: aJSObject

	(aJSObject hasOwnProperty: 'description')
		ifTrue:[ self description: aJSObject description].
	
	(aJSObject hasOwnProperty: 'enum')
		ifTrue:[ self enum: aJSObject enum ].
		
		(aJSObject hasOwnProperty: 'format')
		ifTrue:[ self format: aJSObject format ].
	
	(aJSObject hasOwnProperty: 'ref')
		ifTrue:[ self ref: aJSObject ref].
		
	(aJSObject hasOwnProperty: 'type')
		ifTrue:[ self type: aJSObject type ].
!

ref     
  
	^self data at: 'ref'  ifAbsent:[]
!

ref: anObject   
        
	self data at: 'ref' put: anObject
!

type 

	^self data  at: 'type'  ifAbsent:[]
!

type: anObject   
        
	self data at: 'type' put: anObject
! !

SwaggerAPISpecificationItem subclass: #SwaggerSpecOperation
	instanceVariableNames: ''
	package: 'Swagger-Support-Spec'!

!SwaggerSpecOperation methodsFor: 'not yet classified'!

authorizations 

	^self data at: 'authorizations'  ifAbsent:[]
!

authorizations: anObject   
        
	self data at: 'authorizations' put: anObject
!

deprecated    

	^self data at: 'deprecated'  ifAbsent:[]
!

deprecated: anObject   
        
	self data at: 'deprecated' put: anObject
!

initialize

	super initialize.
	self data at: 'parameters' put: Array new.
	self data at: 'responseMessages' put: Array new.
!

initializeOnParsedJson: aJSObject

	(aJSObject hasOwnProperty: 'authorizations')
		ifTrue:[ self authorizations: aJSObject authorizations ].
									
	(aJSObject hasOwnProperty: 'deprecated')
		ifTrue:[ self deprecated: aJSObject deprecated ].
		
	self method: aJSObject method.
	self nickname: aJSObject nickname.
	
	(aJSObject hasOwnProperty: 'notes')
		ifTrue:[ self notes: aJSObject notes].
									
	(aJSObject hasOwnProperty: 'produces')
		ifTrue:[ self produces: aJSObject produces ].
		
	(aJSObject hasOwnProperty: 'responseClass')
		ifTrue:[ self responseClass: aJSObject responseClass ].
		
	self summary: aJSObject summary.
	
	self setParameters: aJSObject parameters.
	self setResponseMessages: aJSObject responseMessages.
!

method 

	^self data at: 'method'  ifAbsent:[]
!

method: anObject   
        
	self data at: 'method' put: anObject
!

nickname 

	^self data at: 'nickname'  ifAbsent:[]
!

nickname: anObject   
        
	self data at: 'nickname' put: anObject
!

notes

	^self data at: 'notes'  ifAbsent:[]
!

notes: anObject   
        
	self data at: 'notes' put: anObject
!

parameters 

	^self data at: 'parameters'  ifAbsent:[Array new]
!

parameters: anObject   
        
	self data at: 'parameters' put: anObject
!

produces 

	^self data at: 'produces'  ifAbsent:[]
!

produces: anObject   
        
	self data at: 'produces' put: anObject
!

responseClass 

	^self data at: 'responseClass'  ifAbsent:[]
!

responseClass: anObject   
        
	self data at: 'responseClass' put: anObject
!

responseMessages

	^self data at: 'responseMessages'  ifAbsent:[Array new]
!

responseMessages: anObject   
        
	self data at: 'responseMessages' put: anObject
!

setParameters: anArray

	anArray addAsSwaggerClass: SwaggerSpecOperationParam toArray: self parameters
!

setResponseMessages: anArray

	anArray addAsSwaggerClass: SwaggerSpecOperationResponseMessage toArray: self responseMessages
!

summary 

	^self data at: 'summary'  ifAbsent:[]
!

summary: anObject   
        
	self data at: 'summary' put: anObject
!

type    

	^self data at: 'type'  ifAbsent:[]
!

type: anObject   
        
	self data at: 'type' put: anObject
! !

SwaggerAPISpecificationItem subclass: #SwaggerSpecOperationParam
	instanceVariableNames: ''
	package: 'Swagger-Support-Spec'!

!SwaggerSpecOperationParam methodsFor: 'not yet classified'!

allowMultiple 

	^self data at: 'allowMultiple' ifAbsent:[]
!

allowMultiple: anObject   
        
	self data at: 'allowMultiple' put: anObject
!

allowableValues      

	^self data at: 'allowableValues' ifAbsent:[]
!

allowableValues: anObject   
        
	self data at: 'allowableValues' put: anObject
!

dataType 

	^self data at: 'dataType' ifAbsent:[]
!

dataType: anObject   
        
	self data at: 'dataType' put: anObject
!

defaultValue 

	^self data at: 'defaultValue' ifAbsent:[]
!

defaultValue: anObject   
        
	self data at: 'defaultValue' put: anObject
!

description

	^self data at: 'description'  ifAbsent:[]
!

description: anObject   
        
	self data at: 'description' put: anObject
!

initialize

	super initialize.
	self data at: 'items' put: Array new.
!

initializeOnParsedJson: aJSObject

	self description: aJSObject description.

	(aJSObject hasOwnProperty: 'allowMultiple')
		ifTrue:[ self allowMultiple: aJSObject allowMultiple ].
	
(aJSObject hasOwnProperty: 'allowableValues')
		ifTrue:[ self allowableValues: aJSObject allowableValues ].
	
  (aJSObject hasOwnProperty: 'dataType')
		ifTrue:[  self dataType: aJSObject dataType].
	
(aJSObject hasOwnProperty: 'defaultValue')
		ifTrue:[ self defaultValue: aJSObject defaultValue ].
	
(aJSObject hasOwnProperty: 'name')
		ifTrue:[ self name: aJSObject name ].
	
(aJSObject hasOwnProperty: 'paramType')
		ifTrue:[ self paramType: aJSObject paramType ].
	
(aJSObject hasOwnProperty: 'required')
		ifTrue:[ self required: aJSObject required ].
	
(aJSObject hasOwnProperty: 'type')
		ifTrue:[ self type: aJSObject type ].
		
 (aJSObject hasOwnProperty: 'minimum')
		ifTrue:[ self minimum: aJSObject minimum ].
		
 (aJSObject hasOwnProperty: 'maximum')
		ifTrue:[ self maximum: aJSObject maximum ].
	
	(aJSObject hasOwnProperty: 'items')
		ifTrue:[ self setItems: aJSObject items].
!

items 

	^self data at: 'items' ifAbsent:[Array new]
!

items: anObject   
        
	self data at: 'items' put: anObject
!

maximum 

	^self data at: 'maximum' ifAbsent:[]
!

maximum: anObject   
        
	self data at: 'maximum' put: anObject
!

minimum 

	^self data at: 'minimum' ifAbsent:[]
!

minimum: anObject   
        
	self data at: 'minimum' put: anObject
!

name 
	^self data at: 'name' ifAbsent:[]
!

name: anObject   
        
	self data at: 'name' put: anObject
!

paramType

	^self data at: 'paramType' ifAbsent:[]
!

paramType: anObject   
        
	self data at: 'paramType' put: anObject
!

required 

	^self data at: 'required' ifAbsent:[]
!

required: anObject   
        
	self data at: 'required' put: anObject
!

setItems: anArray

	anArray addAsSwaggerClass: SwaggerSpecOperationParamItems toArray: self items
!

type      

	^self data at: 'type' ifAbsent:[]
!

type: anObject   
        
	self data at: 'type' put: anObject
! !

SwaggerAPISpecificationItem subclass: #SwaggerSpecOperationParamItems
	instanceVariableNames: ''
	package: 'Swagger-Support-Spec'!

!SwaggerSpecOperationParamItems methodsFor: 'not yet classified'!

anyOf 

	^self data at: 'anyOf' ifAbsent:[]
!

anyOf: anObject   
        
	self data at: 'anyOf' put: anObject
!

default 

	^self data at: 'default' ifAbsent:[]
!

default: anObject   
        
	self data at: 'default' put: anObject
!

initializeOnParsedJson: aJSObject

	self anyOf: aJSObject anyOf.
	self default: aJSObject default.
! !

SwaggerAPISpecificationItem subclass: #SwaggerSpecOperationResponseMessage
	instanceVariableNames: ''
	package: 'Swagger-Support-Spec'!

!SwaggerSpecOperationResponseMessage methodsFor: 'not yet classified'!

code 

	^self data at: 'code' ifAbsent:[]
!

code: anObject   
        
	self data at: 'code' put: anObject
!

initializeOnParsedJson: aJSObject

	self code: aJSObject code.
	self message: aJSObject message.
!

message 

	^self data at: 'message' ifAbsent:[]
!

message: anObject   
        
	self data at: 'message' put: anObject
! !

!Array methodsFor: '*Swagger-Support-Spec'!

addAsSwaggerClass: aClass toArray: anArray

	self do:[:each | anArray add: ( aClass onParsedJson: each ) ]
!

addAsSwaggerClass: aClass toDict: aDict

	self do:[:each | aDict at: each put: ( aClass onParsedJson: each ) ]
! !

!JSObjectProxy methodsFor: '*Swagger-Support-Spec'!

addAsSwaggerClass: aClass toArray: anArray

	self objectKeys do:[:each | anArray add: ( aClass onParsedJson: ( self at: each ) ) ]
!

addAsSwaggerClass: aClass toDict: aDict

	self objectKeys do:[:each | aDict at: each put: ( aClass onParsedJson: ( self at: each ) ) ]
!

objectKeys

	<return Object.keys( self['@jsObject'] );>
! !

